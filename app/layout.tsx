import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://ashrafkyousef.netlify.app";
const description =
  "Ashraf K Yousef — Assistant Bar Manager in Dubai with 11+ years UAE hospitality experience. Beverage cost control, team leadership, digital tools and AI-driven operational analysis.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ashraf K Yousef — Assistant Bar Manager | Dubai, UAE",
  description,
  authors: [{ name: "Ashraf K Yousef" }],
  keywords: [
    "bar manager Dubai",
    "beverage operations",
    "beverage COGS",
    "pre-opening bar",
    "hospitality leadership UAE",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Ashraf K Yousef — Assistant Bar Manager",
    description:
      "11+ years UAE hospitality experience. Beverage cost control, team leadership, digital tools and AI-driven operations — Dubai, UAE.",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ashraf K Yousef — Assistant Bar Manager, Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashraf K Yousef — Assistant Bar Manager",
    description,
    images: ["/assets/twitter-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0810",
  colorScheme: "dark",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ashraf K Yousef",
  jobTitle: "Assistant Bar Manager",
  description,
  url: siteUrl,
  email: "mailto:ashrafkypallam@gmail.com",
  telephone: "+971525886326",
  address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
  sameAs: ["https://www.linkedin.com/in/ashrafkyousef123/"],
  knowsAbout: [
    "Beverage operations",
    "Bar management",
    "Inventory and COGS control",
    "Menu engineering",
    "Pre-opening operations",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Marks JS as available so scroll-reveal can hide content; without JS
            everything stays visible. Runs before paint to avoid a flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js")`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
