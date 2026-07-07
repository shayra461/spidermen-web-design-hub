import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Services", to: "/services" as const },
  { label: "Technologies", to: "/technologies" as const },
  { label: "Portfolio", to: "/portfolio" as const },
  { label: "Process", to: "/process" as const },
  { label: "Blog", to: "/blog" as const },
  { label: "FAQ", to: "/faq" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-page flex items-center justify-between h-24 md:h-28">
        <Link to="/" className="flex items-center min-w-0" onClick={() => setOpen(false)} aria-label="Spidermen Web Design">
          <img src="/logo.svg" alt="Spidermen Web Design" className="h-22 md:h-26 w-auto object-contain py-1.5" />
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {NAV_LINKS.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "px-3 py-2 text-sm font-medium text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden md:inline-flex btn-primary">
            Get Free Quote <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden p-2 rounded-lg border border-border text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden bg-white border-t border-border">
          <div className="container-page py-6 flex flex-col gap-1">
            {NAV_LINKS.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted"
                activeProps={{ className: "px-3 py-3 text-sm font-medium text-primary bg-primary-soft rounded-lg" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-3 btn-primary justify-center">
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
