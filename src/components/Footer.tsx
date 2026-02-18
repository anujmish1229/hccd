import { ArrowUp, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-brown text-primary-foreground">
      {/* Top row */}
      <div className="container mx-auto px-6 py-8 flex items-start justify-between">
        {/* Social links */}
        <div className="flex flex-col gap-3">
          <p className="font-body text-xs uppercase tracking-widest text-gold/70 mb-1">Connect With Us</p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/hccd_durham/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors duration-200 font-body text-sm"
            >
              <Instagram size={18} />
              <span className="hidden sm:inline">Instagram</span>
            </a>
            <a
              href="https://www.eventbrite.com/o/hindu-community-centre-of-durham-hccd-114637567781"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Eventbrite"
              className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors duration-200 font-body text-sm"
            >
              {/* Eventbrite icon (custom SVG) */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.893 13.688H9.984v.008c.062 1.418 1.057 2.336 2.5 2.336 1.035 0 1.848-.426 2.324-1.188h2.906c-.664 2.094-2.555 3.375-5.25 3.375-3.313 0-5.586-2.227-5.586-5.484 0-3.211 2.273-5.484 5.531-5.484 3.313 0 5.508 2.36 5.508 5.484 0 .317-.023.624-.024.953zm-2.625-1.758c-.117-1.273-1.031-2.133-2.437-2.133-1.313 0-2.282.797-2.5 2.133h4.937z"/>
              </svg>
              <span className="hidden sm:inline">Eventbrite</span>
            </a>
            <a
              href="https://www.facebook.com/hccd.durham"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center gap-2 text-cream/80 hover:text-gold transition-colors duration-200 font-body text-sm"
            >
              <Facebook size={18} />
              <span className="hidden sm:inline">Facebook</span>
            </a>
          </div>
          <p className="font-body text-xs text-cream/40 mt-2">
            © {new Date().getFullYear()} HCCD · All rights reserved
          </p>
        </div>

        {/* Up arrow */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="p-3 rounded-full border border-cream/20 text-cream/70 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-200"
        >
          <ArrowUp size={20} />
        </button>
      </div>

      {/* Full-width org name */}
      <div className="py-6 px-6 overflow-hidden">
        <p
          className="font-display font-bold text-cream/15 text-center whitespace-nowrap select-none"
          style={{ fontSize: "clamp(2rem, 7vw, 6rem)", letterSpacing: "0.05em" }}
        >
          Hindu Community Center of Durham
        </p>
      </div>
    </footer>
  );
}
