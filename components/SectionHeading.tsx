import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  className = "",
}: SectionHeadingProps) {
  return (
    <Reveal className={`max-w-2xl ${className}`}>
      <p className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-amber">
        <span aria-hidden="true" className="h-px w-8 bg-amber/50" />
        {eyebrow}
      </p>
      <h2 className="mt-5 text-3xl text-paper sm:text-4xl lg:text-[2.75rem]">{title}</h2>
      {lede ? (
        <p className="mt-5 text-[0.975rem] leading-relaxed text-paper-dim sm:text-base">{lede}</p>
      ) : null}
    </Reveal>
  );
}
