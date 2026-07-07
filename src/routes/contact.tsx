import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Mail, Phone, MapPin, Clock, Send, Twitter, Linkedin, Github, Instagram } from "lucide-react";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Spidermen Web Design" },
      { name: "description", content: "Get in touch with Spidermen Web Design. Free consultations, project quotes and partnership inquiries." },
      { property: "og:title", content: "Contact — Spidermen Web Design" },
      { property: "og:description", content: "Let's build something amazing. Free consultation, 24-hour response." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const SERVICES = [
  "Custom Website Development", "AI Development", "Business Automation",
  "Shopify Development", "WordPress Development", "Squarespace Development", "Wix Development",
  "CRM Development", "HRM Systems", "POS Systems", "ERP Development", "SaaS Development",
  "Mobile App Development", "UI/UX Design", "Maintenance", "SEO Optimization",
  "Speed Optimization", "API Integrations", "Cloud Solutions", "Other",
];

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something amazing."
        subtitle="Tell us about your project. We'll get back within 24 hours with next steps."
      />

      <section className="pb-16 md:pb-24">
        <div className="container-page grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail, label: "Email", value: "hello@spidermenwebdesign.com" },
              { icon: Phone, label: "Phone", value: "+1 (555) 000-1234" },
              { icon: MapPin, label: "Office", value: "Global — Remote first" },
              { icon: Clock, label: "Hours", value: "Mon–Fri · 9:00 – 18:00 (Local)" },
            ].map((c) => (
              <div key={c.label} className="card-lift rounded-2xl p-5 flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl grid place-items-center bg-primary-soft text-primary shrink-0">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="mt-1 text-sm font-semibold break-words">{c.value}</div>
                </div>
              </div>
            ))}

            <div className="card-lift rounded-2xl p-5">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Follow us</div>
              <div className="flex gap-2">
                {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="h-9 w-9 rounded-full grid place-items-center border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors" aria-label="Social">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-border aspect-[4/3] bg-surface">
              <iframe
                title="Office location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.24%2C51.45%2C0.02%2C51.55&layer=mapnik"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="lg:col-span-3 rounded-3xl border border-border bg-white p-6 md:p-8 space-y-4 shadow-sm">
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" />
              <Field label="Company" name="company" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-1.5 block">Service Required</label>
              <select className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors">
                {SERVICES.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-1.5 block">Budget (optional)</label>
              <select className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors">
                {["Under $5k", "$5k – $15k", "$15k – $50k", "$50k+"].map((b) => <option key={b}>{b}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-1.5 block">Project details</label>
              <textarea
                rows={5}
                required
                placeholder="Tell us what you're building, timelines and any references..."
                className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <button type="submit" className="w-full btn-primary justify-center">
              {sent ? "Sent — we'll be in touch!" : <>Send Inquiry <Send className="h-4 w-4" /></>}
            </button>
            <p className="text-xs text-muted-foreground text-center">By submitting, you agree to our privacy policy.</p>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground mb-1.5 block">{label}{required && " *"}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-white border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}
