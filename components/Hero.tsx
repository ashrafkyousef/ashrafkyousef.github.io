import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { contact, profile, stats, venues } from "@/lib/content";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pt-44">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 h-[36rem] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(217,154,78,0.16),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-40 h-[28rem] w-[28rem] rounded-full bg-violet/10 blur-[120px]"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div>
            <Reveal>
              <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-amber">
                <span aria-hidden="true" className="h-px w-8 bg-amber/50" />
                {profile.kicker}
                <span aria-hidden="true" className="text-paper-faint">
                  •
                </span>
                <span className="text-paper-dim">{profile.location}</span>
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-[2.6rem] leading-[1.05] text-paper xs:text-5xl sm:text-6xl lg:text-[4.25rem]">
                {profile.name}
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-5 text-lg text-paper-dim sm:text-xl">
                <span className="text-paper">{profile.role}</span>
                <span aria-hidden="true" className="mx-2.5 text-paper-faint">
                  |
                </span>
                {profile.discipline}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-7 max-w-xl font-display text-xl leading-snug text-amber-soft sm:text-2xl">
                {profile.hook}
              </p>
              <p className="mt-5 max-w-xl text-[0.975rem] leading-relaxed text-paper-dim sm:text-base">
                {profile.summary}
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 hover:bg-amber-soft"
                >
                  Get in touch
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={contact.cv}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-amber/45 hover:bg-surface"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <dl className="mt-12 grid max-w-xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line-soft bg-line-soft xs:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-ink-2 px-5 py-5">
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block font-display text-2xl text-amber sm:text-[1.75rem]">
                        {stat.value}
                      </span>
                      <span className="mt-1 block text-[0.8rem] leading-snug text-paper-dim">
                        {stat.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={200} className="order-first lg:order-none">
            <div className="relative mx-auto max-w-[15rem] xs:max-w-[17rem] sm:max-w-xs lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-amber/25 via-violet/10 to-transparent blur-xl"
              />
              {/* Cropped to a compact portrait on phones so the name stays above
                  the fold; falls back to the image's own ratio from lg up. */}
              <div className="relative aspect-4/5 overflow-hidden rounded-[1.75rem] border border-line bg-surface lg:aspect-auto">
                <Image
                  src={profile.portrait}
                  alt={`${profile.name}, ${profile.role}`}
                  width={659}
                  height={1014}
                  priority
                  sizes="(min-width: 1024px) 30rem, (min-width: 640px) 20rem, 17rem"
                  className="h-full w-full object-cover object-[50%_18%] lg:object-center"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Venue marquee */}
        <div className="mt-20 border-y border-line-soft py-7">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
            <p className="shrink-0 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-paper-faint">
              Venues I&rsquo;ve worked with
            </p>
            <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
              <ul className="flex w-max animate-marquee items-center gap-12 pr-12 sm:gap-16 sm:pr-16">
                {[...venues, ...venues].map((venue, i) => (
                  <li key={`${venue.name}-${i}`} className="shrink-0">
                    <Image
                      src={venue.logo}
                      alt={i < venues.length ? venue.name : ""}
                      aria-hidden={i >= venues.length}
                      width={venue.width}
                      height={venue.height}
                      sizes="160px"
                      className="h-9 w-auto max-w-[7.5rem] object-contain opacity-55 grayscale sm:h-11 sm:max-w-[9rem]"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-paper-faint transition-colors hover:text-amber"
          >
            <ArrowDown className="h-3.5 w-3.5" />
            Scroll
          </a>
        </div>
      </div>
    </section>
  );
}
