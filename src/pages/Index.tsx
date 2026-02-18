import { Link } from "react-router-dom";
import heroTemple from "@/assets/hero-temple.jpg";
import community from "@/assets/community.jpg";
import mandala from "@/assets/mandala.png";

const overviewCards = [
  {
    title: "About Us",
    description: "A vibrant community rooted in Hindu values, celebrating culture, spirituality, and togetherness.",
    link: "/about",
    icon: "🪔",
  },
  {
    title: "Our Team",
    description: "Led by passionate founders and board members dedicated to building an inclusive community for all.",
    link: "/team",
    icon: "🤝",
  },
  {
    title: "Get in Touch",
    description: "Have questions or want to collaborate? Reach out to us anytime, we'd love to hear from you.",
    link: "/contact",
    icon: "✉️",
  },
  {
    title: "Join HCCD",
    description: "Become part of our family. Volunteer, participate, and help us grow our community in Durham.",
    link: "/join",
    icon: "🌸",
  },
];

export default function Index() {
  return (
    <main id="top">
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center hero-pattern overflow-hidden">
        {/* Subtle background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          aria-hidden
        />

        <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div className="animate-fade-in-left">
              {/* Devanagari ornament */}
              <span className="inline-block text-saffron text-3xl mb-4 opacity-80">ॐ</span>

              <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl font-bold text-foreground leading-[1.08] mb-4">
                Hindu Community
                <br />
                <span className="text-saffron">Center of Durham</span>
              </h1>

              <p className="font-display italic text-2xl sm:text-3xl text-muted-foreground mb-2">
                Vasudhaiva Kutumbakam
              </p>
              <p className="font-body text-sm text-gold tracking-widest uppercase mb-8">
                - The World Is One Family
              </p>

              <p className="font-body text-lg text-foreground/75 leading-relaxed mb-10 max-w-lg">
                Celebrating the richness of Hindu heritage, fostering community bonds, and
                creating a welcoming home for all.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/join"
                  className="inline-flex items-center gap-2 bg-saffron text-primary-foreground font-body font-semibold px-8 py-3.5 rounded-full hover:bg-saffron-dark transition-all duration-200 shadow-warm hover:shadow-lg"
                >
                  Join Our Community
                </Link>
                <Link
                  to="/events"
                  className="inline-flex items-center gap-2 border-2 border-saffron text-saffron font-body font-semibold px-8 py-3.5 rounded-full hover:bg-saffron/10 transition-all duration-200"
                >
                  Upcoming Events
                </Link>
              </div>
            </div>

            {/* Right: image with translucent frame */}
            <div className="relative animate-fade-in flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 rounded-3xl border-2 border-saffron/20 rotate-2" />
                <div className="absolute -inset-4 rounded-3xl border border-gold/30 -rotate-2" />
                <img
                  src={heroTemple}
                  alt="Hindu temple representing HCCD community"
                  className="relative w-full max-w-md lg:max-w-lg rounded-2xl object-cover shadow-[0_20px_60px_-10px_hsl(25_40%_12%/0.3)]"
                  style={{ height: "440px" }}
                />
                {/* Translucent badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-brown/60 backdrop-blur-sm rounded-xl px-5 py-3 border border-cream/10">
                  <p className="font-display text-cream/90 text-sm italic">
                    "वसुधैव कुटुम्बकम्"
                  </p>
                  <p className="font-body text-gold/80 text-xs mt-0.5">The World Is One Family</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────── */}
      <div className="lotus-divider py-6 bg-cream-dark text-2xl tracking-[1rem]">
        ✦ ✦ ✦
      </div>

      {/* ── Overview Cards ───────────────────────────── */}
      <section className="bg-cream py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-body text-xs uppercase tracking-widest text-saffron mb-3">What We Offer</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground mb-4">
              A Community Built on <em>Seva</em> & Belonging
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {overviewCards.map((card) => (
              <Link
                key={card.title}
                to={card.link}
                className="group bg-card rounded-2xl p-6 border border-border hover:border-saffron/40 shadow-card hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-3xl mb-4 block">{card.icon}</span>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-saffron transition-colors">
                  {card.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
                <span className="inline-block mt-4 text-xs font-body font-semibold text-saffron uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Community highlight ──────────────────────── */}
      <section className="relative overflow-hidden">
        <img
          src={community}
          alt="HCCD community celebration"
          className="w-full h-80 sm:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brown/80 via-brown/50 to-transparent flex items-center">
          <div className="container mx-auto px-6">
            <p className="font-body text-xs uppercase tracking-widest text-gold mb-3">Durham, NC</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-cream max-w-lg leading-tight">
              Celebrating Culture,<br />Building Community
            </h2>
            <p className="font-body text-cream/75 mt-4 max-w-md">
              Join hundreds of families across the Triangle area who celebrate festivals, learn yoga,
              and give back through HCCD.
            </p>
            <Link
              to="/events"
              className="inline-flex mt-6 items-center gap-2 bg-gold text-brown font-body font-semibold px-7 py-3 rounded-full hover:bg-gold-light transition-colors"
            >
              See Upcoming Events
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
