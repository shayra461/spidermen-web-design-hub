import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Spidermen Web Design" },
      { name: "description", content: "Answers to the most common questions about services, pricing, timelines, support and how we work." },
      { property: "og:title", content: "FAQ — Spidermen Web Design" },
      { property: "og:description", content: "Everything you need to know before starting a project with us." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQ,
});

const FAQS = [
  { q: "What services do you offer?", a: "Custom websites, AI applications, eCommerce (Shopify/WooCommerce/custom), CRM, HRM, POS, ERP, SaaS platforms, mobile apps, UI/UX, maintenance, SEO, speed optimization, API integrations and cloud." },
  { q: "How long does a typical project take?", a: "Marketing sites launch in 2–4 weeks. eCommerce and small apps 4–8 weeks. Custom software and SaaS 8–20+ weeks. We scope your specific timeline during discovery." },
  { q: "How much does a project cost?", a: "Websites start around $3,000. eCommerce from $6,000. Custom software and SaaS platforms start at $15,000+. We provide a fixed-price proposal after a free scoping call." },
  { q: "Do you build custom software?", a: "Yes — ERPs, CRMs, HRMs, POS, dashboards, portals and full SaaS products, all tailored to your workflow." },
  { q: "Do you work with startups or only enterprises?", a: "Both. We work with early-stage startups building their first MVP as well as established enterprises modernizing their stack." },
  { q: "Can you redesign my existing website?", a: "Absolutely. We audit your current site, then rebuild with modern design, better performance, and stronger SEO." },
  { q: "Do you offer ongoing support?", a: "Yes. Monthly retainers cover updates, security patches, backups, monitoring and continued feature work." },
  { q: "Which technologies do you use?", a: "React, Next.js, Node, Laravel, PHP, Python, Tailwind, Shopify, WordPress, AWS, Vercel, MongoDB, MySQL and modern AI APIs like OpenAI and Anthropic." },
  { q: "Can you develop CRM, HRM and POS systems?", a: "Yes — all three are core specialties. We build custom systems tuned to your specific business logic, not generic templates." },
  { q: "Do you provide UI/UX design?", a: "Yes. Every project starts with design. We can also do design-only engagements including design systems." },
  { q: "Do you handle SEO?", a: "Yes. Technical SEO is built into every project. We also offer standalone SEO audits and ongoing content optimization." },
  { q: "Can you migrate from another platform?", a: "Yes — WordPress to headless, Shopify migrations, or legacy PHP to modern stacks. We plan migrations to preserve SEO and minimize downtime." },
  { q: "Do you sign NDAs?", a: "Yes. We're happy to sign an NDA before discussing sensitive project details." },
  { q: "Who owns the code and design?", a: "You do. All source code, design files and content are transferred to you on delivery." },
  { q: "Do you offer white-label services for agencies?", a: "Yes. We regularly partner with agencies to deliver client work under their brand." },
  { q: "How do payments work?", a: "Typically 50% to start and 50% on delivery for fixed-price projects. Retainers are billed monthly in advance." },
  { q: "Do you work with international clients?", a: "Yes. We work with clients across North America, Europe, Middle East and Asia. All communication is in English." },
  { q: "What if I need changes after launch?", a: "Small tweaks are covered under our warranty period. Larger changes are handled via a support retainer or scoped as a new phase." },
  { q: "Do you offer mobile app development?", a: "Yes. We build cross-platform apps with React Native for iOS and Android with a shared web codebase where possible." },
  { q: "How do we get started?", a: "Book a free consultation on our contact page. We'll listen, ask questions, and follow up with a proposal within 3 business days." },
  { q: "Do you build AI features into existing apps?", a: "Yes. We add chatbots, RAG search, AI assistants, summarization, and workflow automation to existing products." },
  { q: "What makes Spidermen different?", a: "Senior-only team, transparent process, no offshore handoffs, design and engineering under one roof, and a long-term partnership mindset." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Everything you might want to ask."
        subtitle="Can't find an answer? Send us a message — we usually reply within a few hours."
      />

      <section className="pb-16 md:pb-24">
        <div className="container-page max-w-3xl">
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <div key={f.q} className="rounded-2xl border border-border bg-white overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold pr-4">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 text-primary shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
                </button>
                <div className="grid transition-all duration-300" style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Still have questions?" subtitle="We'd love to hear about your project and figure out the best path forward." />
    </>
  );
}
