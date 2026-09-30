"use client";

import { useState } from "react";
import { ArrowDown, RotateCcw } from "lucide-react";
import { exampleStock, reconcileStock, stockFields, type StockInputs } from "@/lib/stock-reconciliation";
import SectionHeading from "./SectionHeading";

const format = (value: number) => new Intl.NumberFormat("en", { maximumFractionDigits: 2 }).format(value);

export default function WorkSample() {
  const [inputs, setInputs] = useState<StockInputs>({ ...exampleStock });
  const result = reconcileStock(inputs);
  return (
    <section id="work-sample" className="section-space border-t border-line-soft">
      <div className="container-page">
        <SectionHeading eyebrow="Work sample / 02" title="A closer look at stock control." lede="Explore a sample reconciliation: compare recorded movements with a physical count, then decide what to check next." />
        <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-surface/40">
          <div className="border-b border-line px-6 py-4 sm:px-8">
            <p className="text-xs font-medium uppercase tracking-wider text-amber-soft">Illustrative demonstration · fictional figures</p>
            <p className="mt-1 text-xs leading-relaxed text-paper-dim">One product, one stock period. Quantities are bottle equivalents. This example does not represent results from a former employer.</p>
          </div>
          <div className="grid lg:grid-cols-[1.15fr_1fr]">
            <div className="p-6 sm:p-8">
              <h3 className="text-xl text-paper">From movement records to a clear variance</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper-dim">Expected closing stock = opening + received + transfers in − transfers out − (sales + recorded waste).</p>
              <div aria-live="polite" aria-atomic="true" className="mt-6">
                {result.ok ? (
                  <>
                    <dl className="grid grid-cols-3 gap-3">
                      <div><dt className="text-xs text-paper-dim">Expected</dt><dd className="mt-2 break-all font-display text-2xl sm:text-3xl text-paper">{format(result.expected)}</dd></div>
                      <div><dt className="text-xs text-paper-dim">Counted</dt><dd className="mt-2 break-all font-display text-2xl sm:text-3xl text-paper">{format(result.counted)}</dd></div>
                      <div><dt className="text-xs text-paper-dim">Variance</dt><dd className="mt-2 break-all font-display text-2xl sm:text-3xl text-amber-soft">{result.variance > 0 ? "+" : ""}{format(result.variance)}</dd></div>
                    </dl>
                    <p className="mt-4 text-sm font-medium text-amber-soft">{result.variance === 0 ? "The count matches the recorded stock movements." : `${format(Math.abs(result.variance))} bottle${Math.abs(result.variance) === 1 ? "" : "s"} ${result.variance < 0 ? "below" : "above"} the expected count — check the difference.`}</p>
                  </>
                ) : <p role="alert" className="rounded-lg border border-amber/30 p-4 text-sm text-amber-soft">{result.message}</p>}
              </div>
              <details className="mt-5 border-t border-line pt-4">
                <summary className="min-h-11 cursor-pointer text-sm font-medium text-paper marker:text-amber">Adjust the sample figures</summary>
                <fieldset className="mt-3">
                  <legend className="mb-4 text-xs text-paper-dim">Bottle equivalents · same product and stock period</legend>
                  <div className="grid grid-cols-2 gap-4">{stockFields.map(({ key, label }) => (
                    <label key={key} className="block text-xs text-paper-dim" htmlFor={`stock-${key}`}>{label}
                      <input id={`stock-${key}`} type="number" min="0" max="100000" step="0.01" inputMode="decimal" value={inputs[key]} onChange={(event) => setInputs({ ...inputs, [key]: event.target.value })} className="mt-2 block min-h-11 w-full min-w-0 rounded-lg border border-line bg-ink px-3 py-2 text-base text-paper focus:border-amber" />
                    </label>
                  ))}</div>
                </fieldset>
                <button type="button" onClick={() => setInputs({ ...exampleStock })} className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-amber-soft hover:text-paper"><RotateCcw aria-hidden="true" size={15} />Reset example</button>
              </details>
              <noscript><p className="mt-3 text-xs text-paper-dim">The example above shows the default calculation. Enable JavaScript to adjust the figures.</p></noscript>
            </div>
            <div className="border-t border-line bg-ink-2/60 p-6 sm:p-8 lg:border-t-0 lg:border-l">
              <h3 className="text-xl text-paper">Follow the difference through</h3>
              <ol className="mt-5 space-y-4">
                <li className="flex gap-3"><span className="font-mono text-xs text-amber">01</span><p className="text-sm text-paper-dim"><strong className="font-medium text-paper">Recount.</strong> Check part bottles, product identity, and the count’s timing.</p></li>
                <li className="flex gap-3"><span className="font-mono text-xs text-amber">02</span><p className="text-sm text-paper-dim"><strong className="font-medium text-paper">Check the records.</strong> Review receipts, transfers, recipe quantities, breakage, and wastage for the same period.</p></li>
                <li className="flex gap-3"><span className="font-mono text-xs text-amber">03</span><p className="text-sm text-paper-dim"><strong className="font-medium text-paper">Document and follow up.</strong> Record the explanation and supporting evidence; escalate an unresolved difference.</p></li>
              </ol>
              <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-paper-faint">A variance identifies a question to investigate. The calculation alone does not establish its cause.</p>
              <a href="#contact" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm text-amber-soft hover:text-paper">Discuss my experience<ArrowDown aria-hidden="true" size={15} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
