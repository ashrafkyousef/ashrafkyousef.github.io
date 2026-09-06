import Image from "next/image";
import { Award, Check, ChevronRight, Code2 } from "lucide-react";
import {
  aiNote,
  aiUseCases,
  aiWorkflow,
  certification,
  competencies,
  digitalTools,
  pillars,
} from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-line-soft py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills & competencies"
          title="The 6-pillar beverage management system"
          lede="A structured operational architecture balancing high-volume velocity, strict cost discipline, and luxury guest service."
        />

        {/* Six pillars */}
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <li key={pillar.title}>
                <Reveal delay={i * 60}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-line-soft bg-surface/50 p-6 transition-colors hover:border-amber/30 hover:bg-surface">
                    <div className="flex items-center justify-between">
                      <span className="grid h-10 w-10 place-items-center rounded-full border border-amber/25 bg-amber/10 text-amber">
                        <Icon aria-hidden="true" className="h-[1.15rem] w-[1.15rem]" />
                      </span>
                      <span className="font-display text-sm text-paper-faint">{pillar.number}</span>
                    </div>
                    <h3 className="mt-5 font-display text-xl text-paper">{pillar.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-paper-dim">{pillar.body}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>

        {/* Leadership + commercial competencies */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {competencies.map((group, gi) => {
            const Icon = group.icon;
            return (
              <div key={group.label}>
                <Reveal delay={gi * 90}>
                  <h3 className="flex items-center gap-2.5 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-paper-faint">
                    <Icon aria-hidden="true" className="h-4 w-4 text-amber/70" />
                    {group.label}
                  </h3>
                </Reveal>
                <dl className="mt-6 space-y-px">
                  {group.items.map((item, i) => (
                    <Reveal key={item.title} delay={i * 45}>
                      <div className="border-t border-line-soft py-4">
                        <dt className="flex items-start gap-2.5 text-[0.95rem] font-semibold text-paper">
                          <ChevronRight
                            aria-hidden="true"
                            className="mt-1 h-3.5 w-3.5 shrink-0 text-amber"
                          />
                          {item.title}
                        </dt>
                        <dd className="mt-1.5 pl-6 text-sm leading-relaxed text-paper-dim">
                          {item.body}
                        </dd>
                      </div>
                    </Reveal>
                  ))}
                </dl>
              </div>
            );
          })}
        </div>

        {/* Digital tools built */}
        <div className="mt-20">
          <Reveal>
            <h3 className="flex items-center gap-2.5 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-paper-faint">
              <Code2 aria-hidden="true" className="h-4 w-4 text-amber/70" />
              Proprietary digital tools
            </h3>
            <p className="mt-4 max-w-2xl font-display text-2xl leading-snug text-paper sm:text-[1.75rem]">
              Engineering the next layer of beverage operations
            </p>
          </Reveal>

          <ul className="mt-9 grid gap-5 lg:grid-cols-2">
            {digitalTools.map((tool, i) => (
              <li key={tool.title}>
                <Reveal delay={i * 90}>
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line-soft bg-surface/50">
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-line-soft bg-ink">
                      <Image
                        src={tool.image}
                        alt={`${tool.title} interface`}
                        fill
                        sizes="(min-width: 1024px) 36rem, 92vw"
                        className="object-cover object-top"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent"
                      />
                      <span className="absolute left-4 top-4 rounded-full border border-amber/30 bg-ink/80 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-amber backdrop-blur">
                        {tool.tag}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-[0.75rem] uppercase tracking-[0.14em] text-paper-faint">
                        {tool.category}
                      </p>
                      <h4 className="mt-2 font-display text-xl text-paper sm:text-2xl">
                        {tool.title}
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-paper-dim">{tool.body}</p>
                      <ul className="mt-5 space-y-2.5 border-t border-line-soft pt-5">
                        {tool.points.map((point) => (
                          <li key={point} className="flex items-start gap-2.5 text-sm text-paper-dim">
                            <Check aria-hidden="true" className="mt-1 h-3.5 w-3.5 shrink-0 text-amber" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        {/* Applied AI */}
        <div className="mt-20">
          <Reveal>
            <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-paper-faint">
              Applied AI & digital operations
            </h3>
            <p className="mt-4 max-w-2xl font-display text-2xl leading-snug text-paper sm:text-[1.75rem]">
              Data-driven intelligence in beverage leadership
            </p>
          </Reveal>

          <ol className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-line-soft bg-line-soft sm:grid-cols-2 lg:grid-cols-4">
            {aiWorkflow.map((step, i) => {
              const Icon = step.icon;
              return (
                <li key={step.title} className="bg-ink-2/80 p-6">
                  <Reveal delay={i * 70}>
                    <div className="flex items-center gap-3">
                      <Icon aria-hidden="true" className="h-[1.15rem] w-[1.15rem] text-amber" />
                      <span className="font-mono text-[0.75rem] text-paper-faint">{step.step}</span>
                    </div>
                    <h4 className="mt-4 font-display text-lg text-paper">{step.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-paper-dim">{step.body}</p>
                  </Reveal>
                </li>
              );
            })}
          </ol>

          <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
            <Reveal>
              <div className="h-full rounded-2xl border border-line-soft bg-surface/50 p-6 sm:p-7">
                <h4 className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-paper-faint">
                  Practical AI use cases
                </h4>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {aiUseCases.map((useCase) => (
                    <li
                      key={useCase}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-paper-dim"
                    >
                      <Check aria-hidden="true" className="mt-1 h-3.5 w-3.5 shrink-0 text-amber" />
                      {useCase}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-line-soft pt-5 text-sm italic leading-relaxed text-paper-faint">
                  {aiNote}
                </p>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <article className="flex h-full flex-col gap-5 rounded-2xl border border-line-soft bg-surface/50 p-6 sm:flex-row sm:p-7">
                <div className="relative aspect-[900/637] w-full shrink-0 overflow-hidden rounded-xl border border-line-soft sm:w-40">
                  <Image
                    src={certification.image}
                    alt={`${certification.title} certificate`}
                    fill
                    sizes="(min-width: 640px) 10rem, 92vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-amber">
                    <Award aria-hidden="true" className="h-3.5 w-3.5" />
                    {certification.label}
                  </p>
                  <h4 className="mt-3 font-display text-lg leading-snug text-paper">
                    {certification.title}
                  </h4>
                  <p className="mt-1.5 text-[0.8rem] text-paper-faint">{certification.issuer}</p>
                  <p className="mt-3 text-sm leading-relaxed text-paper-dim">{certification.body}</p>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
