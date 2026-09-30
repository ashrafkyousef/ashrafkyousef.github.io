import Img from "./Img";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { contact, profile, stats, venues } from "@/lib/content";
import { withBasePath } from "@/lib/basePath";

export default function Hero() {
  return (
    <section id="top" className="hero-section relative overflow-hidden pt-28 pb-10 sm:pt-36 lg:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_20%,rgba(217,154,78,0.10),transparent_60%)]" />
      <div className="container-page relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_0.85fr] lg:gap-20">
          <div>
            <p className="eyebrow">Beverage operations <span aria-hidden="true"> / </span> Dubai, UAE</p>
            <h1 className="mt-5 text-[clamp(2.6rem,6vw,5rem)] leading-[1.06] text-paper">{profile.name}</h1>
            <p className="mt-4 text-sm text-paper-dim sm:text-base">{profile.role} <span aria-hidden="true" className="mx-2 text-amber">|</span> {profile.discipline}</p>
            <p className="mt-6 max-w-xl font-display text-2xl leading-tight text-amber-soft sm:text-3xl">{profile.hook}</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-paper-dim">{profile.summary}</p>
            <p className="mt-5 text-sm font-medium text-amber-soft">{profile.availability}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={withBasePath(contact.cv)} download className="button-primary"><Download aria-hidden="true" size={17} />Download CV</a>
              <a href="#contact" className="button-secondary">Let’s talk<ArrowUpRight aria-hidden="true" size={17} /></a>
            </div>
            <a href="#results" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-paper-dim hover:text-amber">Explore my work<ArrowDown aria-hidden="true" size={15} /></a>
          </div>
          <figure className="hero-portrait relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative aspect-[4/4.5] overflow-hidden rounded-t-[7rem] rounded-b-2xl border border-amber/25 bg-surface">
              <Img src={profile.portrait} alt="Ashraf K Yousef" width={659} height={1014} preload sizes="(min-width: 1024px) 400px, 380px" className="h-full w-full object-cover object-[50%_20%]" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <p className="absolute inset-x-6 bottom-6 font-display text-xl text-paper">Craft on the floor.<br /><span className="text-amber-soft">Discipline behind the scenes.</span></p>
            </div>
            <figcaption className="mt-4 flex justify-between gap-3 text-xs text-paper-dim"><span>Luxury hospitality & high-volume venues</span><span className="shrink-0 text-amber">Dubai, UAE</span></figcaption>
          </figure>
        </div>
        <dl className="mt-10 grid grid-cols-3 divide-x divide-line border-y border-line py-6 sm:mt-14 sm:py-8">
          {stats.map((stat) => <div key={stat.label} className="px-3 first:pl-0 sm:px-8"><dt className="text-xs leading-relaxed text-paper-dim sm:text-sm">{stat.label}</dt><dd className="mt-2 font-display text-[clamp(1.65rem,4vw,2.75rem)] leading-none text-amber-soft">{stat.value}</dd></div>)}
        </dl>
        <div className="pt-8">
          <p className="text-center text-xs uppercase tracking-[0.15em] text-paper-dim">Experience across Dubai’s hospitality destinations</p>
          <ul className="mt-6 grid grid-cols-2 items-center gap-6 sm:grid-cols-4">
            {venues.map((venue) => <li key={venue.name} className="flex min-h-16 items-center justify-center"><Img src={venue.logo} alt={venue.name} width={venue.width} height={venue.height} sizes="140px" className="h-12 w-auto max-w-32 object-contain opacity-80 grayscale" /></li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
