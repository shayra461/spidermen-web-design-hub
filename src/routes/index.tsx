import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Code2, Sparkles, ShoppingBag, Cpu, Users, Briefcase, Database, Layout, Star, Zap, Shield, Search, Smartphone, Headphones, Palette } from "lucide-react";
import { SectionHeading } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import heroImage from "@/assets/hero-illustration.jpg";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Spidermen Web Design — Custom Websites, AI & Business Software" },
      { name: "description", content: "Premium software agency building modern websites, AI applications, CRM, HRM, POS, and custom business software for growing companies." },
      { property: "og:title", content: "Spidermen Web Design — Digital Solutions for Modern Business" },
      { property: "og:description", content: "High-performance websites, AI apps, eCommerce and custom software built by a senior team." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const SERVICES = [
  { icon: Code2, title: "Custom Website Development", desc: "Modern, fast, conversion-focused websites tailored to your brand.", to: "/services" },
  { icon: Sparkles, title: "AI Development", desc: "Chatbots, automation, and AI features powered by OpenAI and modern APIs.", to: "/services" },
  { icon: ShoppingBag, title: "eCommerce Solutions", desc: "Shopify, WooCommerce and custom stores built to convert.", to: "/services" },
  { icon: Users, title: "CRM Development", desc: "Sales pipelines, lead management and customer 360 tailored to you.", to: "/services" },
  { icon: Briefcase, title: "HRM Systems", desc: "Employee, attendance, payroll and leave management portals.", to: "/services" },
  { icon: Database, title: "POS Systems", desc: "Retail and restaurant point-of-sale with inventory and billing.", to: "/services" },
];

const TECH = ["React", "Next.js", "Node.js", "Laravel", "Python", "OpenAI", "Shopify", "WordPress", "Firebase", "AWS", "MongoDB", "Tailwind"];

const WHY = [
  { icon: Palette, label: "Professional UI/UX", desc: "Design-led thinking on every project." },
  { icon: Zap, label: "Fast Delivery", desc: "Ship in weeks, not months." },
  { icon: Sparkles, label: "AI-Powered", desc: "Modern automation baked in." },
  { icon: Shield, label: "Secure Code", desc: "Best practices from day one." },
  { icon: Search, label: "SEO Friendly", desc: "Built for discoverability." },
  { icon: Smartphone, label: "Mobile Responsive", desc: "Perfect on every device." },
  { icon: Code2, label: "Custom Built", desc: "No cookie-cutter templates." },
  { icon: Headphones, label: "Ongoing Support", desc: "We're here after launch." },
];

const PROCESS = [
  { n: "01", title: "Discovery", desc: "Understand your goals, users and constraints." },
  { n: "02", title: "Design", desc: "Wireframes and polished UI in your brand." },
  { n: "03", title: "Development", desc: "Clean, scalable code with modern frameworks." },
  { n: "04", title: "Launch & Support", desc: "Smooth deployment plus ongoing care." },
];

const PORTFOLIO = [
  { title: "Nexus Corporate Portal", cat: "Corporate", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&auto=format&fit=crop" },
  { title: "Urban Threads Shopify", cat: "eCommerce", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80&auto=format&fit=crop" },
  { title: "Insight AI Dashboard", cat: "AI Platform", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop" },
];

const TESTIMONIALS = [
  { name: "Ahmed Raza", role: "Founder, Nexus Corp", text: "Spidermen transformed our online presence. The team is professional, fast, and truly cares about our success." },
  { name: "Sarah Mitchell", role: "COO, Urban Threads", text: "Our Shopify conversions doubled after their redesign. Best decision we made this year." },
  { name: "David Chen", role: "CEO, PeopleFlow", text: "The HRM system streamlined our entire operation. Enterprise quality at agency speed." },
];

const FAQ_PREVIEW = [
  { q: "How long does a typical project take?", a: "Most business websites launch in 2–4 weeks. Custom software timelines are scoped in discovery." },
  { q: "Do you build custom software?", a: "Yes — ERPs, CRMs, dashboards, portals and full SaaS products tailored to your workflow." },
  { q: "Do you offer ongoing support?", a: "Yes. Monthly retainers cover maintenance, updates, and continuous improvement." },
];

const LATEST = [
  { title: "Saffron Table", cat: "Restaurant", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80&auto=format&fit=crop" },
  { title: "PeopleFlow HRM", cat: "HRM", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop" },
  { title: "SwiftPOS", cat: "POS", img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80&auto=format&fit=crop" },
  { title: "Studio Kai", cat: "Portfolio", img: "https://images.unsplash.com/photo-1487611459768-bd414656ea10?w=800&q=80&auto=format&fit=crop" },
];

function useInView<T extends Element>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold: 0.25 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setVal(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);
  return <div ref={ref} className="text-4xl md:text-5xl font-display font-bold">{val}{suffix}</div>;
}

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_60%_20%,black,transparent)]" />
        <div className="container-page relative grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-reveal">
            <div className="eyebrow mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              A premium software agency
            </div>
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
              Build Powerful <span className="text-primary">Digital Solutions</span> For Modern Businesses
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              We build high-performance websites, AI applications, CRM systems, HRM software, POS solutions, eCommerce platforms and custom business software that help companies grow faster.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">Get Free Consultation <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/portfolio" className="btn-outline">View Portfolio</Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
              </div>
              <span>Rated 5.0 by 50+ clients worldwide</span>
            </div>
          </div>
          <div className="relative">
            <img src={heroImage} alt="Modern software agency dashboard illustration" width={1400} height={1200} className="w-full h-auto rounded-3xl" />
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="py-10 border-y border-border bg-surface">
        <div className="container-page">
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-6">Trusted by startups, agencies, and growing businesses</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
            {["NEXUS", "VERTEX", "SAFFRON", "URBAN CO", "STUDIO KAI", "PEOPLEFLOW", "INSIGHT AI"].map((l) => (
              <div key={l} className="font-display font-semibold tracking-widest text-sm">{l}</div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-28">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow mb-4">Who we are</div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">A senior team of designers, engineers and strategists</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Spidermen Web Design is a digital agency specializing in premium web development, AI-powered applications, eCommerce and custom business software. We partner with founders, marketing leaders and product teams to ship work that measurably moves the business.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {["Design-led delivery", "Modern engineering", "Transparent pricing", "Long-term support"].map((p) => (
                <div key={p} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> {p}
                </div>
              ))}
            </div>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
              More about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative aspect-[5/4] rounded-3xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop" alt="Team collaborating in a modern office" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow="What we do" title="Services built for growing businesses" subtitle="From marketing sites to full-stack platforms — end-to-end delivery." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <Link key={s.title} to={s.to} className="card-lift rounded-2xl p-7 group">
                <div className="h-11 w-11 rounded-xl grid place-items-center bg-primary-soft text-primary mb-5 group-hover:scale-110 transition-transform">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-5 text-sm font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <ArrowRight className="h-4 w-4" /></div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="btn-outline">View all services <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="Why us" title="Why businesses choose Spidermen" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {WHY.map((w) => (
              <div key={w.label} className="card-lift rounded-2xl p-6">
                <div className="h-10 w-10 rounded-lg grid place-items-center bg-primary-soft text-primary mb-4">
                  <w.icon className="h-5 w-5" />
                </div>
                <div className="text-sm font-semibold">{w.label}</div>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow="Our stack" title="Modern technologies we work with" subtitle="Battle-tested tools we use to ship reliable products." />
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {TECH.map((t) => (
              <div key={t} className="px-5 py-2.5 rounded-full bg-white border border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors">{t}</div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/technologies" className="btn-outline">See full stack <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="Portfolio preview" title="Selected recent work" />
          <div className="grid md:grid-cols-3 gap-6">
            {PORTFOLIO.map((p) => (
              <Link key={p.title} to="/portfolio" className="card-lift rounded-2xl overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-primary font-semibold uppercase tracking-wider">{p.cat}</div>
                    <div className="mt-1 font-semibold">{p.title}</div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow="How we work" title="A proven development process" />
          <div className="grid md:grid-cols-4 gap-5">
            {PROCESS.map((p) => (
              <div key={p.n} className="card-lift rounded-2xl p-6 bg-white">
                <div className="text-3xl font-display font-bold text-primary/30">{p.n}</div>
                <h3 className="mt-2 font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/process" className="btn-outline">See full process <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 md:py-24">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { v: 100, s: "+", l: "Projects Completed" },
            { v: 50, s: "+", l: "Happy Clients" },
            { v: 5, s: "+", l: "Years Experience" },
            { v: 24, s: "/7", l: "Support" },
          ].map((x) => (
            <div key={x.l} className="text-center">
              <Counter target={x.v} suffix={x.s} />
              <div className="mt-2 text-sm text-muted-foreground">{x.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow="Kind words" title="What clients say" />
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="card-lift rounded-2xl p-7 bg-white">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">"{t.text}"</p>
                <div className="pt-5 border-t border-border">
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="py-20 md:py-28">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="eyebrow mb-4">FAQ</div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Answers to common questions</h2>
            <p className="mt-6 text-muted-foreground max-w-md">Have more questions? See our full FAQ or reach out — we usually reply within a few hours.</p>
            <Link to="/faq" className="mt-6 inline-flex btn-outline">All FAQs <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="space-y-3">
            {FAQ_PREVIEW.map((f) => (
              <div key={f.q} className="rounded-2xl border border-border p-6">
                <div className="font-semibold">{f.q}</div>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST PROJECTS */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow="Latest projects" title="Fresh from the studio" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {LATEST.map((p) => (
              <Link key={p.title} to="/portfolio" className="card-lift rounded-2xl overflow-hidden group bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-4">
                  <div className="text-[10px] text-primary uppercase tracking-widest font-semibold">{p.cat}</div>
                  <div className="mt-1 text-sm font-semibold">{p.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
