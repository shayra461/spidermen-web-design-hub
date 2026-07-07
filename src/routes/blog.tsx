import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Insights on Web, AI & Product | Spidermen" },
      { name: "description", content: "Articles on modern web development, AI, product strategy, SEO and building software that scales." },
      { property: "og:title", content: "Blog — Spidermen Web Design" },
      { property: "og:description", content: "Insights on web, AI and product from the Spidermen team." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const POSTS = [
  { title: "Why every SaaS needs an AI copilot in 2026", cat: "AI", date: "Jun 24, 2026", read: "8 min", excerpt: "Copilots aren't a feature anymore — they're table stakes. Here's how we architect one that ships.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1000&q=80&auto=format&fit=crop" },
  { title: "The complete guide to Core Web Vitals in 2026", cat: "Performance", date: "Jun 12, 2026", read: "12 min", excerpt: "A field-tested playbook for hitting green scores without rewriting your app.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=80&auto=format&fit=crop" },
  { title: "Design systems that scale from 1 to 100 pages", cat: "Design", date: "May 30, 2026", read: "10 min", excerpt: "Tokens, primitives, and the small decisions that keep design systems from collapsing.", img: "https://images.unsplash.com/photo-1561070791-2526d30994b8?w=1000&q=80&auto=format&fit=crop" },
  { title: "Choosing between Shopify and custom eCommerce", cat: "eCommerce", date: "May 18, 2026", read: "7 min", excerpt: "The honest tradeoffs — and the moment it makes sense to leave Shopify behind.", img: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1000&q=80&auto=format&fit=crop" },
  { title: "Building an internal CRM without falling into feature creep", cat: "Product", date: "Apr 29, 2026", read: "9 min", excerpt: "How we scope custom CRMs to ship in weeks — and stay useful for years.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=80&auto=format&fit=crop" },
  { title: "SEO for JavaScript apps: what actually works", cat: "SEO", date: "Apr 10, 2026", read: "11 min", excerpt: "SSR, structured data, and the myths about JS SEO you can safely ignore.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80&auto=format&fit=crop" },
];

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights on web, AI and product."
        subtitle="Field notes from the team — practical, opinionated, and free of fluff."
      />

      <section className="pb-16 md:pb-24">
        <div className="container-page grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((p) => (
            <article key={p.title} className="card-lift rounded-2xl overflow-hidden bg-white group">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="text-xs text-primary uppercase tracking-widest font-semibold">{p.cat}</div>
                <h2 className="mt-2 text-lg font-semibold leading-snug group-hover:text-primary transition-colors">{p.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {p.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {p.read}</span>
                </div>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  Read article <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection title="Want more insights?" subtitle="Subscribe to our newsletter for monthly deep-dives and case studies." />
    </>
  );
}
