export const stockFields = [
  { key: "opening", label: "Opening stock" },
  { key: "received", label: "Received" },
  { key: "transferIn", label: "Transfers in" },
  { key: "transferOut", label: "Transfers out" },
  { key: "used", label: "Sales + recorded waste" },
  { key: "counted", label: "Physical count" },
] as const;

export type StockField = (typeof stockFields)[number]["key"];
export type StockInputs = Record<StockField, string>;

export const exampleStock: StockInputs = {
  opening: "12", received: "6", transferIn: "0", transferOut: "2", used: "8", counted: "7.5",
};

export function reconcileStock(inputs: StockInputs) {
  const quantities = {} as Record<StockField, number>;
  for (const { key } of stockFields) {
    const value = Number(inputs[key]);
    if (!inputs[key].trim() || !Number.isFinite(value) || value < 0 || value > 100000 || Math.abs(value * 100 - Math.round(value * 100)) > 1e-7) {
      return { ok: false as const, message: "Enter a quantity from 0 to 100,000, with up to two decimal places, in every field." };
    }
    // Calculate in hundredths of a bottle to avoid decimal rounding differences.
    quantities[key] = Math.round(value * 100);
  }
  const expected = quantities.opening + quantities.received + quantities.transferIn - quantities.transferOut - quantities.used;
  if (expected < 0) {
    return { ok: false as const, message: "Recorded usage and transfers out exceed available stock. Check the inputs." };
  }
  const variance = quantities.counted - expected;
  return { ok: true as const, expected: expected / 100, counted: quantities.counted / 100, variance: variance / 100 };
}
