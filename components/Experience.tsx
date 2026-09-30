import { careerBreak, latestResponsibilities, timeline } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const [blaBla, ...earlierVenues] = timeline;
  const progression = blaBla.progression!;
  const latest = progression[progression.length - 1];
  return (
    <section id="experience" className="section-space border-t border-line-soft bg-ink-2/60">
      <div className="container-page">
        <SectionHeading eyebrow="Experience / 01" title="From bartender to bar leadership." />
        <article id="results" className="mt-9 overflow-hidden rounded-2xl border border-amber/25 bg-surface/60">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3"><p className="eyebrow">Most recent employment</p><p className="font-mono text-xs text-paper-dim">{latest.period}</p></div>
            <h3 className="mt-4 text-3xl text-paper">{latest.role}</h3>
            <p className="mt-2 text-base text-amber-soft">{blaBla.venue}</p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-paper-dim">{latest.body}</p>
            <ul className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2">{latestResponsibilities.map((item) => <li key={item.title}><h4 className="text-sm font-semibold text-paper">{item.title}</h4><p className="mt-1.5 text-sm leading-relaxed text-paper-dim">{item.body}</p></li>)}</ul>
          </div>
          <div className="border-t border-line bg-ink-2/70 p-6 sm:px-8">
            <p className="text-xs uppercase tracking-wider text-paper-faint">Progression at Bla Bla · {blaBla.period}</p>
            <p className="mt-2 text-sm text-amber-soft">{blaBla.role}</p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">{[...progression.slice(0,-1)].reverse().map((step) => <div key={step.role}><p className="font-mono text-xs text-paper-faint">{step.period}</p><h4 className="mt-1 text-sm font-medium text-paper">{step.role}</h4><p className="mt-2 text-sm text-paper-dim">{step.body}</p></div>)}</div>
          </div>
        </article>
        <ol className="mt-6 grid gap-5 lg:grid-cols-3">{earlierVenues.map((entry) => <li key={entry.venue} className="rounded-2xl border border-line p-6"><p className="font-mono text-xs text-paper-faint">{entry.period}</p><h3 className="mt-4 text-xl text-paper">{entry.role}</h3><p className="mt-3 text-sm font-medium text-amber-soft">{entry.venue}</p><p className="mt-3 text-sm leading-relaxed text-paper-dim">{entry.description}</p></li>)}</ol>
        <div className="mt-6 border-l-2 border-amber/40 py-1 pl-5"><p className="eyebrow">{careerBreak.period}</p><h3 className="mt-2 text-xl text-paper">{careerBreak.title}</h3><p className="mt-3 max-w-4xl text-sm leading-relaxed text-paper-dim">{careerBreak.body}</p></div>
      </div>
    </section>
  );
}
