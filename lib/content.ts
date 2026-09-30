import {
  Boxes, ClipboardList, GlassWater, Mail, MapPin, MessageCircle,
  Phone, Sparkles, Users, Wrench,
} from "lucide-react";
import { LinkedInIcon, type IconType } from "@/components/icons";

// Career facts and scope are aligned to the uploaded final CV, reviewed 1 October 2026.
export const profile = {
  name: "Ashraf K Yousef",
  role: "Assistant Bar Manager",
  discipline: "Beverage Operations | Bar Leadership",
  location: "Dubai, UAE",
  hook: "Hands-on service. Clear standards. Strong teams.",
  summary: "Assistant Bar Manager with 11 years of UAE hospitality experience across high-volume lifestyle venues, luxury hotels, and premium dining operations. Experienced in bar operations, team leadership, beverage cost control, inventory management, staff training, and guest recovery.",
  availability: "Immediately available · Dubai, UAE",
  portrait: "/assets/portrait.jpg",
};

export const stats = [
  { value: "11", label: "Years of UAE hospitality experience" },
  { value: "~21%", label: "Beverage cost maintained" },
  { value: "~20–25", label: "Bar team members coordinated during peak shifts" },
];

export const navLinks = [
  { href: "#results", label: "Bar operations" },
  { href: "#experience", label: "Experience" },
  { href: "#tools", label: "Systems" },
  { href: "#skills", label: "Qualifications" },
  { href: "#about", label: "About" },
];

export const venues = [
  { name: "Bla Bla By McGettigan's", logo: "/assets/logo-blabla.png", width: 220, height: 195 },
  { name: "Mandarin Oriental Jumeira Dubai", logo: "/assets/logo-mandarin.png", width: 220, height: 194 },
  { name: "Radisson Blu Hotel Dubai Media City", logo: "/assets/logo-radisson.png", width: 220, height: 68 },
  { name: "Nara Desert Escape", logo: "/assets/logo-nara.png", width: 220, height: 216 },
];

export const about = {
  heading: "Bar craft, built into everyday leadership.",
  paragraphs: [
    "My experience spans hotel bars, luxury desert dining, pre-opening teams, and high-volume lifestyle venues in Dubai. At Bla Bla By McGettigan's, I progressed from Bartender to Floor Supervisor to Assistant Bar Manager.",
    "I focus on the details that keep service running: clear briefings, well-prepared stations, consistent recipes, accurate stock records, and practical team coaching. I work closely with floor, reception, and kitchen teams to resolve problems and support the guest experience.",
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
        body: "Prepared and served beverages to standard recipes and portion controls. Maintained mise-en-place, stock replenishment, and equipment readiness; supported stock counts and opening and closing routines.",
      },
      {
        period: "Oct 2021 – Nov 2022", role: "Floor Supervisor",
        body: "Supervised floor operations across two outlets, including staff deployment, section allocation, service flow, guest recovery, and team breaks. Led briefings and supported shift handovers and staff coaching; took additional floor responsibility when the Floor Manager was unavailable.",
      },
      {
        period: "Nov 2022 – Dec 2025", role: "Assistant Bar Manager",
        body: "Supported daily bar operations, coordinating approximately 20–25 bar team members during peak shifts. Maintained beverage cost at around 21%; led training and briefings, managed stock controls, planned weekly rosters, supported costing and pricing recommendations, and handled guest recovery.",
      },
    ],
  },
  {
    period: "Dec 2019 – Mar 2020",
    venue: "Nara Desert Escape, Dubai, UAE",
    role: "Head Bartender · Pre-Opening",
    description: "Supported pre-opening bar setup, equipment readiness, stock preparation, recipe standards, and service procedures. Led day-to-day bar operations for luxury desert dining and private events; managed stock levels, internal requisitions, par levels, rotation, and wastage control.",
  },
  {
    period: "Jan 2019 – Nov 2019",
    venue: "Tasca by José Avillez, Mandarin Oriental Jumeira, Dubai, UAE",
    role: "Bartender · Pre-Opening",
    description: "Supported bar setup, station organisation, equipment readiness, stock preparation, and service standards. Prepared beverages to recipe specifications and luxury service expectations; supported inventory counts, stock rotation, and opening and closing procedures.",
  },
  {
    period: "Feb 2015 – Nov 2018",
    venue: "Radisson Blu Hotel Dubai Media City, Dubai, UAE",
    role: "Bartender",
    description: "Prepared and served beverages across Icon Bar and Tamanya Goes Thai. Maintained mise-en-place, cleanliness, stock replenishment, and equipment readiness; supported inventory counts, stock rotation, opening and closing procedures, and daily beverage-control routines.",
  },
];

export const careerBreak = {
  period: "Jan 2026 – Present",
  title: "Career break and professional development",
  body: "Continuing a Bachelor of Tourism and Travel Management and professional development in operational reporting and digital tools. Returned to Dubai in August 2026 and currently available for suitable beverage and bar operations opportunities.",
};

export const operations = {
  title: "Beverage cost maintained at around 21%.",
  intro: "At Bla Bla By McGettigan's, I maintained beverage cost through inventory control, variance follow-up, recipe compliance, wastage monitoring, and accurate internal requisitions.",
  areas: [
    { title: "Inventory & variance follow-up", body: "Managed stock counts, transfers, internal requisitions, high-value spirit checks, breakage, and wastage; followed up on unusual inventory variances." },
    { title: "Team coordination & training", body: "Coordinated approximately 20–25 bar team members during peak shifts. Led onboarding, coaching, pre-shift briefings, and performance feedback." },
    { title: "Rostering & service flow", body: "Planned weekly rosters and adjusted staff deployment around business levels, events, leave, and peak periods. Handled guest recovery with floor, reception, and kitchen teams." },
    { title: "Costing & menu support", body: "Supported beverage costing, pricing recommendations, recipe development, menu updates, promotions, premium product focus, and upselling initiatives." },
  ],
};

export const preOpening: { icon: IconType; title: string; body: string }[] = [
  { icon: Wrench, title: "Equipment & station readiness", body: "Supported equipment readiness and station organisation for pre-opening bar service." },
  { icon: Boxes, title: "Stock preparation", body: "Supported stock preparation and bar setup to maintain operational readiness." },
  { icon: GlassWater, title: "Recipe & service standards", body: "Supported recipe standards, service procedures, and consistent beverage preparation." },
  { icon: ClipboardList, title: "Opening & closing routines", body: "Supported daily opening and closing procedures, stock rotation, and inventory counts." },
];

export const pillars: { icon: IconType; title: string; body: string }[] = [
  { icon: Users, title: "Bar operations & shift leadership", body: "Staff deployment, briefings, coaching, and peak-period execution." },
  { icon: Boxes, title: "Inventory & stock reconciliation", body: "Stock counts, transfers, internal requisitions, and variance follow-up." },
  { icon: GlassWater, title: "Menu engineering & recipe costing", body: "Support for costing, pricing recommendations, recipe development, and menu updates." },
  { icon: ClipboardList, title: "SOPs & operational standards", body: "Recipe compliance, opening and closing controls, and service readiness." },
  { icon: Wrench, title: "Pre-opening operations", body: "Bar setup, station organisation, equipment readiness, and stock preparation." },
  { icon: Sparkles, title: "Guest experience & recovery", body: "Service recovery, premium product recommendations, and upselling." },
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
