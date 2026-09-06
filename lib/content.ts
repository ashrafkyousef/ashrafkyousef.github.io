import {
  BarChart3,
  Boxes,
  BrainCircuit,
  Building2,
  ClipboardList,
  Cpu,
  GlassWater,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";
import { LinkedInIcon, type IconType } from "@/components/icons";

export const profile = {
  name: "Ashraf K Yousef",
  role: "Assistant Bar Manager",
  discipline: "Beverage Operations Specialist",
  location: "Dubai, UAE",
  kicker: "Beverage Operations & Bar Leadership",
  hook: "A decade of beverage craftsmanship, evolved into scalable operational leadership.",
  summary:
    "Directing multi-outlet, high-volume beverage operations across Dubai's luxury and entertainment sectors. Focused on profitability, data-backed inventory control, team development, and elevated guest experiences.",
  portrait: "/assets/portrait.jpg",
};

export const stats: { value: string; label: string }[] = [
  { value: "11+", label: "Years UAE Hospitality" },
  { value: "44", label: "Team Members Led" },
  { value: "18–24%", label: "Beverage COGS Maintained" },
];

export const navLinks: { href: string; label: string }[] = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const venues: { name: string; logo: string; width: number; height: number }[] = [
  { name: "Bla Bla Dubai by McGettigan's", logo: "/assets/logo-blabla.png", width: 220, height: 195 },
  { name: "Mandarin Oriental Jumeira Dubai", logo: "/assets/logo-mandarin.png", width: 220, height: 194 },
  { name: "Radisson Blu Hotel Dubai Media City", logo: "/assets/logo-radisson.png", width: 220, height: 68 },
  { name: "Nara Desert Escape", logo: "/assets/logo-nara.png", width: 220, height: 216 },
];

export const about = {
  heading: "From craftsmanship to operational leadership",
  paragraphs: [
    "Over a decade scaling beverage operations across Dubai's luxury dining destinations, world-class entertainment venues, and hotel pre-openings — from the bar rail to full commercial ownership of a multi-outlet programme.",
    "My work sits where floor execution meets fiscal rigour: recipe engineering and batching standards on one side, COGS governance and variance auditing on the other. I lead teams of up to 44 and build the systems — SOPs, digital tools, AI-assisted analysis — that keep standards consistent when volume peaks.",
    "I also build practical software for the trade: an interactive recipe knowledge base and a cocktail costing engine, both designed to eliminate recipe drift and automate margin engineering.",
  ],
  philosophy: "Own your station. Own your standards. Own your results.",
  image: "/assets/action-photo.jpg",
};

export type TimelineEntry = {
  period: string;
  venue: string;
  role: string;
  description: string;
  progression?: string[];
  current?: boolean;
};

export const timeline: TimelineEntry[] = [
  {
    period: "Jun 2021 – Dec 2025",
    venue: "Bla Bla Dubai by McGettigan's",
    role: "Assistant Bar Manager",
    description:
      "Rapid progression to Assistant Bar Manager — leading 44 staff and managing 18–24% COGS across high-volume bars.",
    progression: ["2021 — Bartender", "2021–2023 — Floor Supervisor", "2023–2025 — Assistant Bar Manager"],
    current: true,
  },
  {
    period: "Dec 2019 – Mar 2021",
    venue: "Nara Desert Escape",
    role: "Head Bartender · Pre-Opening",
    description:
      "Directed bar operations and logistics for high-end bespoke desert dining; oversaw cocktail prep standards, staff onboarding, and variance control.",
  },
  {
    period: "Jan 2019 – Nov 2019",
    venue: "Tasca by José Avillez, Mandarin Oriental Jumeira",
    role: "Pre-Opening Team / Bartender",
    description:
      "Executed luxury pre-opening beverage setups, cocktail standards, and service sequences for a flagship fine-dining concept.",
  },
  {
    period: "Feb 2015 – Nov 2018",
    venue: "Radisson Blu Hotel, Dubai Media City",
    role: "Bartender",
    description:
      "Delivered foundational high-volume beverage service, POS order-flow discipline, mise-en-place standards, and bar inventory rotation within a premier corporate hotel environment.",
  },
];

export const caseStudy = {
  tag: "Core Milestone — Operational Turnaround",
  title: "Cost optimisation & inventory recovery",
  intro:
    "Re-engineering stock control systems to achieve rapid, sustained margin recovery in high volume.",
  metrics: [
    { value: "28–30%", label: "Initial beverage cost" },
    { value: "18–24%", label: "Stabilised target COGS" },
    { value: "90 days", label: "Timeframe to impact" },
  ],
  steps: [
    {
      title: "The Challenge",
      body: "Beverage cost running significantly over target at 28–30% due to peak-volume shrinkage, unrecorded transfers, and delayed reconciliations.",
    },
    {
      title: "The Diagnosis",
      body: "Conducted deep audits revealing discrepancies between POS register depletions and physical cellar stock across service stations.",
    },
    {
      title: "The Intervention",
      body: "Implemented digital counting workflows, strict par replenishment protocols, and daily blind audits on high-value SKUs.",
    },
    {
      title: "The Result",
      body: "Stabilised beverage COGS within the 18–24% benchmark in three months, sustainably protecting bottom-line profitability.",
    },
  ],
};

export const preOpening: { icon: IconType; title: string; body: string }[] = [
  {
    icon: ClipboardList,
    title: "Menu engineering & costing",
    body: "Concept alignment, recipe standardisation, batching protocols, and gross margin optimisation.",
  },
  {
    icon: Wrench,
    title: "Station ergonomics & commissioning",
    body: "Layout planning for speed and workflow, bar equipment stress-testing, and initial par management.",
  },
  {
    icon: Users,
    title: "Service onboarding & culture",
    body: "Cocktail masterclasses, luxury service sequences, and hospitality standard implementation.",
  },
  {
    icon: Boxes,
    title: "Operational SOP architecture",
    body: "Comprehensive opening/closing SOPs, prep schedules, and variance audit controls drafted pre-launch.",
  },
];

export const competitions: { year: string; title: string; body: string }[] = [
  {
    year: "2019",
    title: "Monkey Shoulder Ultimate Bartender Championship, Dubai",
    body: "Benchmarked speed, balance, and creativity against Dubai's competitive bar circuit.",
  },
  {
    year: "2017",
    title: "Max Flair Bartender Challenge, Dubai",
    body: "Sharpened showmanship, precision pour control, and execution under time pressure.",
  },
  {
    year: "2016",
    title: "Moscow Mule Competition, Dubai",
    body: "Refined classic-cocktail consistency and presentation under judged conditions.",
  },
];

export const pillars: { icon: IconType; number: string; title: string; body: string }[] = [
  {
    icon: Users,
    number: "01",
    title: "People & Culture",
    body: "Team leadership, continuous capability building, role accountability, and service standards.",
  },
  {
    icon: GlassWater,
    number: "02",
    title: "Product & Craft",
    body: "Recipe engineering, high-volume batching standards, consistency protocols, and sensory excellence.",
  },
  {
    icon: Boxes,
    number: "03",
    title: "Process & Systems",
    body: "Dynamic SOPs, station ergonomics, speed-of-service flow, and operational discipline.",
  },
  {
    icon: Building2,
    number: "04",
    title: "Stock & Supply Chain",
    body: "Digital inventory audits, strict par levels, supplier relations, and zero-waste variance control.",
  },
  {
    icon: TrendingUp,
    number: "05",
    title: "Profit & Performance",
    body: "Beverage COGS management (18–24%), yield maximisation, dynamic pricing, and KPI benchmarking.",
  },
  {
    icon: Sparkles,
    number: "06",
    title: "Guest Experience",
    body: "Luxury service sequence, premium beverage upselling, and elevated guest retention.",
  },
];

export const competencies: {
  icon: IconType;
  label: string;
  items: { title: string; body: string }[];
}[] = [
  {
    icon: Users,
    label: "Leadership at scale",
    items: [
      {
        title: "Talent development & upskilling",
        body: "Structured recipe testing, speed mechanics, and clear promotional pathways from barback to bartender.",
      },
      {
        title: "Station ownership",
        body: "Strict station handovers, hygiene rigour, and personal accountability for par readiness.",
      },
      {
        title: "High-volume orchestration",
        body: "Dynamic shift stationing, pinch-point management, and luxury composure during peak covers.",
      },
      {
        title: "Operational alignment",
        body: "Digitised shift briefings, recipe consistency audits, and coordinated service-bar workflow.",
      },
    ],
  },
  {
    icon: BarChart3,
    label: "Commercial control",
    items: [
      {
        title: "Beverage COGS governance",
        body: "Continuous reconciliation of theoretical vs. actual beverage cost across all bars.",
      },
      {
        title: "Audit rigour & shrinkage control",
        body: "Structured physical inventory cycles, POS depletion auditing, and proactive loss prevention.",
      },
      {
        title: "Procurement & par management",
        body: "Dynamic par levels based on seasonal covers, disciplined supplier orders, and zero dead-stock holding.",
      },
      {
        title: "Recipe costing & menu engineering",
        body: "Ingredient yield optimisation, standard pour-cost modelling, and menu profitability matrix analysis.",
      },
      {
        title: "Check-average & spend growth",
        body: "Floor upselling initiatives, premium spirit positioning, and high-margin cocktail programming.",
      },
      {
        title: "Commercial KPI benchmarking",
        body: "Tracking category sales velocity, shift wastage logs, and weekly beverage gross profit contribution.",
      },
    ],
  },
];

export const digitalTools: {
  tag: string;
  category: string;
  title: string;
  body: string;
  image: string;
  points: string[];
}[] = [
  {
    tag: "Operational prototype",
    category: "Training & knowledge management",
    title: "BarBible Interactive",
    body: "A centralised digital knowledge base and recipe manual built for high-turnover, multi-station bar teams.",
    image: "/assets/tool-barbible.jpg",
    points: [
      "Accelerated onboarding cycles for new bar talent",
      "Zero recipe drift across multi-outlet service bars",
      "Real-time specs, glassware standards, and allergen references",
    ],
  },
  {
    tag: "Proprietary dashboard",
    category: "Financial & menu engineering",
    title: "Cocktail Costing & Pricing Engine",
    body: "An interactive commercial dashboard built to calculate recipe pour costs, model gross margins, and stress-test retail pricing.",
    image: "/assets/tool-bevcost.jpg",
    points: [
      "Ingredient-level cost breakdown with real-time pour cost percentages",
      "Dynamic gross profit modelling based on live market ingredient pricing",
      "Menu engineering insights to optimise high-velocity cocktails",
    ],
  },
];

export const aiWorkflow: { icon: IconType; step: string; title: string; body: string }[] = [
  {
    icon: Boxes,
    step: "01",
    title: "Data ingestion",
    body: "POS sales logs, daily par sheets, physical stock counts, and supplier pricing indices.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "Algorithmic analysis",
    body: "Pattern recognition, automated variance detection, sales-mix modelling, and waste identification.",
  },
  {
    icon: BrainCircuit,
    step: "03",
    title: "Operational insights",
    body: "Rapid identification of margin leakage, high-velocity SKUs, and shift-level cost trends.",
  },
  {
    icon: Target,
    step: "04",
    title: "Executive execution",
    body: "Targeted stock par adjustments, recipe calibration, team coaching, and decisive leadership.",
  },
];

export const aiUseCases: string[] = [
  "Automated variance reconciliation & depletion auditing",
  "Dynamic pour-cost & gross margin modelling",
  "Standardised SOP documentation & multilingual training guides",
  "Shift beverage sales velocity forecasting",
];

export const aiNote =
  "AI accelerates data synthesis; hospitality judgment and operational execution remain human-led.";

export const certification = {
  label: "Certification",
  title: "Applied Prompt Engineering & Generative AI Systems",
  issuer: "Dubai Future Foundation — 1 Million Prompters Programme",
  body: "Trained in enterprise workflow automation, contextual data reasoning, and advanced prompt architecture for business operations.",
  image: "/assets/cert-dubai-future-foundation.jpg",
};

export const roles: { number: string; title: string; scope: string; body: string }[] = [
  {
    number: "01",
    title: "Bar Manager",
    scope: "High-volume venues & megaclubs",
    body: "Complete daily operational ownership, shift deployment, guest experience elevation, and service consistency.",
  },
  {
    number: "02",
    title: "Beverage Operations Manager",
    scope: "Multi-outlet portfolios & hospitality groups",
    body: "Comprehensive COGS governance, procurement discipline, automated inventory variance auditing, and cross-outlet standardisation.",
  },
  {
    number: "03",
    title: "Pre-Opening & Operations Specialist",
    scope: "New concept launches & turnarounds",
    body: "Station commissioning, menu engineering, luxury SOP architecture, and rapid staff training from ground zero to launch.",
  },
];

export const contact = {
  heading: "Let's talk beverage operations.",
  body: "Available for strategic beverage leadership, venue operations management, and concept pre-openings across the UAE and wider GCC.",
  cv: "/assets/Ashraf_Yousef_CV.pdf",
};

export const contactLinks: {
  icon: IconType;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}[] = [
  {
    icon: Mail,
    label: "Email",
    value: "ashrafkypallam@gmail.com",
    href: "mailto:ashrafkypallam@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+971 52 588 6326",
    href: "tel:+971525886326",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message directly",
    href: "https://wa.me/971525886326",
    external: true,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "/in/ashrafkyousef123",
    href: "https://www.linkedin.com/in/ashrafkyousef123/",
    external: true,
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Dubai, United Arab Emirates",
    href: "https://maps.google.com/?q=Dubai,United+Arab+Emirates",
    external: true,
  },
];

export const trophyIcon = Trophy;
