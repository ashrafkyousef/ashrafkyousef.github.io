import { languages, qualifications } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Tools from "./Tools";

export default function Skills() {
  return (
    <section id="skills" className="section-space border-t border-line-soft bg-ink-2/60">
      <div className="container-page">
        <SectionHeading eyebrow="Systems & qualifications / 03" title="The foundations behind the work." />
        <div className="mt-9"><Tools /></div>
        <h3 className="mt-9 text-xl text-paper">Education & certifications</h3>
        <ul className="mt-4 grid gap-x-10 sm:grid-cols-2">{qualifications.map((item) => <li key={item.title} className="border-t border-line py-5"><p className="eyebrow">{item.status}</p><h4 className="mt-2 text-sm font-medium text-paper">{item.title}</h4><p className="mt-1.5 text-sm text-paper-dim">{item.issuer}</p></li>)}</ul>
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm"><h3 className="font-sans text-sm font-medium text-paper">Languages</h3><ul className="flex flex-wrap gap-x-6 gap-y-2 text-paper-dim">{languages.map((language) => <li key={language}>{language}</li>)}</ul></div>
      </div>
    </section>
  );
}
