import { digitalOperations, systems } from "@/lib/content";

export default function Tools() {
  return (
    <div id="tools" className="scroll-mt-24">
      <h3 className="text-xl text-paper">Hospitality systems</h3>
      <ul className="mt-4 flex flex-wrap gap-2">{systems.map((system) => <li key={system.name} className="rounded-lg border border-line bg-surface/50 px-4 py-2.5 text-sm text-paper-dim">{system.name}</li>)}</ul>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-paper-dim"><span className="font-medium text-paper">Digital operations: </span>{digitalOperations}</p>
    </div>
  );
}
