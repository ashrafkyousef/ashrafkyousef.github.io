import { ArrowUpRight, Download } from "lucide-react";
import { contact, contactLinks, profile } from "@/lib/content";
import { withBasePath } from "@/lib/basePath";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-line-soft bg-ink-2/60 py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-96 bg-[radial-gradient(55%_70%_at_50%_100%,rgba(217,154,78,0.14),transparent_70%)]"
      />

      <div className="container-page relative">
        <SectionHeading
          eyebrow="Contact"
          title={contact.heading}
          lede={contact.body}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-16">
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-line-soft bg-line-soft">
            {contactLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <li key={link.label} className="bg-ink-2">
                  <Reveal delay={i * 55}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-surface sm:px-6 sm:py-5"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line bg-surface/70 text-amber transition-colors group-hover:border-amber/40">
                        <Icon className="h-[1.05rem] w-[1.05rem]" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[0.7rem] uppercase tracking-[0.16em] text-paper-faint">
                          {link.label}
                        </span>
                        <span className="mt-0.5 block truncate text-[0.95rem] text-paper transition-colors group-hover:text-amber">
                          {link.value}
                        </span>
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-paper-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber"
                      />
                    </a>
                  </Reveal>
                </li>
              );
            })}
          </ul>

          <Reveal delay={140}>
            <div className="flex h-full flex-col justify-between gap-8 rounded-2xl border border-amber/20 bg-gradient-to-br from-surface to-ink-2 p-7 sm:p-8">
              <div>
                <p className="font-display text-2xl leading-snug text-paper sm:text-[1.6rem]">
                  Ready for strategic operational leadership.
                </p>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-paper-dim">
                  Bringing 11+ years of UAE high-volume mastery, disciplined cost governance, and
                  scalable digital systems to forward-thinking hospitality groups.
                </p>
              </div>

              <div className="flex flex-col gap-3 xs:flex-row">
                <a
                  href="mailto:ashrafkypallam@gmail.com"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-amber-soft"
                >
                  Email me
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={withBasePath(contact.cv)}
                  download
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-amber/45 hover:bg-surface"
                >
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <footer className="container-page relative mt-20 border-t border-line-soft pt-8">
        <div className="flex flex-col items-start justify-between gap-4 text-[0.8rem] text-paper-faint sm:flex-row sm:items-center">
          <p>
            {profile.name} — {profile.role}, {profile.location}
          </p>
        </div>
      </footer>
    </section>
  );
}
