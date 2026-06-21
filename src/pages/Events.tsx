import { useState, useEffect } from "react";
import { Calendar, MapPin, ExternalLink, Clock, X, ChevronLeft, ChevronRight } from "lucide-react";
import mandala from "@/assets/mandala.png";

type EventType = {
  name: string;
  date: string;
  time: string;
  location: string;
  link: string;
  photo?: string;
  description?: string;
  detailedDescription?: string;
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-CA", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
}

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function useEventImages(eventName: string, fallbackPhoto?: string) {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const slug = slugify(eventName);
    const baseDir = `/event-photos/${slug}`;
    const loaded: string[] = [];

    const tryLoad = (src: string): Promise<boolean> =>
      new Promise((resolve) => {
        const img = new window.Image();
        img.onload = () => { loaded.push(src); resolve(true); };
        img.onerror = () => resolve(false);
        img.src = src;
      });

    const loadAll = async () => {
      for (let i = 1; i <= 20; i++) {
        const ok = await tryLoad(`${baseDir}/${i}.jpg`);
        if (!ok) break;
      }
      if (loaded.length === 0 && fallbackPhoto) {
        setImages([fallbackPhoto]);
      } else {
        setImages(loaded);
      }
    };

    loadAll();
  }, [eventName, fallbackPhoto]);

  return images;
}

function ImageCarousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  if (images.length === 0) {
    return (
      <div className="w-full aspect-video bg-gradient-to-br from-saffron/10 to-gold/10 flex items-center justify-center rounded-t-2xl">
        <span className="text-6xl opacity-30">🪷</span>
      </div>
    );
  }

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="relative w-full aspect-video bg-black overflow-hidden rounded-t-2xl">
      <img
        key={current}
        src={images[current]}
        alt={`Photo ${current + 1}`}
        className="w-full h-full object-cover"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/50 hover:bg-white/75"}`}
              />
            ))}
          </div>
          <span className="absolute top-3 right-3 bg-black/50 text-white text-xs font-body px-2 py-1 rounded-full">
            {current + 1} / {images.length}
          </span>
        </>
      )}
    </div>
  );
}

function EventModal({ event, isPast, onClose }: { event: EventType; isPast: boolean; onClose: () => void }) {
  const images = useEventImages(event.name, event.photo);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white text-foreground rounded-full p-1.5 shadow-md transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <ImageCarousel images={images} />

        <div className="p-6">
          {isPast && (
            <span className="inline-block bg-brown/80 text-cream text-xs font-body font-semibold px-3 py-1 rounded-full mb-3">
              Past Event
            </span>
          )}
          <h2 className="font-display text-2xl font-bold text-foreground mb-4 leading-snug">
            {event.name}
          </h2>

          <div className="space-y-2.5 mb-5 pb-5 border-b border-border">
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
              <Calendar size={14} className="text-saffron shrink-0" />
              <span>{formatDate(event.date)}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
              <Clock size={14} className="text-saffron shrink-0" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
              <MapPin size={14} className="text-saffron shrink-0" />
              <span>{event.location}</span>
            </div>
          </div>

          {(event.detailedDescription || event.description) && (
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 whitespace-pre-line">
              {event.detailedDescription || event.description}
            </p>
          )}

          {event.link && (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-saffron text-primary-foreground font-body font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-saffron-dark transition-colors shadow-warm"
            >
              <ExternalLink size={14} />
              {isPast ? "View Details" : "Register Now"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function EventCard({ event, isPast, onOpen }: { event: EventType; isPast: boolean; onOpen: () => void }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onOpen(); }}
      className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-warm hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      <div className="relative w-full aspect-video bg-cream-dark overflow-hidden">
        {event.photo && !imgError ? (
          <img
            src={event.photo}
            alt={event.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-saffron/10 to-gold/10">
            <span className="text-5xl opacity-40">🪷</span>
          </div>
        )}
        {isPast && (
          <span className="absolute top-3 left-3 bg-brown/80 text-cream text-xs font-body font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
            Past Event
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-display text-xl font-semibold text-foreground mb-3 leading-snug">
          {event.name}
        </h3>

        {event.description && (
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
            {event.description}
          </p>
        )}

        <div className="space-y-2 mt-auto pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
            <Calendar size={14} className="text-saffron shrink-0" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
            <Clock size={14} className="text-saffron shrink-0" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
            <MapPin size={14} className="text-saffron shrink-0" />
            <span>{event.location}</span>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-1 text-saffron font-body font-semibold text-sm">
          <span>View Details</span>
          <ChevronRight size={14} />
        </div>
      </div>
    </div>
  );
}

export default function Events() {
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const [events, setEvents] = useState<EventType[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const file = tab === "upcoming" ? "/upcoming-events.json" : "/past-events.json";
        const response = await fetch(file);
        if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`);
        setEvents(await response.json());
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
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          isPast={tab === "past"}
          onClose={() => setSelectedEvent(null)}
        />
      )}

      <section className="bg-cream-dark py-20 relative overflow-hidden">
        <img src={mandala} alt="" aria-hidden className="absolute right-10 top-1/2 -translate-y-1/2 w-72 opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <p className="font-body text-xs uppercase tracking-widest text-saffron mb-3">Community Calendar</p>
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
                {t === "upcoming" ? "Upcoming Events" : "Past Events"}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-20 text-muted-foreground font-body">
              <p>Loading events...</p>
            </div>
          ) : events.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <EventCard
                  key={index}
                  event={event}
                  isPast={tab === "past"}
                  onOpen={() => setSelectedEvent(event)}
                />
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
