import volunteers from "@/assets/volunteers.jpg";
import mandala from "@/assets/mandala.png";

const values = [
  { icon: "🪔", title: "Dharma", desc: "Upholding righteous values and ethical living in our community." },
  { icon: "🤝", title: "Seva", desc: "Selfless service to our neighbors and the wider Durham community." },
  { icon: "📚", title: "Vidya", desc: "Sharing knowledge of Hindu culture, language, and traditions." },
  { icon: "🌺", title: "Bhakti", desc: "Devotion through celebration of festivals and sacred traditions." },
  { icon: "🌏", title: "Vasudhaiva", desc: "Embracing all people as members of one global family." },
  { icon: "🎭", title: "Sanskriti", desc: "Preserving the rich tapestry of Indian art, music, and dance." },
];

const impacts = [
  { number: "50+", label: "Families Served" },
  { number: "5+", label: "Events per Year" },
  { number: "1st", label: "Year Strong" },
  { number: "20+", label: "Active Volunteers" },
];

export default function About() {
  return (
    <main className="pt-20">
      {/* ── Page Header ─────────────────────────────── */}
      <section className="bg-cream-dark py-20 relative overflow-hidden">
        <img src={mandala} alt="" aria-hidden className="absolute right-10 top-1/2 -translate-y-1/2 w-72 opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <p className="font-body text-xs uppercase tracking-widest text-saffron mb-3">Who We Are</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-foreground mb-4">
            About <span className="text-saffron">HCCD</span>
          </h1>
          <div className="w-16 h-1 rounded bg-gold mb-6" />
          <p className="font-body text-lg text-muted-foreground max-w-2xl leading-relaxed">
            The Hindu Community Center of Durham (HCCD) is a non-profit organization serving the
            Hindu community of the Durham Region.
          </p>
        </div>
      </section>

      {/* ── Introduction ────────────────────────────── */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-semibold text-foreground mb-6">
                Our Story
              </h2>
              <p className="font-body text-foreground/80 leading-relaxed mb-5">
                Founded with a vision to create a welcoming home for the Hindu community in Durham,
                HCCD was born from the simple belief expressed in the ancient Sanskrit phrase
                <em className="text-saffron"> "Vasudhaiva Kutumbakam"</em> — the world is one family.
              </p>
              <p className="font-body text-foreground/80 leading-relaxed mb-5">
                We are a growing community of families, students, professionals, and elders who share
                a deep connection to Indian heritage and culture. Our center serves as a gathering
                place for celebration, learning, and service.
              </p>
              <p className="font-body text-foreground/80 leading-relaxed">
                Whether you are a long-time practitioner of Hindu traditions or simply curious about
                Indian culture, HCCD extends an open invitation to all who wish to explore, connect,
                and grow together.
              </p>
            </div>

            <div className="relative">
              <img
                src={volunteers}
                alt="HCCD community gathering"
                className="rounded-2xl shadow-[0_8px_40px_-8px_hsl(25_40%_12%/0.2)] w-full object-cover h-80"
              />
              <div className="absolute -bottom-6 -left-6 bg-saffron text-primary-foreground rounded-xl p-5 shadow-warm">
                <p className="font-display text-3xl font-bold">1st</p>
                <p className="font-body text-sm text-primary-foreground/80">Year Serving Durham</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Do ──────────────────────────────── */}
      <section className="py-20 bg-cream-dark relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-body text-xs uppercase tracking-widest text-saffron mb-3">Our Activities</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground mb-4">
              What We Do
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              From festive celebrations to educational programs, HCCD brings people together in meaningful ways.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Festival Celebrations", desc: "We celebrate major Hindu festivals including Diwali, Holi, Navratri, Ganesh Chaturthi, and more — bringing the joy of tradition to Durham.", icon: "🎉" },
              { title: "Cultural Education", desc: "Workshops on Indian classical music, dance (Bharatnatyam, Garba), Sanskrit, and Hindu philosophy for all ages.", icon: "🎶" },
              { title: "Yoga & Wellness", desc: "Regular yoga and meditation sessions rooted in the ancient wisdom of Indian tradition, open to all experience levels.", icon: "🧘" },
              { title: "Youth Programs", desc: "Engaging programs that help the younger generation connect with their roots through storytelling, arts, and cultural activities.", icon: "👦" },
              { title: "Community Service", desc: "Partnering with local organizations to serve the broader Durham community through food drives, volunteering, and outreach.", icon: "❤️" },
              { title: "Religious Gatherings", desc: "Regular pujas, bhajan sessions, and spiritual discussions that nurture the inner lives of our community members.", icon: "🙏" },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-warm hover:border-saffron/30 transition-all duration-300">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Values ──────────────────────────────── */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-body text-xs uppercase tracking-widest text-saffron mb-3">Guiding Principles</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {values.map((v) => (
              <div key={v.title} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-saffron/10 border border-saffron/20 flex items-center justify-center mx-auto mb-3 text-2xl group-hover:bg-saffron/20 transition-colors">
                  {v.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{v.title}</h3>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact ──────────────────────────────────── */}
      <section className="bg-brown py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl text-cream font-semibold">Our Impact</h2>
            <p className="font-body text-cream/60 mt-2">Growing stronger every year</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {impacts.map((i) => (
              <div key={i.label}>
                <p className="font-display text-5xl font-bold text-gold">{i.number}</p>
                <p className="font-body text-sm text-cream/60 mt-1 uppercase tracking-wide">{i.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
