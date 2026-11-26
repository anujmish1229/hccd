import { Link } from "react-router";
import { donation } from "@/lib/supporters";

const DIWALI_SITE = "https://diwalifestdurham.netlify.app/";

const columns: { title: string; links: { label: string; to?: string; href?: string }[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Home", to: "/" },
      { label: "About HCCD", to: "/about" },
      { label: "Our Team", to: "/team" },
      { label: "Events", to: "/events" },
      { label: "Partners", to: "/partners" },
      { label: "Sponsors", to: "/sponsors" },
    ],
  },
  {
    title: "Get involved",
    links: [
      { label: "Join HCCD", to: "/join" },
      { label: "Donate", to: "/donate" },
      { label: "Contact us", to: "/contact" },
      { label: "Durham Diwali Festival ↗", href: DIWALI_SITE },
    ],
  },
  {
    title: "Follow",
    links: [
      { label: "Instagram ↗", href: "https://www.instagram.com/hinducommunitycentre/" },
      { label: "Facebook ↗", href: "https://www.facebook.com/share/1HjovQc5h3/" },
      { label: "Eventbrite ↗", href: "https://www.eventbrite.com/o/hindu-community-centre-of-durham-hccd-114637567781" },
    ],
  },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-night text-cream relative border-t-4 border-saffron">
      <div className="container mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-8 gap-y-12">
          <div className="col-span-2 md:col-span-4">
            <p className="font-display text-3xl sm:text-4xl leading-tight text-cream">
              Vasudhaiva Kutumbakam.
              <span className="block italic text-gold">The world is one family.</span>
            </p>
            <div className="mt-8 font-body text-sm text-cream/70 space-y-1">
              <p>Ajax, Ontario</p>
              <a href="mailto:info@hccd.ca" className="block text-cream hover:text-gold transition-colors">
                info@hccd.ca
              </a>
              <p className="text-cream/50 pt-2">
                e-Transfer donations: <span className="text-cream/80">{donation.etransferEmail}</span>
              </p>
            </div>
          </div>

          {columns.map((col, i) => (
            <div key={col.title} className={i === 0 ? "md:col-span-2 md:col-start-7" : "md:col-span-2"}>
              <p className="font-body text-xs font-semibold text-gold mb-4">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.to ? (
                      <Link to={l.to} className="font-body text-sm text-cream/80 hover:text-cream hover:underline underline-offset-4">
                        {l.label}
                      </Link>
                    ) : (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-sm text-cream/80 hover:text-cream hover:underline underline-offset-4"
                      >
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Wordmark */}
      <div className="container mx-auto px-6 pb-8" aria-hidden>
        <p className="font-display font-bold leading-[0.95] tracking-tight select-none border-t border-cream/15 pt-8 text-[clamp(2.5rem,6.1vw,5.6rem)] lg:whitespace-nowrap">
          <span className="text-cream">Hindu Community </span>
          <span className="text-gold italic">Centre of Durham</span>
        </p>
      </div>

      <div className="border-t border-cream/10">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row gap-3 sm:items-center justify-between font-body text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Hindu Community Centre of Durham. A non-profit serving Durham Region.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://anujmishra.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/35 hover:text-cream/70 transition-colors"
            >
              Site by Anuj Mishra
            </a>
            <button onClick={scrollToTop} className="text-cream/70 hover:text-gold transition-colors">
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
