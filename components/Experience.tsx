import { careerBreak, preOpening, timeline } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section-space border-t border-line-soft bg-ink-2/60">
      <div className="container-page">
        <SectionHeading eyebrow="Experience / 02" title="Built on the floor. Grown through leadership." lede="11 years of UAE hospitality experience across high-volume lifestyle venues, luxury hotels, and premium dining operations." />
        <ol className="mt-10">
          {timeline.map((entry) => (
            <li key={entry.venue}>
              <Reveal>
                <article className="grid gap-4 border-t border-line py-8 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-8">
                  <p className="font-mono text-xs uppercase tracking-wide text-paper-dim">{entry.period}</p>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-3">
                      <h3 className="text-xl text-paper sm:text-2xl">{entry.venue}</h3>
                      {entry.mostRecent && <span className="rounded-full border border-amber/35 px-3 py-1 text-xs text-amber">Most recent employment</span>}
                    </div>
                    <p className="mt-2 text-sm font-medium text-amber-soft">{entry.role}</p>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-paper-dim">{entry.description}</p>
                    {entry.progression && (
                      <ol className="mt-6 space-y-5 border-l border-amber/30 pl-5">
                        {entry.progression.map((step) => (
                          <li key={step.role}>
                            <p className="font-mono text-xs text-paper-dim">{step.period}</p>
                            <h4 className="mt-1 text-base font-medium text-paper">{step.role}</h4>
                            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-paper-dim">{step.body}</p>
                          </li>
                        ))}
                      </ol>
                    )}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
        <article className="mt-6 rounded-2xl border border-line bg-surface/50 p-6 sm:p-8">
          <p className="eyebrow">{careerBreak.period}</p>
          <h3 className="mt-3 text-xl text-paper">{careerBreak.title}</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-paper-dim">{careerBreak.body}</p>
        </article>
        <details className="details-panel mt-6">
          <summary>Pre-opening exposure · Bla Bla, Nara & Tasca</summary>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2">
            {preOpening.map((item) => {
              const Icon = item.icon;
              return <li key={item.title}><Icon aria-hidden="true" className="h-[22px] w-[22px] text-amber" /><h4 className="mt-3 font-medium text-paper">{item.title}</h4><p className="mt-2 text-sm text-paper-dim">{item.body}</p></li>;
            })}
          </ul>
        </details>
      </div>
    </section>
  );
}
