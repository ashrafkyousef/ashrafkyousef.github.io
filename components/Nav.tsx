"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/content";

export default function Nav() {
  const menuButton = useRef<HTMLButtonElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently occupying the upper half of the viewport.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // A disclosure menu keeps the page keyboard-accessible without a modal trap.
  useEffect(() => {
    if (!open) return;
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const media = window.matchMedia("(min-width: 768px)");
    const onResize = () => { if (media.matches) setOpen(false); };
    window.addEventListener("keydown", dismiss);
    media.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", dismiss);
      media.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line-soft bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-page flex h-[4.5rem] items-center justify-between gap-3"
      >
        <a
          href="#top"
          aria-label={`${profile.name} — back to top`}
          onClick={() => setOpen(false)}
          className="group flex items-center gap-2.5 text-sm font-medium tracking-tight text-paper"
        >
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-full border border-amber/40 bg-amber/10 font-display text-[0.8rem] text-amber transition-colors group-hover:bg-amber/20"
          >
            AY
          </span>
          <span className="text-xs sm:text-sm">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? "location" : undefined}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  active === link.href
                    ? "text-amber"
                    : "text-paper-dim hover:text-paper"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full border border-amber/45 bg-amber/10 px-5 py-2 text-sm font-medium text-amber transition-colors hover:bg-amber/20 sm:inline-block"
          >
            Get in touch
          </a>
          <button
            ref={menuButton}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-paper transition-colors hover:bg-surface md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-line-soft bg-ink/95 backdrop-blur-xl md:hidden">
          <ul className="container-page flex flex-col py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line-soft py-3.5 text-base text-paper-dim transition-colors hover:text-amber"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 block rounded-full bg-amber px-5 py-3 text-center text-sm font-semibold text-ink"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
