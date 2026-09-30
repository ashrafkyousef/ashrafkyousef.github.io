import { operations } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Results() {
  return (
    <section id="results" className="section-space border-t border-line-soft">
      <div className="container-page">
        <SectionHeading eyebrow="Bar operations / 01" title="Cost discipline. Service consistency." />
        <Reveal className="mt-10">
          <article className="overflow-hidden rounded-2xl border border-amber/20 bg-gradient-to-br from-surface to-ink-2">
            <div className="border-b border-line-soft p-7 sm:p-9">
              <p className="eyebrow">Assistant Bar Manager · Nov 2022 – Dec 2025</p>
              <h3 className="mt-4 text-2xl text-paper sm:text-3xl">{operations.title}</h3>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-paper-dim">{operations.intro}</p>
            </div>
            <ul className="grid gap-px bg-line-soft sm:grid-cols-2">
              {operations.areas.map((area) => (
                <li key={area.title} className="bg-ink-2 p-6 sm:p-8">
                  <h4 className="font-display text-xl text-paper">{area.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-paper-dim">{area.body}</p>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
