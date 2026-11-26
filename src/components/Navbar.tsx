import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import mandala from "@/assets/mandala.png";
import { cn } from "@/lib/utils";

type NavLeaf = { label: string; to: string; note?: string };
type NavGroup = { label: string; items: NavLeaf[] };
type NavItem = NavLeaf | NavGroup;

const DIWALI_SITE = "https://diwalifestdurham.netlify.app/";

const nav: NavItem[] = [
  {
    label: "About",
    items: [
      { label: "About HCCD", to: "/about", note: "Our story, values and what we do" },
      { label: "Our Team", to: "/team", note: "The volunteers behind HCCD" },
      { label: "Partners", to: "/partners", note: "City of Pickering and Town of Ajax" },
      { label: "Sponsors", to: "/sponsors", note: "Businesses who support our events" },
    ],
  },
  { label: "Events", to: "/events" },
  {
    label: "Get Involved",
    items: [
      { label: "Join HCCD", to: "/join", note: "Become a member or volunteer" },
      { label: "Donate", to: "/donate", note: "Give by Interac e-Transfer" },
      { label: "Contact Us", to: "/contact", note: "Questions, ideas and WhatsApp groups" },
    ],
  },
];

const isGroup = (item: NavItem): item is NavGroup => "items" in item;

function DesktopGroup({
  group,
  open,
  pinned,
  active,
  onHover,
  onToggle,
}: {
  group: NavGroup;
  open: boolean;
  pinned: boolean;
  active: boolean;
  onHover: (open: boolean) => void;
  onToggle: () => void;
}) {
  return (
    <div className="relative" onMouseEnter={() => onHover(true)} onMouseLeave={() => onHover(false)}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-haspopup="true"
        className={cn(
          "relative flex items-center gap-1 font-body text-[15px] font-medium px-3 py-5 transition-colors",
          active || open ? "text-saffron-dark" : "text-foreground/80 hover:text-foreground",
        )}
      >
        {group.label}
        <ChevronDown size={15} className={cn("transition-transform duration-200", open && "rotate-180")} />
        {active && <span className="absolute left-3 right-3 bottom-3 h-0.5 bg-saffron" />}
      </button>

      <div
        className={cn(
          "absolute left-0 top-full pt-1 transition-all duration-150",
          open ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-1 invisible",
        )}
      >
        <div
          className={cn(
            "w-80 bg-card border border-border rounded-lg shadow-[0_18px_40px_-12px_hsl(199_48%_12%/0.25)] overflow-hidden",
            pinned && "ring-1 ring-saffron/30",
          )}
        >
          <div className="h-1 bg-saffron" />
          <ul className="py-2">
            {group.items.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="group block px-5 py-3 hover:bg-cream-dark transition-colors">
                  <span className="block font-display text-xl font-semibold text-foreground group-hover:text-saffron-dark transition-colors">
                    {item.label}
                  </span>
                  {item.note && <span className="block font-body text-xs text-muted-foreground mt-0.5">{item.note}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close everything on navigation.
  const [lastPath, setLastPath] = useState(location.pathname);
  if (lastPath !== location.pathname) {
    setLastPath(location.pathname);
    setMobileOpen(false);
    setPinned(null);
    setHovered(null);
  }

  // A pinned menu closes on outside click or Escape.
  useEffect(() => {
    if (!pinned) return;
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setPinned(null);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPinned(null);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [pinned]);

  const groupActive = (g: NavGroup) => g.items.some((i) => i.to === location.pathname);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 navbar-glass transition-shadow duration-300",
        scrolled && "shadow-[0_6px_24px_-12px_hsl(199_48%_12%/0.25)]",
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={mandala}
            alt=""
            className="w-9 h-9 object-contain transition-transform duration-500 group-hover:rotate-45"
          />
          <span className="leading-none">
            <span className="block font-display text-2xl font-bold text-foreground tracking-tight">HCCD</span>
            <span className="hidden sm:block font-body text-[10px] text-muted-foreground tracking-wide mt-0.5">
              Hindu Community Centre of Durham
            </span>
          </span>
        </Link>

        <nav ref={navRef} className="hidden lg:flex items-center gap-1" aria-label="Main">
          {nav.map((item) =>
            isGroup(item) ? (
              <DesktopGroup
                key={item.label}
                group={item}
                open={pinned === item.label || (pinned === null && hovered === item.label)}
                pinned={pinned === item.label}
                active={groupActive(item)}
                onHover={(o) => setHovered(o ? item.label : null)}
                onToggle={() => setPinned((p) => (p === item.label ? null : item.label))}
              />
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative font-body text-[15px] font-medium px-3 py-5 transition-colors",
                  location.pathname === item.to ? "text-saffron-dark" : "text-foreground/80 hover:text-foreground",
                )}
              >
                {item.label}
                {location.pathname === item.to && <span className="absolute left-3 right-3 bottom-3 h-0.5 bg-saffron" />}
              </Link>
            ),
          )}

          <span className="w-px h-6 bg-border mx-3" aria-hidden />

          <a
            href={DIWALI_SITE}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[15px] font-medium text-maroon hover:text-maroon-light transition-colors px-2"
          >
            Diwali Fest ↗
          </a>
        </nav>

        <button
          className="lg:hidden p-2 -mr-2 text-foreground"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-cream max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="container mx-auto px-6 py-6 grid gap-6" aria-label="Mobile">
            <Link to="/" className="font-display text-2xl font-semibold text-foreground">
              Home
            </Link>
            {nav.map((item) =>
              isGroup(item) ? (
                <div key={item.label}>
                  <p className="font-body text-xs font-semibold text-muted-foreground mb-2">{item.label}</p>
                  <div className="grid gap-1 border-l-2 border-saffron/40 pl-4">
                    {item.items.map((leaf) => (
                      <Link
                        key={leaf.to}
                        to={leaf.to}
                        className={cn(
                          "font-display text-2xl font-semibold py-1",
                          location.pathname === leaf.to ? "text-saffron-dark" : "text-foreground",
                        )}
                      >
                        {leaf.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "font-display text-2xl font-semibold",
                    location.pathname === item.to ? "text-saffron-dark" : "text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="flex items-center gap-4 pt-2 border-t border-border">
              <a
                href={DIWALI_SITE}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm font-medium text-maroon"
              >
                Durham Diwali Festival ↗
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
