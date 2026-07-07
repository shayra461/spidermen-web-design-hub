import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { Target, Eye, Heart, Award, Users, Rocket, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Spidermen Web Design" },
      { name: "description", content: "Meet Spidermen Web Design: a senior team of designers, engineers and strategists building premium web and software products since 2020." },
      { property: "og:title", content: "About Us — Spidermen Web Design" },
      { property: "og:description", content: "Our story, mission and the team behind Spidermen Web Design." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const VALUES = [
  { icon: Target, title: "Mission", text: "To help ambitious businesses ship digital products that measurably move the needle." },
  { icon: Eye, title: "Vision", text: "A world where every company — big or small — has access to elite product craft." },
  { icon: Heart, title: "Values", text: "Craft, honesty, curiosity, and long-term partnership over quick wins." },
];

const TEAM = [
  { name: "Alex Hansen", role: "Founder & Product Lead", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80&auto=format&fit=crop" },
  { name: "Sarah Adams", role: "Design Director", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&q=80&auto=format&fit=crop" },
  { name: "Oliver King", role: "Head of Engineering", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=80&auto=format&fit=crop" },
  { name: "Zoe Miller", role: "AI Engineer", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80&auto=format&fit=crop" },
];

const TIMELINE = [
  { year: "2020", title: "Founded", desc: "Spidermen launched with a two-person team." },
  { year: "2021", title: "First 25 clients", desc: "Shipped websites for startups across three continents." },
  { year: "2022", title: "Product expansion", desc: "Added CRM, HRM and POS to our service catalog." },
  { year: "2023", title: "AI practice", desc: "Built our AI engineering team and delivered our first LLM apps." },
  { year: "2024", title: "50+ clients", desc: "Crossed 50 active clients with 90% referral rate." },
  { year: "2026", title: "Global team", desc: "Fully remote team spanning four countries." },
];

const TRUST = [
  "8+ years of combined leadership experience",
  "Senior-only engineering team",
  "Transparent pricing and timelines",
  "Ongoing partnership after launch",
  "NDA-friendly and IP-safe delivery",
  "Enterprise-grade security practices",
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A software agency built for the long term."
        subtitle="We combine premium design with modern engineering to help businesses launch products that customers love and teams are proud to ship."
      />

      {/* STORY */}
      <section className="py-16 md:py-20">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden aspect-[5/4]">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80&auto=format&fit=crop" alt="Team collaborating on software design" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="eyebrow mb-4">Our story</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">From a two-person studio to a global product team</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Spidermen Web Design was founded in 2020 by a small team who believed that great software should feel effortless — for users and for the teams that maintain it. What started as a boutique studio shipping marketing sites has grown into a full-service product partner delivering complex platforms across industries.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today, we work with founders, product leaders and marketing teams to ship websites, custom software, AI applications and internal tools that scale with the business.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION VISION VALUES */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow="What drives us" title="Mission, vision and values" />
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="card-lift rounded-2xl p-8 bg-white">
                <div className="h-12 w-12 rounded-xl grid place-items-center bg-primary-soft text-primary mb-5">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 md:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="Our people" title="Meet the team" subtitle="Senior designers, engineers and strategists — no offshore handoffs." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((m) => (
              <div key={m.name} className="card-lift rounded-2xl overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img src={m.img} alt={m.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="font-semibold">{m.name}</div>
                  <div className="text-sm text-muted-foreground">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TRUST */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow mb-4">Why clients trust us</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">A partner, not just a vendor</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We're picky about the projects we take on because we invest deeply in every client. That means fewer, better relationships — and work we can put our name on.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {TRUST.map((t) => (
                <div key={t} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> {t}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Award, label: "Award-winning craft" },
              { icon: Users, label: "50+ happy clients" },
              { icon: Rocket, label: "100+ projects shipped" },
              { icon: Target, label: "5+ years experience" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl bg-white border border-border p-6">
                <s.icon className="h-6 w-6 text-primary" />
                <div className="mt-4 text-sm font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 md:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="Milestones" title="Our journey" />
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 md:-translate-x-0.5" aria-hidden />
            <div className="space-y-10">
              {TIMELINE.map((t, i) => (
                <div key={t.year} className={`relative grid md:grid-cols-2 gap-6 items-start ${i % 2 ? "md:[direction:rtl]" : ""}`}>
                  <div className="pl-12 md:pl-0 md:pr-10 [direction:ltr]">
                    <div className="absolute left-4 md:left-1/2 top-2 h-3 w-3 rounded-full bg-primary -translate-x-1/2 ring-4 ring-background" />
                    <div className="rounded-2xl border border-border bg-white p-6">
                      <div className="text-xs text-primary font-semibold">{t.year}</div>
                      <div className="mt-1 font-semibold">{t.title}</div>
                      <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow="Our space" title="Where the work happens" />
          <div className="grid md:grid-cols-3 gap-5">
            {[
              "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80&auto=format&fit=crop",
            ].map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={src} alt="Office space" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Let's build together" subtitle="Tell us about your project. We'll get back within 24 hours." />
    </>
  );
}
