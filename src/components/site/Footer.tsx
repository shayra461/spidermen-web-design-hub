import { Link } from "@tanstack/react-router";
import { Twitter, Linkedin, Github, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logoAsset from "@/assets/spidermen-logo-full.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-24">
      <div className="container-page py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="mb-5">
            <img src={logoAsset.url} alt="Spidermen Web Design" className="h-20 w-auto object-contain" />
          </div>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            We build high-performance websites, AI applications, and custom business software for companies worldwide.
          </p>
          <div className="flex gap-2 mt-6">
            {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors" aria-label="Social link">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-sm font-semibold mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
            <li><Link to="/process" className="hover:text-foreground">Process</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-sm font-semibold mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/technologies" className="hover:text-foreground">Technologies</Link></li>
            <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-sm font-semibold mb-4">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-4">Insights on web, AI and product delivered monthly.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="flex-1 min-w-0 px-4 py-2.5 rounded-full border border-border bg-white text-sm focus:outline-none focus:border-primary"
            />
            <button type="submit" className="btn-primary shrink-0">Subscribe</button>
          </form>
          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary shrink-0" /> hello@spidermenwebdesign.com</div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary shrink-0" /> +1 (555) 000-1234</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary shrink-0" /> Global — Remote first</div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Spidermen Web Design. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
