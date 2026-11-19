// All copy and data for the attorney sales page, verbatim from the
// Claude Design reference (ui_kits/sales-page/sections.jsx).
import type { IconName } from "@/components/icons";

export const site = {
  name: "Blueprint Tax Advisors",
  title: "Blueprint Tax Advisors",
  description:
    "Law practices lose real money to reactive accounting. We design a year-round plan around your firm, so you keep more and stop dreading April.",
  // Set NEXT_PUBLIC_SITE_URL to the production domain before the final deploy.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://attorneys.blueprintcpas.tax").replace(/\/$/, ""),
  phone: "(501) 361-9228",
  phoneHref: "tel:+15013619228",
  email: "Admin@blueprintcpas.tax",
  emailHref: "mailto:Admin@blueprintcpas.tax",
};

export const hero = {
  kicker: "A CPA Firm Built On Getting It Right",
  title: "Finally, a CPA firm that speaks attorney.",
  sub: "Law practices lose real money to reactive accounting. We design a year-round plan around your firm, so you keep more and stop dreading April.",
  bullets: [
    "Proactive tax planning built around lumpy, contingency-based income",
    "Clean IOLTA / trust accounting that survives a bar audit",
    "Entity structure, partner K-1s, and estimates handled end-to-end",
  ],
  primaryCta: "Book a consultation",
  secondaryCta: "See how we help",
  video: {
    title: "Blueprint Tax Advisors — New Attorney VSL",
    src: "https://player.vimeo.com/video/1248444064?h=134370de85&autoplay=1&muted=1&loop=1&autopause=0&controls=0&title=0&byline=0&portrait=0&playsinline=1&dnt=1",
  },
};

export const solutions: {
  kicker: string;
  title: string;
  sub: string;
  rows: { icon: IconName; pain: string; fix: string }[];
} = {
  kicker: "Built for attorneys",
  title: "The Pain is Predictable. This is the Fix",
  sub: "Law practices don't earn like other businesses, and generic accountants treat them like they do. Here's what we hear, and what we do about it.",
  rows: [
    { icon: "dollarSign", pain: "Income swings wildly with contingency fees and settlements", fix: "We plan around lumpy cash flow, smoothing estimated payments and timing income so a big month doesn't become a brutal tax bill." },
    { icon: "scale", pain: "Trust / IOLTA accounting is a compliance minefield", fix: "We keep client-trust ledgers reconciled to the penny and bar-audit ready, cleanly separated from operating funds." },
    { icon: "layers", pain: "Partner comp, K-1s, and guaranteed payments are a mess", fix: "We structure partnership allocations, guaranteed payments, and quarterly estimates so every partner knows their number early." },
    { icon: "alertTriangle", pain: "You're overpaying because no one plans until March", fix: "Entity election (PLLC vs. S-corp), retirement plans, and QBI, modeled before year-end while the moves still count." },
    { icon: "repeat", pain: "Bookkeeping is always behind and commingled", fix: "Monthly, law-firm-specific bookkeeping: matter costs, retainers, and reimbursements tracked the way a practice runs." },
    { icon: "shieldCheck", pain: "An audit letter would derail your whole week", fix: "We prepared it, so we defend it. Full audit-response support and correspondence handled on your behalf." },
  ],
};

export const blueprint: {
  kicker: string;
  title: string;
  sub: string;
  cta: string;
  steps: { n: string; icon: IconName; title: string; body: string }[];
} = {
  kicker: "Our process",
  title: "The blueprint we build with you",
  sub: "Named for exactly what it is: a drafted, reviewable plan for your practice's taxes, not a once-a-year data dump.",
  cta: "Start your blueprint",
  steps: [
    { n: "01", icon: "target", title: "Assess", body: "A deep review of your returns, entity, trust books, and cash flow. We find what's leaking and what's exposed." },
    { n: "02", icon: "layers", title: "Design", body: "We draft your blueprint: entity elections, retirement, estimate schedule, and a clean bookkeeping system for your matters." },
    { n: "03", icon: "fileCheck", title: "Implement", body: "We file, restructure, and set up the accounts and cadence. You approve; we execute the paperwork." },
    { n: "04", icon: "repeat", title: "Review", body: "We revisit your plan through the year, rechecking income, adjusting estimates, and pulling new levers so nothing piles up at year-end." },
  ],
};

export const reviews = {
  kicker: "What attorneys say",
  title: "Trusted across the bar",
  items: [
    { q: "As a new small business owner who was filing taxes for the first time, we highly recommend using Zee! He communicated with us throughout the whole process and got the return done in a shorter time than first estimated. We did some research and his rates are very reasonable and competitive!", name: "Amanda B.", role: "", initials: "AB", color: "var(--color-primary-deep)" },
    { q: "This is our second year using Zee and we are pleased with how easy he makes it to understand. With how busy everyone is he still takes the time to go through our taxes with us. We will continue to use him in the years to come. 10/10 service, quality, and professionalism.", name: "Logan H.", role: "", initials: "LH", color: "#0A5CFF" },
    { q: "Switched to working with Zee two years ago as someone who is self employed and one of the things I appreciate the most is the great communication! The process is clear and easy and he shares a lot of good tools for staying organized in preparation for tax season.", name: "Kathren G.", role: "", initials: "KG", color: "var(--color-brass, #9a7b3f)" },
  ],
};

export const contact = {
  title: "Let's Chat",
  sub: "Thirty minutes with a CPA who speaks your language.",
  calendly: {
    title: "Schedule an initial consultation",
    src: "https://calendly.com/zeitler_c/initial-consultation-clone-1?hide_gdpr_banner=1&primary_color=1e2c4c",
  },
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61564584429899", d: "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" },
    { label: "Instagram", href: "https://www.instagram.com/blueprint.tax/", d: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.94c-3.14 0-3.51.01-4.75.07-1.15.05-1.77.24-2.19.41-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.17.42-.36 1.04-.41 2.19-.06 1.24-.07 1.61-.07 4.75s.01 3.51.07 4.75c.05 1.15.24 1.77.41 2.19.21.55.47.94.88 1.35.41.41.8.67 1.35.88.42.17 1.04.36 2.19.41 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c1.15-.05 1.77-.24 2.19-.41.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.17-.42.36-1.04.41-2.19.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.05-1.15-.24-1.77-.41-2.19a3.64 3.64 0 0 0-.88-1.35 3.64 3.64 0 0 0-1.35-.88c-.42-.17-1.04-.36-2.19-.41-1.24-.06-1.61-.07-4.75-.07Zm0 3.3a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Zm0 7.59a2.99 2.99 0 1 0 0-5.98 2.99 2.99 0 0 0 0 5.98Zm5.86-7.81a1.08 1.08 0 1 1-2.15 0 1.08 1.08 0 0 1 2.15 0Z" },
    { label: "X", href: "https://x.com/Blueprint_tax1", d: "M17.53 3h3.16l-6.9 7.89L22 21h-6.36l-4.98-6.51L4.96 21H1.8l7.38-8.44L2 3h6.52l4.5 5.95L17.53 3Zm-1.11 16.13h1.75L7.66 4.78H5.78l10.64 14.35Z" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/zee-barfoot-cpa", d: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" },
  ],
  copyright: "© 2026 Blueprint Tax Advisors, PLLC · Privacy · Terms · Disclosures",
};
