import { useState, useEffect } from "react";
import { Calendar, MapPin, ExternalLink, Clock } from "lucide-react";
import mandala from "@/assets/mandala.png";

type EventType = {
  name: string;
  date: string;
  time: string;
  location: string;
  link: string;
};

export default function Events() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const [events, setEvents] = useState<EventType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);

        const file =
          tab === "upcoming"
            ? "/upcoming-events.json"
            : "/past-events.json";

        const response = await fetch(file);

        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }

        const data = await response.json();
        setEvents(data);
      } catch (err) {
        console.error("Error loading events:", err);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [tab]);

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

          {loading ? (
            <div className="text-center py-20 text-muted-foreground font-body">
              <p>Loading events...</p>
            </div>
          ) : events.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <div key={index} className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
                  <h3 className="font-semibold text-xl text-foreground mb-2">
                    {event.name}
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    <Calendar className="inline mr-2" /> {event.date}
                  </p>
                  <p className="text-muted-foreground mb-2">
                    <Clock className="inline mr-2" /> {event.time}
                  </p>
                  <p className="text-muted-foreground mb-2">
                    <MapPin className="inline mr-2" /> {event.location}
                  </p>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-saffron hover:underline mt-4 flex items-center"
                  >
                    <ExternalLink className="mr-2" /> View Event
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-muted-foreground font-body">
              <p className="text-4xl mb-4">🪷</p>
              <p>No {tab} events at the moment. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}