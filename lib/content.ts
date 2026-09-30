import {
  Mail, MapPin, MessageCircle, Phone,
} from "lucide-react";
import { LinkedInIcon, type IconType } from "@/components/icons";

// Career facts and scope are aligned to the uploaded final CV, reviewed 1 October 2026.
export const profile = {
  name: "Ashraf K Yousef",
  role: "Assistant Bar Manager",
  discipline: "Beverage Operations | Bar Leadership",
  location: "Dubai, UAE",
  hook: "Hands-on service. Clear standards. Strong teams.",
  summary: "11 years of UAE hospitality experience across high-volume lifestyle venues, luxury hotels, and premium dining. Hands-on experience in team coordination, beverage cost control, and guest recovery.",
  availability: "Immediately available · Dubai, UAE",
  portrait: "/assets/portrait.jpg",
};

export const stats = [
  { value: "11", label: "Years of UAE hospitality experience" },
  { value: "~21%", label: "Beverage cost maintained" },
  { value: "~20–25", label: "Bar team members coordinated during peak shifts" },
];

export const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#work-sample", label: "Work sample" },
  { href: "#skills", label: "Qualifications" },
  { href: "#about", label: "Approach" },
];

export const venues = [
  { name: "Bla Bla By McGettigan's", logo: "/assets/logo-blabla.png", width: 220, height: 195 },
  { name: "Mandarin Oriental Jumeira Dubai", logo: "/assets/logo-mandarin.png", width: 220, height: 194 },
  { name: "Radisson Blu Hotel Dubai Media City", logo: "/assets/logo-radisson.png", width: 220, height: 68 },
  { name: "Nara Desert Escape", logo: "/assets/logo-nara.png", width: 220, height: 216 },
];

export const about = {
  heading: "Prepared teams. Consistent service.",
  paragraphs: [
    "A good shift starts with a prepared team and clear standards. My approach combines practical bar experience with coaching, stock discipline, and close coordination with floor, reception, and kitchen teams.",
  ],
  philosophy: "Own your station. Own your standards. Own your results.",
  image: "/assets/action-photo.jpg",
};

export type TimelineEntry = {
  period: string;
  venue: string;
  role: string;
  description: string;
  progression?: { period: string; role: string; body: string }[];
  mostRecent?: boolean;
};

export const timeline: TimelineEntry[] = [
  {
    period: "Jan 2021 – Dec 2025",
    venue: "Bla Bla By McGettigan's, Dubai, UAE",
    role: "Bartender → Floor Supervisor → Assistant Bar Manager",
    description: "Progressed from pre-opening beverage service to floor supervision and supporting daily high-volume bar operations.",
    mostRecent: true,
    progression: [
      {
        period: "Jan 2021 – Oct 2021", role: "Bartender · Pre-Opening",
        body: "Pre-opening beverage service, mise-en-place, stock replenishment, and opening and closing routines.",
      },
      {
        period: "Oct 2021 – Nov 2022", role: "Floor Supervisor",
        body: "Supervised floor operations across two outlets, coordinating staff deployment, service flow, briefings, and guest recovery.",
      },
      {
        period: "Nov 2022 – Dec 2025", role: "Assistant Bar Manager",
        body: "Supported daily high-volume bar operations, with responsibilities spanning team coordination, beverage cost control, training, and guest recovery.",
      },
    ],
  },
  {
    period: "Dec 2019 – Mar 2020",
    venue: "Nara Desert Escape, Dubai, UAE",
    role: "Head Bartender · Pre-Opening",
    description: "Supported pre-opening setup and led day-to-day bar operations for luxury desert dining and private events, including stock levels, requisitions, and wastage control.",
  },
  {
    period: "Jan 2019 – Nov 2019",
    venue: "Tasca by José Avillez, Mandarin Oriental Jumeira, Dubai, UAE",
    role: "Bartender · Pre-Opening",
    description: "Supported pre-opening bar setup and luxury beverage service, maintaining recipe standards, station readiness, stock rotation, and inventory counts.",
  },
  {
    period: "Feb 2015 – Nov 2018",
    venue: "Radisson Blu Hotel Dubai Media City, Dubai, UAE",
    role: "Bartender",
    description: "Served beverages across Icon Bar and Tamanya Goes Thai, maintaining bar readiness and supporting stock counts, rotation, and daily beverage-control routines.",
  },
];

export const careerBreak = {
  period: "Jan 2026 – Present",
  title: "Career break and professional development",
  body: "Continuing a Bachelor of Tourism and Travel Management and professional development in operational reporting and digital tools. Returned to Dubai in August 2026 and currently available for suitable beverage and bar operations opportunities.",
};

export const latestResponsibilities = [
  { title: "Cost & stock control", body: "Managed counts, transfers, requisitions, high-value spirit checks, wastage, and variance follow-up." },
  { title: "People & shift planning", body: "Led onboarding, coaching, and briefings; planned weekly rosters and adjusted staff deployment." },
  { title: "Menu & pricing support", body: "Supported recipe development, costing, pricing recommendations, menu updates, and upselling." },
  { title: "Guest recovery", body: "Resolved service issues in close coordination with floor, reception, and kitchen teams." },
];

export const systems = [
  { name: "Quadranet POS", scope: "Point of sale" },
  { name: "Odoo Inventory & Purchasing", scope: "Inventory & purchasing" },
  { name: "Micros/Simphony", scope: "Hospitality system" },
  { name: "SevenRooms", scope: "Hospitality system" },
  { name: "Microsoft Excel", scope: "Operational reporting" },
];

export const digitalOperations = "ChatGPT, Claude and AI-assisted workflows for stock analysis, costing, KPI tracking, SOP documentation and management reporting.";

export const qualifications = [
  { title: "Bachelor of Tourism & Travel Management (BTTM)", issuer: "Indira Gandhi National Open University (IGNOU), India", status: "In Progress" },
  { title: "Diploma in Food & Beverage Service", issuer: "Food Craft Institute, Perinthalmanna", status: "2010" },
  { title: "Certificate in Bartending", issuer: "Flair Mania Bartending Academy, Pune", status: "2013" },
  { title: 'AI Prompt Engineering, "1 Million Prompters"', issuer: "Dubai Future Foundation / Dubai Centre for Artificial Intelligence", status: "2026" },
];

export const languages = ["English — Professional", "Hindi — Professional", "Malayalam — Native"];
export const roles = ["Assistant Bar Manager", "Head Bartender", "Bar Supervisor"];

export const contact = {
  heading: "Let's talk bar operations.",
  body: "Immediately available in Dubai for Assistant Bar Manager, Head Bartender, and Bar Supervisor opportunities.",
  cv: "/assets/Ashraf_Yousef_CV.pdf",
};

export const contactLinks: { icon: IconType; label: string; value: string; href: string; external?: boolean }[] = [
  { icon: Mail, label: "Email", value: "ashrafkypallam@gmail.com", href: "mailto:ashrafkypallam@gmail.com" },
  { icon: Phone, label: "Phone", value: "+971 52 588 6326", href: "tel:+971525886326" },
  { icon: MessageCircle, label: "WhatsApp", value: "Message directly", href: "https://wa.me/971525886326", external: true },
  { icon: LinkedInIcon, label: "LinkedIn", value: "/in/ashrafkyousef123", href: "https://www.linkedin.com/in/ashrafkyousef123/", external: true },
  { icon: MapPin, label: "Based in", value: "Dubai, United Arab Emirates", href: "https://maps.google.com/?q=Dubai,United+Arab+Emirates", external: true },
];
