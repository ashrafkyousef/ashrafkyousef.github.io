import { ArrowRight, Rocket, Trophy } from "lucide-react";
import { caseStudy, competitions, preOpening, timeline } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-line-soft bg-ink-2/60 py-20 sm:py-28"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience & core milestones"
          title="Eleven years across Dubai's luxury and high-volume floors"
          lede="Luxury dining destinations, world-class entertainment venues, and hotel pre-openings — with a consistent through-line of cost discipline and team development."
        />

        {/* Career timeline */}
        <ol className="mt-14 space-y-px">
          {timeline.map((entry, i) => (
            <li key={entry.venue}>
              <Reveal delay={i * 70}>
                <article className="group relative grid gap-4 border-t border-line-soft py-8 sm:grid-cols-[10.5rem_minmax(0,1fr)] sm:gap-8">
                  <div className="flex items-center gap-3 sm:block">
                    <span
                      aria-hidden="true"
                      className={`h-2 w-2 shrink-0 rounded-full sm:mb-3 ${
                        entry.current ? "bg-amber" : "bg-paper-faint/50"
                      }`}
                    />
                    <p className="font-mono text-[0.8rem] uppercase tracking-[0.08em] text-paper-faint">
                      {entry.period}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-display text-xl text-paper sm:text-2xl">{entry.venue}</h3>
                      {entry.current ? (
                        <span className="rounded-full border border-amber/35 bg-amber/10 px-2.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-amber">
                          Most recent
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1.5 text-sm font-medium text-amber-soft">{entry.role}</p>
                    <p className="mt-3 max-w-2xl text-[0.925rem] leading-relaxed text-paper-dim">
                      {entry.description}
                    </p>

                    {entry.progression ? (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {entry.progression.map((step) => (
                          <li
                            key={step}
                            className="rounded-full border border-line-soft bg-surface/70 px-3 py-1 text-[0.75rem] text-paper-dim"
                          >
                            {step}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        {/* Case study — the headline milestone */}
        <Reveal className="mt-16">
          <article className="overflow-hidden rounded-[1.5rem] border border-amber/20 bg-gradient-to-br from-surface to-ink-2">
            <div className="border-b border-line-soft p-7 sm:p-9">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-amber">
                {caseStudy.tag}
              </p>
              <h3 className="mt-4 text-2xl text-paper sm:text-3xl">{caseStudy.title}</h3>
              <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-paper-dim">
                {caseStudy.intro}
              </p>

              <dl className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-5 sm:gap-x-7">
                {caseStudy.metrics.map((metric, i) => (
                  <div key={metric.label} className="flex items-center gap-4 sm:gap-7">
                    {i > 0 ? (
                      <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-amber/50" />
                    ) : null}
                    <div>
                      <dt className="text-[0.75rem] uppercase tracking-[0.12em] text-paper-faint">
                        {metric.label}
                      </dt>
                      <dd
                        className={`mt-1 font-display text-2xl sm:text-[1.75rem] ${
                          i === 1 ? "text-amber" : "text-paper"
                        }`}
                      >
                        {metric.value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>

            <ol className="grid gap-px bg-line-soft sm:grid-cols-2 lg:grid-cols-4">
              {caseStudy.steps.map((step, i) => (
                <li key={step.title} className="bg-ink-2/80 p-6">
                  <span className="font-mono text-[0.75rem] text-amber/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mt-2 font-display text-lg text-paper">{step.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-paper-dim">{step.body}</p>
                </li>
              ))}
            </ol>
          </article>
        </Reveal>

        {/* Pre-opening + competitions */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-14">
          <div>
            <Reveal>
              <h3 className="flex items-center gap-2.5 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-paper-faint">
                <Rocket aria-hidden="true" className="h-4 w-4 text-amber/70" />
                Pre-opening expertise
              </h3>
              <p className="mt-4 font-display text-2xl text-paper">
                Building from ground zero to service launch
              </p>
            </Reveal>

            <ul className="mt-7 grid gap-4 sm:grid-cols-2">
              {preOpening.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={item.title}>
                    <Reveal delay={i * 70}>
                      <div className="h-full rounded-2xl border border-line-soft bg-surface/50 p-5 transition-colors hover:border-amber/25 hover:bg-surface">
                        <Icon aria-hidden="true" className="h-5 w-5 text-amber" />
                        <h4 className="mt-3.5 text-[0.95rem] font-semibold text-paper">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-paper-dim">{item.body}</p>
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <Reveal>
              <h3 className="flex items-center gap-2.5 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-paper-faint">
                <Trophy aria-hidden="true" className="h-4 w-4 text-amber/70" />
                Trade engagement
              </h3>
              <p className="mt-4 font-display text-2xl text-paper">
                Industry challenges & craft benchmarking
              </p>
            </Reveal>

            <ul className="mt-7 space-y-px">
              {competitions.map((item, i) => (
                <li key={item.title}>
                  <Reveal delay={i * 70}>
                    <div className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-3 border-t border-line-soft py-5">
                      <span className="font-mono text-[0.8rem] text-amber/80">{item.year}</span>
                      <div>
                        <h4 className="text-[0.95rem] font-semibold leading-snug text-paper">
                          {item.title}
                        </h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-paper-dim">{item.body}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
