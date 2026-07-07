import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { ArrowRight, CheckCircle2, Code2, Sparkles, Cog, ShoppingBag, Globe, Layout, Palette, Users, Briefcase, Database, Server, Cloud, Smartphone, PenTool, Wrench, Search, Zap, Plug, type LucideIcon } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Spidermen Web Design" },
      { name: "description", content: "Custom websites, AI, automation, eCommerce, CRM, HRM, POS, ERP, SaaS, mobile, UI/UX, SEO and cloud services from Spidermen Web Design." },
      { property: "og:title", content: "Services — Spidermen Web Design" },
      { property: "og:description", content: "Full-service digital product delivery for modern businesses." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  benefits: string[];
  features: string[];
  process: string[];
  img: string;
};

const SERVICES: Service[] = [
  {
    icon: Code2,
    title: "Custom Website Development",
    desc: "Modern, high-performing websites tailored to your brand and business goals.",
    benefits: ["Faster page speed", "Higher conversions", "Full brand control"],
    features: ["Custom design", "CMS integration", "SEO ready", "Analytics"],
    process: ["Discovery", "Design", "Development", "Launch"],
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: Sparkles,
    title: "AI Development",
    desc: "AI features, chatbots, and workflow automation powered by modern LLMs.",
    benefits: ["Reduce manual work", "24/7 support", "Smarter products"],
    features: ["OpenAI/Anthropic", "RAG pipelines", "Custom agents", "Voice AI"],
    process: ["Use case", "Prototype", "Integrate", "Iterate"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: Cog,
    title: "Business Automation",
    desc: "Automate repetitive workflows across sales, ops, marketing and support.",
    benefits: ["Save hours weekly", "Fewer errors", "Better visibility"],
    features: ["Zapier/Make", "Custom scripts", "API integrations", "Dashboards"],
    process: ["Audit", "Design flow", "Build", "Monitor"],
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: ShoppingBag,
    title: "Shopify Development",
    desc: "Custom Shopify themes, apps, and speed-optimized stores that convert.",
    benefits: ["Higher AOV", "Better UX", "SEO friendly"],
    features: ["Custom themes", "App integration", "Speed optimization", "Checkout"],
    process: ["Audit", "Design", "Build", "Optimize"],
    img: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: Globe,
    title: "WordPress Development",
    desc: "Custom themes, WooCommerce stores and SEO-ready WordPress sites.",
    benefits: ["Full editorial control", "Scalable", "SEO ready"],
    features: ["Custom themes", "WooCommerce", "Maintenance", "Security"],
    process: ["Plan", "Design", "Develop", "Launch"],
    img: "https://images.unsplash.com/photo-1487611459768-bd414656ea10?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: Layout,
    title: "Squarespace Development",
    desc: "Elegant Squarespace sites for portfolios, services and memberships.",
    benefits: ["Fast delivery", "Easy to manage", "Beautiful UI"],
    features: ["Custom design", "CSS injection", "Memberships", "Commerce"],
    process: ["Brief", "Design", "Build", "Train"],
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: Palette,
    title: "Wix Development",
    desc: "Wix Studio sites for landing pages, bookings and business websites.",
    benefits: ["Rapid launch", "Client-editable", "Booking ready"],
    features: ["Custom design", "Booking systems", "Ecommerce", "SEO"],
    process: ["Plan", "Design", "Build", "Train"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: Users,
    title: "Custom CRM Development",
    desc: "Sales pipelines, lead management and customer 360 tailored to your workflow.",
    benefits: ["Close more deals", "Better handoffs", "Actionable data"],
    features: ["Pipelines", "Automation", "Reporting", "Integrations"],
    process: ["Map workflow", "Prototype", "Build", "Rollout"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: Briefcase,
    title: "Custom HRM Development",
    desc: "Employee portals with attendance, payroll, leaves and reviews built in.",
    benefits: ["Streamlined HR ops", "Employee self-service", "Compliance ready"],
    features: ["Attendance", "Payroll", "Leaves", "Performance"],
    process: ["Discovery", "Design", "Build", "Train"],
    img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: Database,
    title: "POS Systems",
    desc: "Retail and restaurant POS with inventory, billing and analytics.",
    benefits: ["Faster checkout", "Live inventory", "Multi-branch"],
    features: ["Inventory", "Billing", "Kitchen display", "Reports"],
    process: ["Plan", "Design", "Build", "Deploy"],
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: Server,
    title: "ERP Development",
    desc: "Modular ERPs covering finance, procurement, inventory and operations.",
    benefits: ["Single source of truth", "Cross-team visibility", "Compliance"],
    features: ["Finance", "Inventory", "HR", "Reports"],
    process: ["Discovery", "Modules", "Build", "Rollout"],
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: Zap,
    title: "SaaS Development",
    desc: "End-to-end SaaS products with billing, roles, dashboards and APIs.",
    benefits: ["Faster time to market", "Scalable", "Investor ready"],
    features: ["Auth & roles", "Billing", "Dashboards", "APIs"],
    process: ["MVP scope", "Design", "Build", "Iterate"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps with React Native for iOS and Android.",
    benefits: ["One codebase", "Native feel", "Faster shipping"],
    features: ["React Native", "Push", "Offline", "App store"],
    process: ["Design", "Build", "Test", "Ship"],
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    desc: "Research-led product design that turns complex problems into simple flows.",
    benefits: ["Higher usability", "Design system", "Faster dev"],
    features: ["Research", "Wireframes", "Prototypes", "Design systems"],
    process: ["Research", "Sketch", "Prototype", "Handoff"],
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    desc: "Ongoing updates, monitoring, backups and content changes.",
    benefits: ["Peace of mind", "Zero downtime", "Fresh content"],
    features: ["Updates", "Backups", "Uptime", "Support"],
    process: ["Audit", "Onboard", "Maintain", "Report"],
    img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Technical and content SEO to grow organic traffic that converts.",
    benefits: ["More traffic", "Better rankings", "Higher revenue"],
    features: ["Audit", "On-page", "Technical", "Content"],
    process: ["Audit", "Strategy", "Implement", "Measure"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: Zap,
    title: "Speed Optimization",
    desc: "Core Web Vitals fixes and performance tuning for faster experiences.",
    benefits: ["Better UX", "Higher SEO", "More conversions"],
    features: ["CWV audit", "Image opt", "CDN", "Caching"],
    process: ["Audit", "Prioritize", "Optimize", "Verify"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: Plug,
    title: "API Integrations",
    desc: "Connect the tools you already use — Stripe, HubSpot, Slack and more.",
    benefits: ["No silos", "Automated data", "Faster ops"],
    features: ["REST/GraphQL", "Webhooks", "Auth", "Monitoring"],
    process: ["Map", "Design", "Build", "Monitor"],
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80&auto=format&fit=crop",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Cloud architecture, deployment and DevOps on AWS, Vercel and beyond.",
    benefits: ["Scalable", "Reliable", "Cost efficient"],
    features: ["AWS/Vercel", "CI/CD", "IaC", "Monitoring"],
    process: ["Assess", "Architect", "Deploy", "Optimize"],
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80&auto=format&fit=crop",
  },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything you need to design, build and grow."
        subtitle="From marketing sites to full-stack platforms — one senior team, end-to-end delivery."
      >
        <Link to="/contact" className="btn-primary">Start a project <ArrowRight className="h-4 w-4" /></Link>
        <Link to="/portfolio" className="btn-outline">See our work</Link>
      </PageHero>

      <section className="pb-16 md:pb-24">
        <div className="container-page space-y-16 md:space-y-24">
          {SERVICES.map((s, i) => (
            <div key={s.title} className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
              <div className="[direction:ltr] rounded-3xl overflow-hidden aspect-[5/4] bg-surface">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="[direction:ltr]">
                <div className="h-11 w-11 rounded-xl grid place-items-center bg-primary-soft text-primary mb-5">
                  <s.icon className="h-5 w-5" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{s.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>

                <div className="mt-6 grid sm:grid-cols-2 gap-6">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Benefits</div>
                    <ul className="space-y-1.5">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" /> {b}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Features</div>
                    <ul className="space-y-1.5">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" /> {f}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Process</div>
                  <div className="flex flex-wrap gap-2">
                    {s.process.map((p, idx) => (
                      <span key={p} className="text-xs px-3 py-1 rounded-full bg-surface border border-border">
                        {idx + 1}. {p}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to="/contact" className="mt-8 inline-flex btn-primary">Request this service <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
