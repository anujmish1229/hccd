import { Link } from "react-router";
import heroDrone from "@/assets/hero-diwali-drone.jpg";
import garba from "@/assets/photo-garba.jpg";
import flagRaising from "@/assets/photo-flag-raising.jpg";
import seniorsNiagara from "@/assets/photo-seniors-niagara.jpg";
import yogaDay from "@/assets/photo-yoga-day.jpg";
import { type EventType, slugify, formatShortEventDate } from "@/lib/events";
import { useEvents } from "@/lib/useEvents";
import { impactFacts, FIRST_EVENT } from "@/lib/impact";
import { partners, sponsors } from "@/lib/supporters";

const toDate = (s: string) => new Date(`${s}T00:00:00`);

function DateBlock({ event }: { event: EventType }) {
  const d = toDate(event.date);
  return (
    <div className="w-20 shrink-0 text-center border-r border-border pr-5">
      <p className="font-body text-xs font-semibold text-saffron-dark uppercase">
        {d.toLocaleDateString("en-CA", { month: "short" })}
      </p>
      <p className="font-display text-5xl font-bold text-foreground leading-none">{d.getDate()}</p>
    </div>
  );
}

const community = [
  { src: garba, alt: "Families dancing Garba in traditional dress", caption: "Navratri Garba Night, October 2026", slug: "navratri-garba-night" },
  { src: flagRaising, alt: "Community members holding Indian and Canadian flags", caption: "Independence Day flag raising, Ajax", slug: "indian-independence-day-flag-raising" },
  { src: seniorsNiagara, alt: "Seniors walking by the gardens at Niagara Falls", caption: "Seniors' trip to Niagara Falls", slug: "trip-to-niagara-falls-for-seniors" },
  { src: yogaDay, alt: "Group photo on the grass after International Yoga Day", caption: "International Yoga Day, Paulynn Park", slug: "international-yoga-day-celebration" },
];

const ways = [
  { title: "Come to an event", text: "Festivals, trips and workshops across Ajax, Pickering and the rest of Durham Region.", to: "/events", cta: "See the calendar" },
  { title: "Join and volunteer", text: "Help plan, set up and run our events, or join one of our WhatsApp groups to stay in the loop.", to: "/join", cta: "Join HCCD" },
  { title: "Give", text: "Donations help cover the cost of our festivals, seniors' trips and community programs.", to: "/donate", cta: "Donate" },
];

export default function Index() {
  const { loaded, upcoming, past } = useEvents();
  const nextEvents = upcoming.slice(0, 3);

  return (
    <main id="top" className="pt-16">
      {/* ── Hero ─────────────────────────────────────── */}
      {/* The drone photo's own near-black sky is the section background, and its
          edges fade into it, so the Om glows out of the page with no frame. */}
      <section className="relative overflow-hidden bg-[#120b05] text-cream">
        <div className="relative h-72 sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[62%]" aria-hidden>
          <img src={heroDrone} alt="" className="hero-fade w-full h-full object-cover object-[44%_center]" />
        </div>
        <div className="hidden lg:block xl:hidden absolute inset-y-0 left-0 w-3/5 bg-linear-to-r from-[#120b05] via-[#120b05]/80 to-transparent" aria-hidden />

        <div className="relative container mx-auto px-6 pb-16 -mt-8 lg:mt-0 lg:py-28 lg:min-h-[600px] flex items-center">
          <div className="max-w-2xl animate-fade-in-left">
            <h1 className="font-display text-6xl sm:text-7xl xl:text-[5.5rem] font-bold leading-[0.92] tracking-tight mb-6">
              <span className="lg:whitespace-nowrap">Hindu Community</span>{" "}
              <span className="text-saffron lg:whitespace-nowrap">Centre of Durham</span>
            </h1>
            <p className="font-display italic text-2xl sm:text-3xl text-cream/75 mb-6">
              Vasudhaiva Kutumbakam: the world is one family.
            </p>
            <p className="font-body text-lg text-cream/70 leading-relaxed mb-10 max-w-lg">
              A non-profit celebrating Hindu heritage in Durham Region, with festivals, seniors' trips
              and community service that welcome everyone.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                to="/join"
                className="inline-flex items-center bg-saffron text-primary-foreground font-body font-semibold px-8 py-4 rounded-md hover:bg-saffron-light hover:text-night transition-colors"
              >
                Join our community
              </Link>
              <Link
                to="/events"
                className="font-body font-semibold text-cream underline underline-offset-[6px] decoration-gold decoration-2 hover:text-gold transition-colors"
              >
                Upcoming events →
              </Link>
            </div>
          </div>
        </div>

        <p className="relative lg:absolute lg:right-6 lg:bottom-6 container mx-auto lg:w-auto px-6 lg:px-0 pb-8 lg:pb-0 font-body text-sm text-cream/60 lg:text-right lg:max-w-xs">
          <span className="text-gold font-semibold">3,500+ people</span> watched Durham Region's first Diwali
          drone show, October 24, 2026
        </p>
      </section>

      {/* ── Coming up ────────────────────────────────── */}
      <section className="bg-cream-dark">
        <div className="container mx-auto px-6 py-16 sm:py-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <h2 className="font-display text-5xl font-bold text-foreground leading-none mb-4">Coming up</h2>
            <p className="font-body text-foreground/70 mb-6 max-w-sm">
              Everything on the HCCD calendar, from workshops at the library to the big festival nights.
            </p>
            <Link to="/events" className="font-body font-semibold text-saffron-dark hover:underline underline-offset-4">
              Full calendar →
            </Link>
          </div>
          <div className="lg:col-span-8">
            {loaded && nextEvents.length === 0 && (
              <p className="font-body text-foreground/70 border-t border-border pt-6">
                New events are being planned. Follow us on Instagram to hear first.
              </p>
            )}
            <ul className="divide-y divide-border border-y border-border">
              {nextEvents.map((event) => (
                <li key={event.name}>
                  <Link
                    to={`/events?event=${slugify(event.name)}`}
                    className="group flex items-center gap-5 py-6 hover:bg-cream/60 transition-colors"
                  >
                    <DateBlock event={event} />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-2xl sm:text-3xl font-semibold text-foreground group-hover:text-saffron-dark transition-colors leading-tight">
                        {event.name}
                      </h3>
                      <p className="font-body text-sm text-foreground/60 mt-1">
                        {event.endDate ? formatShortEventDate(event) : event.time}
                        {event.location && <span className="block sm:inline sm:before:content-['_/_']">{event.location}</span>}
                      </p>
                    </div>
                    <span className="hidden sm:block font-body text-2xl text-saffron group-hover:translate-x-1 transition-transform pr-2">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Diwali feature + impact ──────────────────── */}
      <section className="bg-night text-cream">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <h2 className="font-display text-5xl sm:text-6xl font-bold leading-[0.95] mb-6">
                Durham Region's first <span className="text-gold">Diwali drone show</span>
              </h2>
              <p className="font-body text-cream/75 leading-relaxed mb-8 max-w-md">
                On October 24, 2026, the Ajax–Durham Diwali Festival brought more than 3,500 people
                together for live performances and a drone show that lit up the night sky.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link
                  to="/events?event=ajax-durham-diwali-festival"
                  className="inline-flex items-center bg-gold text-night font-body font-semibold px-7 py-3.5 rounded-md hover:bg-gold-light transition-colors"
                >
                  Photos, videos and certificates
                </Link>
                <a
                  href="https://diwalifestdurham.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body font-semibold text-gold underline underline-offset-[6px] decoration-gold/40 hover:decoration-gold transition-colors"
                >
                  Festival site ↗
                </a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <video
                src="/event-videos/ajax-durham-diwali-festival/drone-show-crowd.mp4"
                poster="/event-videos/ajax-durham-diwali-festival/drone-show-crowd.jpg"
                controls
                playsInline
                preload="none"
                aria-label="Crowd watching the HCCD Diwali drone show"
                className="w-full aspect-video rounded-md bg-black ring-1 ring-cream/10"
              />
            </div>
          </div>

          <dl className="grid grid-cols-2 lg:grid-cols-4 mt-16 border-t border-cream/15">
            {impactFacts.map((f) => (
              <div key={f.value} className="pt-6 pb-2 pr-6 lg:border-r border-cream/15 lg:[&:not(:first-child)]:pl-6">
                <dt className="font-display text-5xl sm:text-6xl font-bold text-gold leading-none">{f.value}</dt>
                <dd className="font-body text-sm text-cream/70 mt-3 max-w-[14rem]">{f.label}</dd>
              </div>
            ))}
            <div className="pt-6 pb-2 lg:pl-6">
              <dt className="font-display text-5xl sm:text-6xl font-bold text-gold leading-none">{loaded ? past.length : "–"}</dt>
              <dd className="font-body text-sm text-cream/70 mt-3 max-w-[14rem]">community events since {FIRST_EVENT}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ── In the community ─────────────────────────── */}
      <section className="bg-cream">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <h2 className="font-display text-5xl font-bold text-foreground leading-none">In the community</h2>
            <p className="font-body text-sm text-foreground/60">Photos from HCCD events in Durham Region</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[640px]">
            {community.map((p, i) => (
              <Link
                key={p.slug}
                to={`/events?event=${p.slug}`}
                className={`group flex flex-col ${i === 0 ? "sm:col-span-2 md:row-span-2" : i === 1 ? "sm:col-span-2" : ""}`}
              >
                <div className="relative flex-1 min-h-56 overflow-hidden rounded-md">
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <p className="font-body text-xs text-foreground/60 mt-2 group-hover:text-saffron-dark transition-colors">{p.caption}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Get involved ─────────────────────────────── */}
      <section className="bg-cream-dark">
        <div className="container mx-auto px-6 py-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-5xl font-bold text-foreground leading-none mb-4">
              Be part of <em className="text-saffron">HCCD</em>
            </h2>
            <p className="font-body text-foreground/70 max-w-sm">
              There's a place for you, whether you have an evening or a whole season to give.
            </p>
          </div>
          <ol className="lg:col-span-5 border-t-2 border-foreground">
            {ways.map((w, i) => (
              <li key={w.title} className="grid grid-cols-[3rem_1fr] gap-x-2 py-6 border-b border-border">
                <span className="font-display text-3xl font-bold text-saffron leading-none">{i + 1}</span>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-foreground leading-tight">{w.title}</h3>
                  <p className="font-body text-sm text-foreground/70 mt-1.5 mb-3">{w.text}</p>
                  <Link to={w.to} className="font-body text-sm font-semibold text-saffron-dark hover:underline underline-offset-4">
                    {w.cta} →
                  </Link>
                </div>
              </li>
            ))}
          </ol>
          <aside className="lg:col-span-3 bg-maroon text-cream rounded-md p-7 self-start">
            <p className="font-body text-xs font-semibold text-gold mb-4">Supported by</p>
            <ul className="space-y-2 font-display text-xl leading-snug">
              {partners.map((p) => (
                <li key={p.name}>{p.name}</li>
              ))}
              {sponsors.map((s) => (
                <li key={s.name}>{s.name}</li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-cream/20 flex gap-5 font-body text-sm">
              <Link to="/partners" className="text-gold hover:underline underline-offset-4">Partners →</Link>
              <Link to="/sponsors" className="text-gold hover:underline underline-offset-4">Sponsors →</Link>
            </div>
          </aside>
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────── */}
      <section className="bg-gold">
        <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <h2 className="font-display text-5xl sm:text-6xl font-bold text-night leading-[0.95] max-w-2xl">
            Help us light up Durham Region.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/donate" className="font-body font-semibold bg-night text-cream px-7 py-3.5 rounded-md hover:bg-night-mid transition-colors">
              Donate
            </Link>
            <Link to="/join" className="font-body font-semibold border-2 border-night text-night px-7 py-3 rounded-md hover:bg-night hover:text-cream transition-colors">
              Volunteer with us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
