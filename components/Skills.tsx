import { languages, pillars, qualifications } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section-space border-t border-line-soft bg-ink-2/60">
      <div className="container-page">
        <SectionHeading eyebrow="Skills & qualifications / 04" title="The standards behind the service." />
        <ul className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return <li key={pillar.title} className="border-t border-line py-6"><Icon aria-hidden="true" className="h-[22px] w-[22px] text-amber" /><h3 className="mt-4 text-xl text-paper">{pillar.title}</h3><p className="mt-3 text-sm leading-relaxed text-paper-dim">{pillar.body}</p></li>;
          })}
        </ul>
        <h3 className="mt-10 text-2xl text-paper">Education & certifications</h3>
        <ul className="mt-6 grid gap-x-10 sm:grid-cols-2">
          {qualifications.map((item) => <li key={item.title} className="border-t border-line py-6"><p className="eyebrow">{item.status}</p><h4 className="mt-3 text-base font-medium text-paper">{item.title}</h4><p className="mt-2 text-sm text-paper-dim">{item.issuer}</p></li>)}
        </ul>
        <h3 className="mt-8 text-xl text-paper">Languages</h3>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-paper-dim">{languages.map((language) => <li key={language}>{language}</li>)}</ul>
      </div>
    </section>
  );
}
