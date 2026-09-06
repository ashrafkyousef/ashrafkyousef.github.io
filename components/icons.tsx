import type { ComponentType } from "react";

/**
 * Icon shape shared by lucide-react icons and the local brand glyphs below.
 * lucide-react v1 no longer ships brand marks, so LinkedIn is drawn here to
 * match lucide's 24px grid and 2px stroke weight.
 */
export type IconType = ComponentType<{ className?: string }>;

export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-10h4v1.5a4 4 0 0 1 2-1.5z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
