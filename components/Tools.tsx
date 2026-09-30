import { digitalOperations, systems } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function Tools() {
  return (
    <section id="tools" className="section-space border-t border-line-soft">
      <div className="container-page">
        <SectionHeading eyebrow="Systems / 03" title="Hospitality systems. Practical digital support." />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((system) => <li key={system.name} className="rounded-2xl border border-line bg-surface/50 p-6"><h3 className="text-xl text-paper">{system.name}</h3><p className="mt-3 text-sm text-paper-dim">{system.scope}</p></li>)}
        </ul>
        <div className="mt-6 rounded-2xl border border-line p-6 sm:p-8">
          <h3 className="text-xl text-paper">Digital tools & workflows</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-paper-dim">{digitalOperations}</p>
        </div>
      </div>
    </section>
  );
}
