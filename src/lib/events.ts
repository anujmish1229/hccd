export type EventType = {
  name: string;
  date: string;
  time: string;
  location: string;
  link: string;
  photo?: string;
  description?: string;
  detailedDescription?: string;
};

export function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function isEventPast(event: EventType, now: Date = new Date()) {
  return new Date(`${event.date}T23:59:59`) < now;
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
