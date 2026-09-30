import { ArrowUpRight, Download, Mail, MessageCircle } from "lucide-react";
import { contact, profile } from "@/lib/content";
import { withBasePath } from "@/lib/basePath";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="section-space border-t border-amber/20 bg-[radial-gradient(ellipse_at_50%_100%,rgba(217,154,78,0.10),transparent_70%)]">
      <div className="container-page">
        <SectionHeading eyebrow="Contact" title="Let’s talk about your bar team." lede={contact.body} />
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="mailto:ashrafkypallam@gmail.com" className="button-primary"><Mail aria-hidden="true" size={17} />Email Ashraf</a>
          <a href="https://wa.me/971525886326" target="_blank" rel="noopener noreferrer" className="button-secondary"><MessageCircle aria-hidden="true" size={17} />WhatsApp<span className="sr-only"> (opens in a new tab)</span></a>
          <a href={withBasePath(contact.cv)} download className="button-secondary"><Download aria-hidden="true" size={17} />Download CV</a>
        </div>
        <div className="mt-6 flex flex-wrap gap-x-7 gap-y-2 text-sm text-paper-dim">
          <a href="tel:+971525886326" className="inline-flex min-h-11 items-center hover:text-amber">+971 52 588 6326</a>
          <a href="mailto:ashrafkypallam@gmail.com" className="inline-flex min-h-11 items-center break-all hover:text-amber">ashrafkypallam@gmail.com</a>
          <a href="https://www.linkedin.com/in/ashrafkyousef123/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 hover:text-amber">LinkedIn<ArrowUpRight aria-hidden="true" size={15} /><span className="sr-only"> (opens in a new tab)</span></a>
        </div>
        <footer className="mt-10 border-t border-line pt-6 text-xs text-paper-faint">{profile.name} · {profile.role} · {profile.location}</footer>
      </div>
    </section>
  );
}
