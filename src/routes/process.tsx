import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { Search, FlaskConical, Map, PenTool, Layout, Code2, TestTube2, Rocket, Wrench, type LucideIcon } from "lucide-react";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — Spidermen Web Design" },
      { name: "description", content: "How we work: discovery, research, planning, wireframing, UI design, development, testing, deployment and maintenance." },
      { property: "og:title", content: "Our Development Process — Spidermen Web Design" },
      { property: "og:description", content: "A proven, transparent process for shipping premium digital products." },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: Process,
});

type Step = { n: string; icon: LucideIcon; title: string; desc: string; details: string[]; img: string };

const STEPS: Step[] = [
  { n: "01", icon: Search, title: "Discovery", desc: "We start by deeply understanding your business, users, and goals.", details: ["Stakeholder interviews", "Success metrics", "Scope alignment"], img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop" },
  { n: "02", icon: FlaskConical, title: "Research", desc: "Competitive audits and user research uncover the real opportunities.", details: ["Competitor audit", "User interviews", "Analytics review"], img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80&auto=format&fit=crop" },
  { n: "03", icon: Map, title: "Planning", desc: "We turn insight into a clear plan with priorities, sprints and milestones.", details: ["Roadmap", "Sprint plan", "Tech architecture"], img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80&auto=format&fit=crop" },
  { n: "04", icon: Layout, title: "Wireframing", desc: "Low-fidelity flows and wireframes to lock structure before visual design.", details: ["User flows", "Wireframes", "IA reviews"], img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80&auto=format&fit=crop" },
  { n: "05", icon: PenTool, title: "UI Design", desc: "Polished, on-brand UI with a design system built for scale.", details: ["Visual design", "Design system", "Prototype"], img: "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=1200&q=80&auto=format&fit=crop" },
  { n: "06", icon: Code2, title: "Development", desc: "Clean, scalable code with modern frameworks and CI from day one.", details: ["Modern stack", "Code reviews", "CI/CD"], img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80&auto=format&fit=crop" },
  { n: "07", icon: TestTube2, title: "Testing", desc: "QA across devices, browsers and edge cases before we ship.", details: ["Cross-browser", "Device QA", "Accessibility"], img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80&auto=format&fit=crop" },
  { n: "08", icon: Rocket, title: "Deployment", desc: "Smooth deployment with monitoring and rollback safety nets.", details: ["Zero downtime", "Monitoring", "Analytics"], img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80&auto=format&fit=crop" },
  { n: "09", icon: Wrench, title: "Maintenance", desc: "Ongoing care, iteration and improvements after launch.", details: ["Support SLA", "Feature dev", "Uptime"], img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80&auto=format&fit=crop" },
];

function Process() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="A transparent, proven development process."
        subtitle="Nine deliberate steps from first call to long-term partnership. No black boxes."
      />

      <section className="pb-16 md:pb-24">
        <div className="container-page space-y-16 md:space-y-24">
          {STEPS.map((s, i) => (
            <div key={s.n} className={`grid lg:grid-cols-2 gap-10 lg:gap-14 items-center ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
              <div className="[direction:ltr] rounded-3xl overflow-hidden aspect-[5/4]">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="[direction:ltr]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl font-display font-bold text-primary/30">{s.n}</div>
                  <div className="h-11 w-11 rounded-xl grid place-items-center bg-primary-soft text-primary">
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{s.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-5 space-y-1.5">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
