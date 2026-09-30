import Img from "./Img";
import { Quote } from "lucide-react";
import { about } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-space border-t border-line-soft">
      <div className="container-page">
        <SectionHeading eyebrow="Working approach / 04" title={about.heading} />

        <div className="mt-9 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16">
          <Reveal className="space-y-5">
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-[0.975rem] leading-relaxed text-paper-dim sm:text-base"
              >
                {paragraph}
              </p>
            ))}

            <figure className="!mt-6 rounded-2xl border border-line-soft bg-surface/60 p-6 sm:p-7">
              <Quote aria-hidden="true" className="h-6 w-6 text-amber/60" />
              <blockquote className="mt-3 font-display text-xl leading-snug text-paper sm:text-[1.4rem]">
                &ldquo;{about.philosophy}&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-[0.8rem] uppercase tracking-[0.16em] text-paper-faint">
                Operating philosophy
              </figcaption>
            </figure>
          </Reveal>

          {/* Body text carries ~9px above its cap height (5px half-leading +
              4.2px ascent gap), so a box-aligned image reads as sitting high.
              Inset the top to match the first line optically; the bottom keeps
              aligning to the quote card's real border edge. */}
          <Reveal delay={120} className="lg:pt-[9px]">
            <div className="relative h-full min-h-64 overflow-hidden rounded-[1.5rem] border border-line bg-surface">
              <Img
                src={about.image}
                alt="Ashraf K Yousef working behind a high-volume bar in Dubai"
                width={1371}
                height={771}
                sizes="(min-width: 1024px) 34rem, 92vw"
                className="h-full w-full object-cover object-[50%_40%]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent"
              />
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
