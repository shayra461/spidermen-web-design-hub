import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/technologies")({
  head: () => ({
    meta: [
      { title: "Technologies — Spidermen Web Design" },
      { name: "description", content: "The full stack we work with: React, Next.js, Laravel, Node, Python, OpenAI, Shopify, WordPress, AWS, Vercel and more." },
      { property: "og:title", content: "Our Technology Stack — Spidermen Web Design" },
      { property: "og:description", content: "Modern, battle-tested tools we use to build reliable products." },
      { property: "og:url", content: "/technologies" },
    ],
    links: [{ rel: "canonical", href: "/technologies" }],
  }),
  component: Technologies,
});

const CATEGORIES = [
  {
    name: "Frontend",
    items: [
      { name: "React", desc: "Interactive UI library powering our web apps." },
      { name: "Next.js", desc: "SSR + SSG for fast, SEO-friendly sites." },
      { name: "Tailwind CSS", desc: "Utility-first styling for design systems." },
      { name: "TypeScript", desc: "Typed JavaScript for safer refactors." },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", desc: "Fast JavaScript runtime for APIs." },
      { name: "Laravel", desc: "PHP framework for elegant backends." },
      { name: "PHP", desc: "Battle-tested language for CMS and stores." },
      { name: "Python", desc: "Data, scripting and AI workflows." },
    ],
  },
  {
    name: "Databases",
    items: [
      { name: "MongoDB", desc: "Flexible document database." },
      { name: "MySQL", desc: "Reliable relational database." },
      { name: "PostgreSQL", desc: "Powerful open-source relational DB." },
      { name: "Redis", desc: "In-memory cache and queues." },
    ],
  },
  {
    name: "CMS",
    items: [
      { name: "WordPress", desc: "Editorial-friendly CMS at scale." },
      { name: "Shopify", desc: "Leading commerce platform." },
      { name: "Squarespace", desc: "Beautiful, easy sites." },
      { name: "Wix Studio", desc: "Rapid-launch business sites." },
    ],
  },
  {
    name: "Cloud",
    items: [
      { name: "AWS", desc: "Enterprise cloud infrastructure." },
      { name: "Vercel", desc: "Edge deploys for modern frontends." },
      { name: "Cloudflare", desc: "CDN, DNS, and workers." },
      { name: "Firebase", desc: "Realtime backend for MVPs." },
    ],
  },
  {
    name: "AI",
    items: [
      { name: "OpenAI", desc: "GPT-4/5 and embeddings." },
      { name: "ChatGPT", desc: "Custom assistants and copilots." },
      { name: "Anthropic", desc: "Claude for reasoning workflows." },
      { name: "LangChain", desc: "RAG and agent frameworks." },
    ],
  },
  {
    name: "DevOps",
    items: [
      { name: "GitHub", desc: "Version control and CI." },
      { name: "Docker", desc: "Containerized deployments." },
      { name: "GitHub Actions", desc: "Automated pipelines." },
      { name: "Terraform", desc: "Infrastructure as code." },
    ],
  },
  {
    name: "Ecommerce",
    items: [
      { name: "Shopify", desc: "Custom themes and apps." },
      { name: "WooCommerce", desc: "WordPress commerce." },
      { name: "Stripe", desc: "Payments and subscriptions." },
      { name: "Klaviyo", desc: "Lifecycle marketing." },
    ],
  },
  {
    name: "Frameworks",
    items: [
      { name: "Next.js", desc: "React meta-framework." },
      { name: "Nuxt", desc: "Vue meta-framework." },
      { name: "Remix", desc: "Web-standards React framework." },
      { name: "Astro", desc: "Content-first static sites." },
    ],
  },
  {
    name: "Tools",
    items: [
      { name: "Figma", desc: "Collaborative design." },
      { name: "Linear", desc: "Modern issue tracking." },
      { name: "Notion", desc: "Docs and knowledge base." },
      { name: "Slack", desc: "Client communication." },
    ],
  },
];

function Technologies() {
  return (
    <>
      <PageHero
        eyebrow="Technology stack"
        title="Modern tools. Timeless principles."
        subtitle="We choose the right technology for each project — never trend-chasing, always production-ready."
      />

      <section className="py-12 md:py-16 space-y-14">
        {CATEGORIES.map((cat) => (
          <div key={cat.name} className="container-page">
            <SectionHeading eyebrow={cat.name} title={`${cat.name} we work with`} align="left" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {cat.items.map((item) => (
                <div key={item.name} className="card-lift rounded-2xl p-6">
                  <div className="h-11 w-11 rounded-xl grid place-items-center bg-primary-soft text-primary font-display font-bold text-lg mb-4">
                    {item.name.charAt(0)}
                  </div>
                  <div className="font-semibold">{item.name}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <CTASection title="Have a stack preference?" subtitle="Tell us your goals and we'll recommend the best tools for the job." />
    </>
  );
}
