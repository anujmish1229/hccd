import { describe, expect, it } from "vitest";
import { type EventType, isEventPast, slugify, splitEvents } from "./events";

const event = (name: string, date: string): EventType => ({
  name,
  date,
  time: "6:00 PM",
  location: "Ajax, ON",
  link: "",
});

describe("slugify", () => {
  it("lowercases and joins words with single hyphens", () => {
    expect(slugify("Navratri Garba Night 2026")).toBe("navratri-garba-night-2026");
  });

  it("collapses punctuation and trims leading/trailing separators", () => {
    expect(slugify("  Diwali: Festival of Lights!  ")).toBe("diwali-festival-of-lights");
    expect(slugify("Holi & Rang--Utsav")).toBe("holi-rang-utsav");
  });
});

describe("isEventPast", () => {
  const e = event("Flag Raising", "2026-08-14");

  it("treats an event as upcoming for the whole day it happens", () => {
    expect(isEventPast(e, new Date("2026-08-14T00:00:01"))).toBe(false);
    expect(isEventPast(e, new Date("2026-08-14T23:59:58"))).toBe(false);
  });

  it("treats an event as past once its day has ended", () => {
    expect(isEventPast(e, new Date("2026-08-15T00:00:00"))).toBe(true);
  });

  it("treats future events as upcoming", () => {
    expect(isEventPast(e, new Date("2026-01-01T12:00:00"))).toBe(false);
  });
});

describe("splitEvents", () => {
  const now = new Date("2026-09-01T12:00:00");
  const events = [
    event("Diwali", "2026-10-24"),
    event("Holi", "2026-03-14"),
    event("Garba", "2026-10-17"),
    event("Today", "2026-09-01"),
    event("Janmashtami", "2026-08-16"),
  ];

  it("puts upcoming events soonest-first, including events happening today", () => {
    const { upcoming } = splitEvents(events, now);
    expect(upcoming.map((e) => e.name)).toEqual(["Today", "Garba", "Diwali"]);
  });

  it("puts past events most-recent-first", () => {
    const { past } = splitEvents(events, now);
    expect(past.map((e) => e.name)).toEqual(["Janmashtami", "Holi"]);
  });

  it("does not mutate the input array", () => {
    const copy = [...events];
    splitEvents(events, now);
    expect(events).toEqual(copy);
  });
});
