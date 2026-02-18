import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import mandala from "@/assets/mandala.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Our Team", to: "/team" },
  { label: "Events", to: "/events" },
  { label: "Contact", to: "/contact" },
  { label: "Join", to: "/join" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 navbar-glass ${
        scrolled ? "shadow-warm" : ""
      }`}
    >
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo + Title */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={mandala}
            alt="HCCD Mandala Logo"
            className="w-10 h-10 object-contain transition-transform duration-300 group-hover:rotate-12"
          />
          <div className="leading-tight">
            <p className="font-display text-lg font-semibold text-saffron leading-none">HCCD</p>
            <p className="font-body text-[10px] text-brown-mid tracking-wide uppercase leading-tight hidden sm:block">
              Hindu Community Center of Durham
            </p>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                  active
                    ? "bg-saffron text-primary-foreground"
                    : "text-foreground hover:bg-saffron/10 hover:text-saffron"
                } ${link.label === "Join" ? "ml-2 bg-saffron text-primary-foreground hover:bg-saffron-dark hover:text-primary-foreground shadow-warm" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-lg text-foreground hover:bg-saffron/10"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden navbar-glass border-t border-border">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-body text-sm font-medium px-4 py-3 rounded-lg transition-all duration-200 ${
                    active
                      ? "bg-saffron text-primary-foreground"
                      : "text-foreground hover:bg-saffron/10 hover:text-saffron"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
