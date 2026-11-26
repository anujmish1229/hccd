import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { Calendar, MapPin, ExternalLink, Clock, X, ChevronLeft, ChevronRight } from "lucide-react";
import Lightbox, { type LightboxImage } from "@/components/Lightbox";
import { type EventType, slugify, fetchEvents, splitEvents, isEventPast, eventImages, formatEventDate } from "@/lib/events";
import PageHeader from "@/components/PageHeader";

function ImageCarousel({ images, onOpen }: { images: string[]; onOpen: (index: number) => void }) {
  const [current, setCurrent] = useState(0);
  // Tall images (flyers) are shown whole instead of cropped to the 16:9 frame.
  const [portrait, setPortrait] = useState<Record<number, boolean>>({});

  if (images.length === 0) {
    return (
      <div className="w-full aspect-video bg-linear-to-br from-saffron/10 to-gold/10 flex items-center justify-center rounded-t-2xl">
        <span className="text-6xl opacity-30">🪷</span>
      </div>
    );
  }

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="relative w-full aspect-video bg-black overflow-hidden rounded-t-2xl">
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onOpen(current); }}
        className="block w-full h-full cursor-zoom-in"
        aria-label={`View photo ${current + 1} full screen`}
      >
        <img
          key={current}
          src={images[current]}
          alt={`Photo ${current + 1}`}
          onLoad={(e) => {
            const img = e.currentTarget;
            setPortrait((p) => ({ ...p, [current]: img.naturalHeight > img.naturalWidth }));
          }}
          className={`w-full h-full ${portrait[current] ? "object-contain" : "object-cover"}`}
        />
      </button>
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
  const images = eventImages(event);
  const [lightbox, setLightbox] = useState<{ images: LightboxImage[]; index: number } | null>(null);

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      {lightbox && (
        <Lightbox images={lightbox.images} startIndex={lightbox.index} onClose={() => setLightbox(null)} />
      )}
      <div
        className="relative bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white text-foreground rounded-full p-1.5 shadow-md transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <ImageCarousel
          images={images}
          onOpen={(index) => setLightbox({ images: images.map((src) => ({ src, caption: event.name })), index })}
        />

        <div className="p-6">
          {isPast && (
            <span className="inline-block bg-night/85 text-cream text-xs font-body font-semibold px-3 py-1 rounded-full mb-3">
              Past Event
            </span>
          )}
          <h2 className="font-display text-2xl font-bold text-foreground mb-4 leading-snug">
            {event.name}
          </h2>

          <div className="space-y-2.5 mb-5 pb-5 border-b border-border">
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
              <Calendar size={14} className="text-saffron shrink-0" />
              <span>{formatEventDate(event)}</span>
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

          {event.videos && event.videos.length > 0 && (
            <div className="mb-6">
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">Videos</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {event.videos.map((video) => (
                  <figure key={video.src}>
                    <video
                      src={video.src}
                      poster={video.poster}
                      controls
                      playsInline
                      preload="none"
                      className="w-full aspect-video rounded-lg bg-black object-contain"
                    />
                    {video.caption && (
                      <figcaption className="font-body text-xs text-muted-foreground mt-1.5">{video.caption}</figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          )}

          {event.certificates && event.certificates.length > 0 && (
            <div className="mb-6">
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">Certificates of Recognition</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {event.certificates.map((cert, i, certs) => (
                  <button
                    type="button"
                    key={cert.src}
                    onClick={() => setLightbox({ images: certs.map((c) => ({ src: c.src, caption: c.caption })), index: i })}
                    className="group block text-left cursor-zoom-in"
                  >
                    <img
                      src={cert.src}
                      alt={`Certificate from ${cert.caption}`}
                      loading="lazy"
                      className="w-full aspect-3/4 object-contain bg-white p-1.5 rounded-lg border border-border group-hover:shadow-warm transition-shadow"
                    />
                    <span className="block font-body text-xs text-muted-foreground mt-1.5 leading-snug">{cert.caption}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {event.link && (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-saffron text-primary-foreground font-body font-semibold text-sm px-5 py-2.5 rounded-md hover:bg-saffron-dark transition-colors shadow-warm"
            >
              <ExternalLink size={14} />
              {isPast ? "View Details" : "Get Tickets"}
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
      className="flex flex-col bg-white rounded-lg overflow-hidden shadow-card border border-border hover:shadow-warm hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      <div className="relative w-full aspect-video bg-cream-dark overflow-hidden">
        {event.photo && !imgError ? (
          <img
            src={event.photo}
            alt={event.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-saffron/10 to-gold/10">
            <span className="text-5xl opacity-40">🪷</span>
          </div>
        )}
        {isPast && (
          <span className="absolute top-3 left-3 bg-night/85 text-cream text-xs font-body font-semibold px-3 py-1 rounded-full backdrop-blur-xs">
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
            <span>{formatEventDate(event)}</span>
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

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1 text-saffron font-body font-semibold text-sm">
            <span>View Details</span>
            <ChevronRight size={14} />
          </div>
          {event.link && (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 bg-saffron text-primary-foreground font-body font-semibold text-xs px-4 py-2 rounded-md hover:bg-saffron-dark transition-colors shadow-warm shrink-0"
            >
              <ExternalLink size={12} />
              {isPast ? "Details" : "Get Tickets"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Events() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [tab, setTab] = useState<"upcoming" | "past">("past");
  const [allEvents, setAllEvents] = useState<EventType[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setLoading(true);
        setAllEvents(await fetchEvents());
      } catch (err) {
        console.error("Error loading events:", err);
        setAllEvents([]);
      } finally {
        setLoading(false);
      }
    };
    loadEvents();
  }, []);

  const { upcoming, past } = splitEvents(allEvents);
  const events = tab === "upcoming" ? upcoming : past;

  useEffect(() => {
    const slug = searchParams.get("event");
    if (!slug || allEvents.length === 0) return;
    const match = allEvents.find((e) => slugify(e.name) === slug);
    if (match) {
      setTab(isEventPast(match) ? "past" : "upcoming");
      setSelectedEvent(match);
    }
  }, [searchParams, allEvents]);

  const closeModal = () => {
    setSelectedEvent(null);
    if (searchParams.has("event")) {
      searchParams.delete("event");
      setSearchParams(searchParams, { replace: true });
    }
  };

  return (
    <main className="pt-16">
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          isPast={isEventPast(selectedEvent)}
          onClose={closeModal}
        />
      )}

      <PageHeader title={<span className="text-saffron">Events</span>}>
        From festivals to workshops, HCCD brings the community together year-round.
      </PageHeader>

      <section className="py-12 bg-cream">
        <div className="container mx-auto px-6">
          <div className="flex gap-2 mb-10 border-b border-border pb-4">
            {(["past", "upcoming"] as const).map((t) => (
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
              {events.map((event) => (
                <EventCard
                  key={slugify(event.name)}
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
