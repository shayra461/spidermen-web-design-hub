import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowRight, ArrowUp, Code2, Sparkles, ShoppingBag, Layout, Palette, Globe,
  Database, Users, Briefcase, Cpu, CheckCircle2, Zap, Rocket, Shield, Clock,
  Smartphone, Search, Headphones, Star, Mail, Phone, MapPin, Send, Menu, X,
  Github, Twitter, Linkedin, Instagram, ChevronDown,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Technologies", href: "#technologies" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  { icon: Code2, title: "Custom Website Development", desc: "Modern business websites built with the latest technologies." },
  { icon: Sparkles, title: "AI Powered Development", desc: "AI integrations, chatbots, automation, AI assistants, smart workflows." },
  { icon: ShoppingBag, title: "Shopify Development", desc: "Custom stores, theme customization, speed optimization, app integration." },
  { icon: Layout, title: "Wix Development", desc: "Business websites, landing pages, booking systems, custom designs." },
  { icon: Palette, title: "Squarespace Development", desc: "Portfolio, business, service and membership websites." },
  { icon: Globe, title: "WordPress Development", desc: "Custom themes, WooCommerce, SEO optimization, maintenance." },
  { icon: Users, title: "Custom CRM Development", desc: "Sales CRM, lead management, customer management, automation." },
  { icon: Briefcase, title: "HRM Systems", desc: "Employee management, attendance, payroll, leave management." },
  { icon: Database, title: "POS Systems", desc: "Retail POS, restaurant POS, inventory, billing systems." },
  { icon: Cpu, title: "Custom Software Development", desc: "Business portals, ERP, management systems, internal dashboards." },
];

const TECH = [
  "HTML","CSS","JavaScript","React","Next.js","Node.js","PHP","Laravel","Python",
  "OpenAI","AI APIs","Shopify","WordPress","Squarespace","Wix","Firebase","MongoDB","MySQL","GitHub","AWS","Vercel",
];

const WHY = [
  { icon: Palette, label: "Professional UI/UX" },
  { icon: Zap, label: "Fast Delivery" },
  { icon: Sparkles, label: "AI Powered Solutions" },
  { icon: Code2, label: "Custom Development" },
  { icon: Search, label: "SEO Friendly" },
  { icon: Smartphone, label: "Mobile Responsive" },
  { icon: Shield, label: "Secure Code" },
  { icon: Headphones, label: "Ongoing Support" },
];

const PORTFOLIO = [
  { category: "Business Website", title: "Nexus Corp", hue: 220 },
  { category: "AI Dashboard", title: "Insight AI", hue: 260 },
  { category: "CRM Portal", title: "SalesHub", hue: 200 },
  { category: "HRM System", title: "PeopleFlow", hue: 280 },
  { category: "POS Software", title: "SwiftPOS", hue: 240 },
  { category: "Shopify Store", title: "Urban Threads", hue: 190 },
  { category: "Corporate Website", title: "Vertex Group", hue: 230 },
  { category: "Restaurant Website", title: "Saffron Table", hue: 20 },
  { category: "Portfolio Website", title: "Studio Kai", hue: 300 },
];

const PROCESS = [
  { n: "01", title: "Discovery", desc: "Understanding your goals, users and requirements." },
  { n: "02", title: "Planning", desc: "Roadmap, architecture and technical strategy." },
  { n: "03", title: "UI/UX Design", desc: "Wireframes, prototypes and polished visuals." },
  { n: "04", title: "Development", desc: "Clean, scalable code with modern frameworks." },
  { n: "05", title: "Testing", desc: "Quality assurance across devices and browsers." },
  { n: "06", title: "Launch", desc: "Smooth deployment with zero downtime." },
  { n: "07", title: "Support", desc: "Ongoing maintenance and improvements." },
];

const STATS = [
  { value: 100, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 24, suffix: "/7", label: "Support" },
];

const TESTIMONIALS = [
  { name: "Ahmed Raza", role: "Founder, Nexus Corp", text: "Spidermen transformed our online presence. The team is professional, fast, and truly cares about our success." },
  { name: "Sarah Mitchell", role: "COO, Urban Threads", text: "Our Shopify store's conversions doubled after their redesign. Best decision we made this year." },
  { name: "David Chen", role: "CEO, PeopleFlow", text: "The HRM system they built streamlined our entire operation. Enterprise quality at agency speed." },
];

const FAQ = [
  { q: "What services do you offer?", a: "Custom websites, AI-powered apps, eCommerce (Shopify/WooCommerce), CRM, HRM, POS systems and complete custom software." },
  { q: "How long does a website take?", a: "Most business websites launch in 2–4 weeks. Complex custom software timelines are scoped during discovery." },
  { q: "Do you build custom software?", a: "Yes — ERPs, internal dashboards, portals and full SaaS products tailored to your workflow." },
  { q: "Can you redesign my current website?", a: "Absolutely. We audit your site, then rebuild with modern design, performance and SEO." },
  { q: "Do you provide ongoing support?", a: "Yes. We offer monthly maintenance, updates, security patches and feature development." },
  { q: "Can you develop CRM, HRM and POS systems?", a: "Yes — all three are core specialties, built custom for your business logic." },
];

function useCounter(target: number, active: boolean, duration = 1600) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return val;
}

function useInView<T extends Element>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: "var(--gradient-primary)" }}>
            <Sparkles className="h-5 w-5" />
          </span>
          <span>Spidermen<span className="text-primary">.</span></span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium btn-primary"
        >
          Get Free Consultation <ArrowRight className="h-4 w-4" />
        </a>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-lg btn-ghost" aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden glass-strong border-t border-border mt-3">
          <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-4">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium btn-primary">
              Get Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden hero-bg pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium mb-6">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Building the future of digital products
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Building <span className="text-gradient">Powerful Websites</span> & Custom Software That Grow Your Business
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Spidermen Web Design delivers modern websites, AI-powered solutions, custom software, CRM, HRM, POS systems, eCommerce stores, and business automation for companies worldwide.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold btn-primary">
              Start Your Project <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#portfolio" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold btn-ghost">
              View Our Work
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
            </div>
            <span>Rated 5/5 by 50+ clients worldwide</span>
          </div>
        </div>

        <div className="relative h-[520px] hidden lg:block">
          {/* Floating UI mockup */}
          <div className="absolute inset-0">
            <div className="absolute top-4 right-8 w-72 card-elevated rounded-2xl p-5 animate-float" style={{ animationDelay: "0s" }}>
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs text-muted-foreground">Dashboard</div>
                <div className="flex gap-1"><span className="h-2 w-2 rounded-full bg-primary" /><span className="h-2 w-2 rounded-full bg-muted" /></div>
              </div>
              <div className="text-2xl font-bold">$48,290</div>
              <div className="text-xs text-primary mt-1">+18.2% this month</div>
              <div className="mt-4 flex items-end gap-1.5 h-16">
                {[40,60,45,75,55,85,70,90,65,80].map((h,i) => (
                  <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: "linear-gradient(180deg, var(--primary-glow), var(--primary))" }} />
                ))}
              </div>
            </div>

            <div className="absolute top-48 left-0 w-64 card-elevated rounded-2xl p-4 animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-8 w-8 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold">AI Assistant</div>
                  <div className="text-[10px] text-muted-foreground">Online</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-xs bg-white/5 rounded-lg rounded-tl-none p-2.5">How can I optimize conversions?</div>
                <div className="text-xs rounded-lg rounded-tr-none p-2.5" style={{ background: "var(--gradient-primary)" }}>Analyzing your funnel now...</div>
              </div>
            </div>

            <div className="absolute bottom-8 right-0 w-72 card-elevated rounded-2xl p-4 animate-float font-mono" style={{ animationDelay: "0.8s" }}>
              <div className="flex gap-1.5 mb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
              </div>
              <div className="text-[11px] leading-relaxed">
                <div><span className="text-primary">const</span> <span>app</span> = <span className="text-primary">createApp</span>({"{"}</div>
                <div className="pl-4">name: <span className="text-green-300">'spidermen'</span>,</div>
                <div className="pl-4">ai: <span className="text-primary">true</span>,</div>
                <div>{"}"});</div>
              </div>
            </div>

            <div className="absolute bottom-40 left-12 w-14 h-14 rounded-2xl card-elevated flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}>
              <Cpu className="h-6 w-6 text-primary" />
            </div>
            <div className="absolute top-8 left-24 w-14 h-14 rounded-2xl card-elevated flex items-center justify-center animate-float" style={{ animationDelay: "2.4s" }}>
              <Globe className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedBy() {
  const logos = ["NEXUS","VERTEX","SAFFRON","URBAN CO","STUDIO KAI","PEOPLEFLOW","INSIGHT AI"];
  return (
    <section className="py-16 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by startups, agencies, and growing businesses.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
          {logos.map((l) => (
            <div key={l} className="font-display font-semibold tracking-widest text-lg text-muted-foreground hover:text-foreground transition-colors">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-16">
      <div className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-4">{eyebrow}</div>
      <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="What we do" title="Our Services" sub="End-to-end digital product development for modern businesses." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="card-elevated rounded-2xl p-7 h-full group">
                <div className="h-12 w-12 rounded-xl flex items-center justify-center mb-5 transition-all group-hover:scale-110" style={{ background: "var(--gradient-primary)" }}>
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Technologies() {
  return (
    <section id="technologies" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, oklch(0.56 0.21 265 / 0.15), transparent 70%)" }} />
      <div className="mx-auto max-w-7xl px-6 relative">
        <SectionHeading eyebrow="Our stack" title="Technologies We Work With" sub="Modern, battle-tested tools we use to ship reliable products." />
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {TECH.map((t, i) => (
            <Reveal key={t} delay={i * 25}>
              <div className="px-5 py-2.5 rounded-full glass text-sm font-medium hover:border-primary/50 hover:text-primary transition-all cursor-default">
                {t}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Why us" title="Why Businesses Choose Spidermen Web Design" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {WHY.map((w, i) => (
            <Reveal key={w.label} delay={i * 50}>
              <div className="card-elevated rounded-2xl p-6 text-center">
                <div className="mx-auto h-11 w-11 rounded-xl flex items-center justify-center mb-3 bg-primary/10 text-primary">
                  <w.icon className="h-5 w-5" />
                </div>
                <div className="text-sm font-semibold">{w.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Selected work" title="Recent Projects" sub="A glimpse into the products we've shipped across industries." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div className="card-elevated rounded-2xl overflow-hidden group cursor-pointer">
                <div
                  className="aspect-[4/3] relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, oklch(0.55 0.2 ${p.hue}), oklch(0.25 0.05 ${p.hue}))` }}
                >
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                  <div className="absolute inset-6 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                    <div className="text-center">
                      <div className="text-3xl font-display font-bold">{p.title}</div>
                      <div className="text-xs mt-1 opacity-70">{p.category}</div>
                    </div>
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-primary uppercase tracking-wider">{p.category}</div>
                    <div className="text-lg font-semibold mt-1">{p.title}</div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="How we work" title="Our Process" sub="A proven 7-step framework from idea to launch and beyond." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 60}>
              <div className="card-elevated rounded-2xl p-6 h-full relative">
                <div className="text-5xl font-display font-bold text-primary/30 mb-2">{p.n}</div>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const val = useCounter(target, inView);
  return (
    <div ref={ref} className="card-elevated rounded-2xl p-8 text-center">
      <div className="text-5xl md:text-6xl font-display font-bold text-gradient">{val}{suffix}</div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function Stats() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-5">
        {STATS.map((s) => <StatCard key={s.label} target={s.value} suffix={s.suffix} label={s.label} />)}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Kind words" title="What Clients Say" />
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="card-elevated rounded-2xl p-7 h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center font-semibold" style={{ background: "var(--gradient-primary)" }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="card-elevated rounded-2xl overflow-hidden">
      <button onClick={onClick} className="w-full flex items-center justify-between p-6 text-left">
        <span className="font-semibold">{q}</span>
        <ChevronDown className={`h-5 w-5 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className="grid transition-all duration-300" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-sm text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="Questions" title="Frequently Asked Questions" />
        <div className="space-y-3">
          {FAQ.map((f, i) => (
            <FAQItem key={f.q} q={f.q} a={f.a} isOpen={open === i} onClick={() => setOpen(open === i ? null : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative aspect-square rounded-3xl overflow-hidden card-elevated p-8">
            <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
            <div className="relative h-full grid grid-cols-2 gap-4">
              {[Rocket, Sparkles, Shield, Clock].map((Icon, i) => (
                <div key={i} className="glass rounded-2xl flex flex-col items-center justify-center p-6 animate-float" style={{ animationDelay: `${i * 0.4}s` }}>
                  <Icon className="h-8 w-8 text-primary mb-2" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="inline-flex px-3 py-1 rounded-full glass text-xs font-medium text-primary mb-4">About us</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Spidermen Web Design</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Spidermen Web Design is a modern digital agency specializing in website development, AI-powered applications, eCommerce solutions, CRM systems, HRM portals, POS software, and custom business automation.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our mission is to help businesses build powerful digital experiences that increase growth, efficiency, and customer engagement.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Award-winning design team",
              "Global remote delivery",
              "Enterprise-grade security",
              "Transparent communication",
            ].map((p) => (
              <div key={p} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{p}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };
  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 opacity-60" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 40%, oklch(0.56 0.21 265 / 0.15), transparent 70%)" }} />
      <div className="mx-auto max-w-7xl px-6 relative">
        <SectionHeading eyebrow="Get in touch" title="Let's Build Something Amazing" sub="Tell us about your project. We'll get back within 24 hours." />
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail, label: "Email", value: "hello@spidermenwebdesign.com" },
              { icon: Phone, label: "Phone", value: "+1 (555) 000-1234" },
              { icon: MapPin, label: "Location", value: "Global — Remote first" },
            ].map((c) => (
              <div key={c.label} className="card-elevated rounded-2xl p-5 flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{c.label}</div>
                  <div className="text-sm font-semibold">{c.value}</div>
                </div>
              </div>
            ))}
            <div className="card-elevated rounded-2xl p-5">
              <div className="text-xs text-muted-foreground mb-3">Follow us</div>
              <div className="flex gap-3">
                {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                  <a key={i} href="#" className="h-10 w-10 rounded-xl flex items-center justify-center btn-ghost">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 card-elevated rounded-3xl p-8 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Name" name="name" required />
              <Input label="Email" name="email" type="email" required />
              <Input label="Phone" name="phone" />
              <Input label="Company" name="company" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Service Required</label>
              <select className="w-full bg-white/5 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors">
                {SERVICES.map((s) => <option key={s.title} className="bg-background">{s.title}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Message</label>
              <textarea rows={5} required className="w-full bg-white/5 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold btn-primary">
              {sent ? "Sent — we'll be in touch!" : <>Send Inquiry <Send className="h-4 w-4" /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Input({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs text-muted-foreground mb-1.5 block">{label}{required && " *"}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-white/5 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg mb-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: "var(--gradient-primary)" }}>
                <Sparkles className="h-5 w-5" />
              </span>
              <span>Spidermen Web Design</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-md">
              Modern websites, AI applications, and custom software that help businesses grow — built with craft and care.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground">Services</a></li>
              <li><a href="#technologies" className="hover:text-foreground">Technologies</a></li>
              <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground">Terms</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold mb-4">Follow</div>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-xl flex items-center justify-center btn-ghost">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© 2026 Spidermen Web Design. All Rights Reserved.</div>
          <div>Crafted with precision and purpose.</div>
        </div>
      </div>
    </footer>
  );
}

function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full flex items-center justify-center btn-primary transition-all ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <Technologies />
        <WhyUs />
        <Portfolio />
        <Process />
        <Stats />
        <Testimonials />
        <FAQSection />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}
