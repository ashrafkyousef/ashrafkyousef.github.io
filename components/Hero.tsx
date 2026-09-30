import Img from "./Img";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { contact, profile, roles, stats, venues } from "@/lib/content";
import { withBasePath } from "@/lib/basePath";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-10 pt-28 lg:pt-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_20%,rgba(217,154,78,0.10),transparent_60%)]" />
      <div className="container-page relative">
        <div className="grid items-center gap-x-16 gap-y-9 lg:grid-cols-[1.3fr_0.85fr]">
          <div className="order-1">
            <p className="eyebrow flex items-center gap-2"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-amber" />{profile.availability}</p>
            <h1 className="mt-5 text-[clamp(2.6rem,6vw,4.8rem)] leading-[1.06] text-paper">{profile.name}</h1>
            <p className="mt-4 text-sm leading-relaxed text-paper-dim">{profile.role} <span aria-hidden="true" className="mx-1 text-amber">|</span> {profile.discipline}</p>
            <p className="mt-6 max-w-xl font-display text-2xl leading-tight text-amber-soft sm:text-3xl">{profile.hook}</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-paper-dim">{profile.summary}</p>
            <div className="mt-6">
              <p className="text-xs text-paper-faint">Open to</p>
              <ul className="mt-2 flex flex-wrap gap-2">{roles.map((role) => <li key={role} className="rounded-full border border-amber/20 bg-amber/5 px-3 py-1.5 text-xs text-amber-soft">{role}</li>)}</ul>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={withBasePath(contact.cv)} download className="button-primary"><Download aria-hidden="true" size={17} />Download CV</a>
              <a href="#contact" className="button-secondary">Get in touch<ArrowUpRight aria-hidden="true" size={17} /></a>
            </div>
            <a href="#experience" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-paper-dim hover:text-amber">View experience<ArrowDown aria-hidden="true" size={15} /></a>
          </div>
          <figure className="hero-portrait relative order-3 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none">
            <div className="relative aspect-[4/4.5] overflow-hidden rounded-t-[7rem] rounded-b-2xl border border-amber/25 bg-surface">
              <Img src={profile.portrait} alt="Ashraf K Yousef" width={659} height={1014} preload sizes="(min-width: 1024px) 400px, 380px" className="h-full w-full object-cover object-[50%_20%]" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <p className="absolute inset-x-6 bottom-6 font-display text-xl text-paper">Craft on the floor.<br /><span className="text-amber-soft">Discipline behind the scenes.</span></p>
            </div>
          </figure>
          <dl className="order-2 grid grid-cols-3 divide-x divide-line border-y border-line py-6 lg:order-3 lg:col-span-2 lg:py-7">
            {stats.map((stat) => <div key={stat.label} className="flex flex-col gap-3 px-2.5 first:pl-0 last:pr-0 sm:px-7"><dt className="order-2 max-w-60 text-xs leading-relaxed text-paper-dim sm:text-sm">{stat.label}</dt><dd className="font-display whitespace-nowrap text-[clamp(1.3rem,6vw,2.75rem)] leading-none text-amber-soft">{stat.value}</dd></div>)}
          </dl>
        </div>
        <div className="pt-7">
          <p className="text-center text-xs uppercase tracking-[0.15em] text-paper-dim">Experience across Dubai’s hospitality destinations</p>
          <ul className="mt-5 grid grid-cols-2 items-center gap-5 sm:grid-cols-4">{venues.map((venue) => <li key={venue.name} className="flex min-h-14 items-center justify-center"><Img src={venue.logo} alt={venue.name} width={venue.width} height={venue.height} sizes="140px" className="h-11 w-auto max-w-32 object-contain opacity-80 grayscale" /></li>)}</ul>
        </div>
      </div>
    </section>
  );
}
