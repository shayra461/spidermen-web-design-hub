import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTASection({
  title = "Ready to build something great?",
  subtitle = "Book a free consultation. We'll map out a plan tailored to your business goals.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="py-20 md:py-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-foreground text-background p-10 md:p-16">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/40 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
              <p className="mt-4 text-white/70 max-w-lg">{subtitle}</p>
            </div>
            <div className="flex md:justify-end gap-3 flex-wrap">
              <Link to="/contact" className="btn-primary">
                Get Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border border-white/20 text-white hover:bg-white/10 transition-colors">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
