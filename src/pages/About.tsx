import { Link } from "react-router";
import PageHeader from "@/components/PageHeader";
import volunteers from "@/assets/volunteers.jpg";
import garba from "@/assets/photo-garba.jpg";
import seniorsNiagara from "@/assets/photo-seniors-niagara.jpg";
import yogaDay from "@/assets/photo-yoga-day.jpg";
import flagRaising from "@/assets/photo-flag-raising.jpg";
import { useEvents } from "@/lib/useEvents";
import { impactFacts, FIRST_EVENT } from "@/lib/impact";
import { partners } from "@/lib/supporters";

const values = [
  { title: "Dharma", desc: "Upholding righteous values and ethical living in our community." },
  { title: "Seva", desc: "Selfless service to our neighbours and the wider Durham community." },
  { title: "Vidya", desc: "Sharing knowledge of Hindu culture, language and traditions." },
  { title: "Bhakti", desc: "Devotion through celebration of festivals and sacred traditions." },
  { title: "Vasudhaiva", desc: "Embracing all people as members of one global family." },
  { title: "Sanskriti", desc: "Preserving the rich tapestry of Indian art, music and dance." },
];

/** What HCCD actually does, each tied to events on the calendar. */
const activities = [
  {
    title: "Festivals",
    desc: "Diwali, Navratri Garba and Ganesh Visarjan, celebrated with music, dance and devotion.",
    image: garba,
    alt: "Families dancing Garba",
    link: "/events?event=navratri-garba-night",
  },
  {
    title: "Seniors' trips",
    desc: "Day trips for our elders, like the chartered bus to Niagara Falls with stops at temples across the GTA.",
    image: seniorsNiagara,
    alt: "Seniors at Niagara Falls",
    link: "/events?event=trip-to-niagara-falls-for-seniors",
  },
  {
    title: "Wellness",
    desc: "Yoga, sports and free food at our first International Yoga Day, held with Hindu Swayamsevak Sangh.",
    image: yogaDay,
    alt: "Group photo after International Yoga Day",
    link: "/events?event=international-yoga-day-celebration",
  },
  {
    title: "Heritage and service",
    desc: "An Independence Day flag raising in Ajax, a Rangoli workshop with Pickering Public Library and our holiday food and gift drive.",
    image: flagRaising,
    alt: "Community members with Indian and Canadian flags",
    link: "/events?event=indian-independence-day-flag-raising",
  },
];

export default function About() {
  const { loaded, past } = useEvents();

  return (
    <main className="pt-16">
      <PageHeader
        title={<>About <span className="text-saffron">HCCD</span></>}
        image={volunteers}
        imageAlt="HCCD volunteers with a banner beside a bus"
      >
        The Hindu Community Centre of Durham (HCCD) is a non-profit organization serving the Hindu community of
        Durham Region, and everyone who wants to celebrate with us.
      </PageHeader>

      {/* ── Story ───────────────────────────────────── */}
      <section className="bg-cream">
        <div className="container mx-auto px-6 py-20 grid lg:grid-cols-12 gap-12">
          <h2 className="lg:col-span-4 font-display text-5xl font-bold text-foreground leading-none">Our story</h2>
          <div className="lg:col-span-7 space-y-5 font-body text-lg text-foreground/80 leading-relaxed">
            <p>
              HCCD was founded to create a welcoming home for the Hindu community in Durham, built on the
              belief in the ancient Sanskrit phrase <em className="text-saffron-dark">Vasudhaiva Kutumbakam</em>:
              the world is one family.
            </p>
            <p>
              Since our first event in {FIRST_EVENT}, we have grown into a community of families, students,
              professionals and elders who share a deep connection to Indian heritage and culture.
            </p>
            <p>
              Whether you are a long-time practitioner of Hindu traditions or simply curious about Indian culture,
              HCCD extends an open invitation to explore, connect and grow together.
            </p>
          </div>
        </div>
      </section>

      {/* ── What we do ──────────────────────────────── */}
      <section className="bg-cream-dark">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <h2 className="font-display text-5xl font-bold text-foreground leading-none">What we do</h2>
            <Link to="/events" className="font-body font-semibold text-saffron-dark hover:underline underline-offset-4">
              See every event →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((a) => (
              <Link key={a.title} to={a.link} className="group block">
                <div className="overflow-hidden rounded-md mb-4">
                  <img
                    src={a.image}
                    alt={a.alt}
                    loading="lazy"
                    className="w-full aspect-4/3 object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground group-hover:text-saffron-dark transition-colors">
                  {a.title}
                </h3>
                <p className="font-body text-sm text-foreground/70 leading-relaxed mt-1">{a.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────── */}
      <section className="bg-cream">
        <div className="container mx-auto px-6 py-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-5xl font-bold text-foreground leading-none mb-4">Our values</h2>
            <p className="font-body text-foreground/70 max-w-xs">Six Sanskrit ideas that guide how we plan, serve and celebrate.</p>
          </div>
          <dl className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10">
            {values.map((v, i) => (
              <div key={v.title} className="grid grid-cols-[2.5rem_1fr] py-5 border-t border-border">
                <span className="font-body text-sm font-semibold text-saffron pt-1.5">0{i + 1}</span>
                <div>
                  <dt className="font-display text-2xl font-semibold text-foreground">{v.title}</dt>
                  <dd className="font-body text-sm text-foreground/70 leading-relaxed mt-1">{v.desc}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Impact ──────────────────────────────────── */}
      <section className="bg-maroon text-cream">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <h2 className="font-display text-5xl sm:text-6xl font-bold leading-none">HCCD so far</h2>
            <p className="font-body text-cream/70 max-w-sm">
              Recognized by the {partners.map((p) => p.name).join(" and the ")}, and supported by local sponsors.
            </p>
          </div>
          <dl className="grid grid-cols-2 lg:grid-cols-4 border-t border-cream/20">
            <div className="pt-6 pr-6 lg:border-r border-cream/20">
              <dt className="font-display text-6xl font-bold text-gold leading-none">{loaded ? past.length : "–"}</dt>
              <dd className="font-body text-sm text-cream/75 mt-3 max-w-[14rem]">community events since {FIRST_EVENT}</dd>
            </div>
            {impactFacts.map((f, i) => (
              <div key={f.value} className={`pt-6 pr-6 lg:pl-6 ${i < impactFacts.length - 1 ? "lg:border-r border-cream/20" : ""}`}>
                <dt className="font-display text-6xl font-bold text-gold leading-none">{f.value}</dt>
                <dd className="font-body text-sm text-cream/75 mt-3 max-w-[14rem]">{f.label}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-14 flex flex-wrap gap-3">
            <Link to="/join" className="font-body font-semibold bg-gold text-night px-7 py-3.5 rounded-md hover:bg-gold-light transition-colors">
              Join HCCD
            </Link>
            <Link to="/team" className="font-body font-semibold border-2 border-cream/40 text-cream px-7 py-3 rounded-md hover:border-cream transition-colors">
              Meet the team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
