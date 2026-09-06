import Img from "./Img";
import { Quote } from "lucide-react";
import { about, roles } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="About me" title={about.heading} />

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16">
          <Reveal className="space-y-5">
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-[0.975rem] leading-relaxed text-paper-dim sm:text-base"
              >
                {paragraph}
              </p>
            ))}

            <figure className="!mt-9 rounded-2xl border border-line-soft bg-surface/60 p-6 sm:p-7">
              <Quote aria-hidden="true" className="h-6 w-6 text-amber/60" />
              <blockquote className="mt-3 font-display text-xl leading-snug text-paper sm:text-[1.4rem]">
                &ldquo;{about.philosophy}&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-[0.8rem] uppercase tracking-[0.16em] text-paper-faint">
                Operating philosophy
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-[1.5rem] border border-line bg-surface">
              <Img
                src={about.image}
                alt="Ashraf K Yousef working behind a high-volume bar in Dubai"
                width={1371}
                height={771}
                sizes="(min-width: 1024px) 34rem, 92vw"
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent"
              />
            </div>
          </Reveal>
        </div>

        {/* What I'm looking for next */}
        <div className="mt-20">
          <Reveal>
            <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-paper-faint">
              Open to
            </h3>
          </Reveal>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role, i) => (
              <li key={role.title}>
                <Reveal delay={i * 80}>
                  <div className="group h-full rounded-2xl border border-line-soft bg-surface/50 p-6 transition-colors hover:border-amber/30 hover:bg-surface">
                    <span className="font-display text-sm text-amber/70">{role.number}</span>
                    <h4 className="mt-2 font-display text-xl text-paper">{role.title}</h4>
                    <p className="mt-1 text-[0.8rem] uppercase tracking-[0.12em] text-paper-faint">
                      {role.scope}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-paper-dim">{role.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
