import { useState, useEffect } from "react";
import { Calendar, MapPin, ExternalLink, Clock } from "lucide-react";
import mandala from "@/assets/mandala.png";

type EventStatus = "upcoming" | "past";

interface EventItem {
  id: string;
  name: string;
  description: string;
  start: string;
  end: string;
  venue: string;
  status: EventStatus;
  image: string | null;
  url: string;
}

const API_KEY = import.meta.env.VITE_EVENTBRITE_API_KEY;
const ORGANIZER_ID = import.meta.env.VITE_EVENTBRITE_ORGANIZER_ID;


function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatTime(dateStr: string) {
  return new Date(dateStr).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function Events() {
  const [tab, setTab] = useState<EventStatus>("upcoming");
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch(
          `https://www.eventbriteapi.com/v3/organizers/${ORGANIZER_ID}/events/?expand=venue`,
          {
            headers: { Authorization: `Bearer ${API_KEY}` },
          }
        );

        const data = await res.json();

        const now = new Date();

        const normalized: EventItem[] = data.events.map((e: any) => {
          const start = new Date(e.start.utc);
          const end = new Date(e.end.utc);
          const isPast = end < now;

          return {
            id: e.id,
            name: e.name?.text ?? "",
            description: e.description?.text ?? "",
            start: e.start.utc,
            end: e.end.utc,
            status: isPast ? "past" : "upcoming",
            venue: e.venue
              ? `${e.venue.name ?? ""}, ${e.venue.address?.localized_address_display ?? ""}`
              : "TBA",
            image: e.logo?.url ?? null,
            url: e.url,
          };
        });

        setEvents(normalized);
      } catch (err) {
        console.error("Failed to fetch Eventbrite events:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  const filtered = events.filter((e) => e.status === tab);

  if (loading) {
    return <main className="pt-32 text-center text-muted-foreground">Loading events…</main>;
  }

  return (
    <main className="pt-20">
      <section className="bg-cream-dark py-20 relative overflow-hidden">
        <img
          src={mandala}
          alt=""
          aria-hidden
          className="absolute right-10 top-1/2 -translate-y-1/2 w-72 opacity-10 pointer-events-none"
        />
        <div className="container mx-auto px-6 relative z-10">
          <p className="font-body text-xs uppercase tracking-widest text-saffron mb-3">
            Community Calendar
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-foreground mb-4">
            <span className="text-saffron">Events</span>
          </h1>
          <div className="w-16 h-1 rounded bg-gold mb-6" />
          <p className="font-body text-lg text-muted-foreground max-w-2xl leading-relaxed">
            From festivals to workshops, HCCD brings the community together year-round.
          </p>
          <a
            href="https://www.eventbrite.com/o/hindu-community-centre-of-durham-hccd-114637567781"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 bg-saffron text-primary-foreground font-body font-semibold px-6 py-3 rounded-full hover:bg-saffron-dark transition-colors shadow-warm"
          >
            <ExternalLink size={15} />
            View All on Eventbrite
          </a>
        </div>
      </section>

      <section className="py-12 bg-cream">
        <div className="container mx-auto px-6">
          <div className="flex gap-2 mb-10 border-b border-border pb-4">
            {(["upcoming", "past"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`font-body font-semibold text-sm px-6 py-2.5 rounded-full transition-all ${
                  tab === t
                    ? "bg-saffron text-primary-foreground shadow-warm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)} Events
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground font-body">
              <p className="text-4xl mb-4">🪷</p>
              <p>No {tab} events at the moment. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filtered.map((event) => (
                <div
                  key={event.id}
                  className="bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-warm hover:border-saffron/30 transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
                >
                  {event.image ? (
                    <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-saffron/20 to-gold/20 flex items-center justify-center">
                      <span className="text-6xl opacity-40">🪔</span>
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-1">
                    <span
                      className={`inline-block text-xs font-body font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3 w-fit ${
                        event.status === "upcoming"
                          ? "bg-saffron/10 text-saffron border border-saffron/20"
                          : "bg-muted text-muted-foreground border border-border"
                      }`}
                    >
                      {event.status === "upcoming" ? "Upcoming" : "Past Event"}
                    </span>

                    <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                      {event.name}
                    </h3>

                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                      {event.description}
                    </p>

                    <div className="space-y-2 border-t border-border pt-4 mt-auto">
                      <div className="flex items-center gap-2 text-sm font-body text-foreground/70">
                        <Calendar size={14} className="text-saffron flex-shrink-0" />
                        <span>{formatDate(event.start)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-body text-foreground/70">
                        <Clock size={14} className="text-saffron flex-shrink-0" />
                        <span>
                          {formatTime(event.start)} – {formatTime(event.end)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-body text-foreground/70">
                        <MapPin size={14} className="text-saffron flex-shrink-0" />
                        <span>{event.venue}</span>
                      </div>
                    </div>

                    <a
                      href={event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 bg-saffron text-primary-foreground font-body font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-saffron-dark transition-colors w-fit shadow-warm"
                    >
                      <ExternalLink size={14} />
                      {event.status === "upcoming" ? "Register on Eventbrite" : "View Details"}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
