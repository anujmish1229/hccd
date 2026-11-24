export type EventVideo = {
  src: string;
  poster?: string;
  caption?: string;
};

export type EventCertificate = {
  src: string;
  caption: string;
};

export type EventType = {
  name: string;
  date: string;
  /** Last day, for events that run over several days (YYYY-MM-DD). */
  endDate?: string;
  time: string;
  location: string;
  link: string;
  photo?: string;
  /** Gallery images, in display order. Falls back to `photo` when absent. */
  photos?: string[];
  videos?: EventVideo[];
  certificates?: EventCertificate[];
  description?: string;
  detailedDescription?: string;
};

export function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function eventImages(event: EventType): string[] {
  if (event.photos?.length) return event.photos;
  return event.photo ? [event.photo] : [];
}

export function isEventPast(event: EventType, now: Date = new Date()) {
  return new Date(`${event.endDate ?? event.date}T23:59:59`) < now;
}

function toDate(dateStr: string) {
  return new Date(`${dateStr}T00:00:00`);
}

/** Long form, e.g. "Saturday, November 28, 2026" or "November 12 – December 15, 2026". */
export function formatEventDate(event: EventType) {
  if (!event.endDate) {
    return toDate(event.date).toLocaleDateString("en-CA", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  }
  const start = toDate(event.date).toLocaleDateString("en-CA", { month: "long", day: "numeric" });
  const end = toDate(event.endDate).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" });
  return `${start} – ${end}`;
}

/** Short form, e.g. "Nov 28, 2026" or "Nov 12 – Dec 15, 2026". */
export function formatShortEventDate(event: EventType) {
  const end = toDate(event.endDate ?? event.date).toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric" });
  if (!event.endDate) return end;
  return `${toDate(event.date).toLocaleDateString("en-CA", { month: "short", day: "numeric" })} – ${end}`;
}

export async function fetchEvents(): Promise<EventType[]> {
  const response = await fetch("/events.json");
  if (!response.ok) throw new Error(`Failed to fetch: ${response.status}`);
  return response.json();
}

export function splitEvents(events: EventType[], now: Date = new Date()) {
  const upcoming = events
    .filter((e) => !isEventPast(e, now))
    .sort((a, b) => a.date.localeCompare(b.date));
  const past = events
    .filter((e) => isEventPast(e, now))
    .sort((a, b) => b.date.localeCompare(a.date));
  return { upcoming, past };
}
