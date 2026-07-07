import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Spidermen Web Design" },
      { name: "description", content: "Selected projects from Spidermen Web Design: corporate sites, eCommerce, CRM, HRM, POS, SaaS, AI dashboards and more." },
      { property: "og:title", content: "Portfolio — Spidermen Web Design" },
      { property: "og:description", content: "Our recent work across industries." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

type Project = {
  title: string;
  category: string;
  industry: string;
  tech: string[];
  desc: string;
  result: string;
  img: string;
};

const PROJECTS: Project[] = [
  { title: "Nexus Corporate Portal", category: "Corporate Websites", industry: "Consulting", tech: ["Next.js", "Tailwind", "Sanity"], desc: "Global consulting group's corporate site with careers, insights and locations.", result: "+68% qualified leads", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop" },
  { title: "Vertex Group", category: "Corporate Websites", industry: "Finance", tech: ["React", "Node", "Contentful"], desc: "Enterprise site with investor relations and multi-language support.", result: "3x organic traffic YoY", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&auto=format&fit=crop" },
  { title: "Medivue Health", category: "Healthcare", industry: "Healthcare", tech: ["Next.js", "Postgres", "AWS"], desc: "Patient portal for booking, records and telehealth consultations.", result: "22% fewer no-shows", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80&auto=format&fit=crop" },
  { title: "Estate Prime", category: "Real Estate", industry: "Real Estate", tech: ["Next.js", "Mapbox", "Sanity"], desc: "Real estate listings with map search, saved properties and agent CRM.", result: "45% more listings viewed", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80&auto=format&fit=crop" },
  { title: "Saffron Table", category: "Restaurant", industry: "F&B", tech: ["WordPress", "WooCommerce"], desc: "Restaurant site with reservations, menus and online ordering.", result: "5x online orders", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80&auto=format&fit=crop" },
  { title: "Byte Academy", category: "Education", industry: "EdTech", tech: ["Next.js", "Stripe", "Postgres"], desc: "Online courses platform with progress tracking and cohort programs.", result: "12K+ enrolled students", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80&auto=format&fit=crop" },
  { title: "Urban Threads", category: "Ecommerce", industry: "Fashion", tech: ["Shopify", "Liquid", "Klaviyo"], desc: "Custom Shopify store with 2x conversion after a full redesign.", result: "2.1x conversion rate", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80&auto=format&fit=crop" },
  { title: "SalesHub CRM", category: "CRM", industry: "SaaS", tech: ["React", "Node", "Postgres"], desc: "Sales CRM with pipeline automation and email sequencing.", result: "40% more deals closed", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop" },
  { title: "PeopleFlow HRM", category: "HRM", industry: "Enterprise", tech: ["Laravel", "MySQL", "React"], desc: "HRM platform with payroll, leaves, attendance and performance reviews.", result: "60% less HR admin time", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop" },
  { title: "SwiftPOS", category: "POS", industry: "Retail", tech: ["React Native", "Node", "MongoDB"], desc: "Multi-branch POS with real-time inventory and cloud reporting.", result: "Deployed to 24 locations", img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&q=80&auto=format&fit=crop" },
  { title: "Insight AI", category: "AI Dashboard", industry: "Analytics", tech: ["Next.js", "OpenAI", "Postgres"], desc: "AI-powered analytics dashboard with natural-language querying.", result: "Reduced report time 10x", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop" },
  { title: "LaunchPad", category: "Landing Pages", industry: "SaaS", tech: ["Next.js", "Framer Motion"], desc: "High-converting product launch page with A/B experimentation.", result: "3.4% signup rate", img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80&auto=format&fit=crop" },
  { title: "Cloudlane SaaS", category: "SaaS Platforms", industry: "DevOps", tech: ["Next.js", "AWS", "Postgres"], desc: "B2B SaaS with billing, role-based access and admin dashboards.", result: "$1.2M ARR in year one", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80&auto=format&fit=crop" },
];

const CATS = ["All", "Corporate Websites", "Healthcare", "Real Estate", "Restaurant", "Education", "Ecommerce", "CRM", "HRM", "POS", "AI Dashboard", "Landing Pages", "SaaS Platforms"];

function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Selected work from across industries."
        subtitle="Real projects, real results. Filter by category to explore the products we've shipped."
      />

      <section className="pb-8">
        <div className="container-page">
          <div className="flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`text-sm px-4 py-2 rounded-full border transition-colors ${
                  active === c ? "bg-primary text-primary-foreground border-primary" : "bg-white border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-page grid md:grid-cols-2 gap-8">
          {filtered.map((p) => (
            <article key={p.title} className="card-lift rounded-3xl overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-7">
                <div className="text-xs text-primary uppercase tracking-widest font-semibold">{p.category}</div>
                <h2 className="mt-2 text-2xl font-bold">{p.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

                <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">Industry</dt>
                    <dd className="mt-1 font-medium">{p.industry}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">Result</dt>
                    <dd className="mt-1 font-medium text-primary">{p.result}</dd>
                  </div>
                </dl>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-surface border border-border">{t}</span>
                  ))}
                </div>

                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                  View project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection title="Want to be next?" subtitle="Let's discuss how we can help your project reach its goals." />
    </>
  );
}
