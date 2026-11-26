import { useEffect, useState } from "react";
import { type EventType, fetchEvents, splitEvents } from "@/lib/events";

/** Loads events.json once and splits it into upcoming and past. */
export function useEvents() {
  const [events, setEvents] = useState<EventType[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchEvents()
      .then((e) => !cancelled && setEvents(e))
      .catch((err) => console.error("Error loading events:", err));
    return () => {
      cancelled = true;
    };
  }, []);

  const { upcoming, past } = splitEvents(events ?? []);
  return { loaded: events !== null, upcoming, past };
}
