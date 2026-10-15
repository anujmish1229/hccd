/// <reference types="node" />
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { type EventType, slugify } from "./events";

// public/events.json is edited by hand; these checks catch typos before they reach the live site.
const publicDir = join(import.meta.dirname, "../../public");
const events: EventType[] = JSON.parse(readFileSync(join(publicDir, "events.json"), "utf-8"));

describe("public/events.json", () => {
  it("contains at least one event", () => {
    expect(events.length).toBeGreaterThan(0);
  });

  it.each(events.map((e) => [e.name, e] as const))("%s has the required fields", (_, e) => {
    for (const field of ["name", "date", "time", "location"] as const) {
      expect(typeof e[field], field).toBe("string");
      expect(e[field].trim(), field).not.toBe("");
    }
    expect(typeof e.link).toBe("string");
  });

  it.each(events.map((e) => [e.name, e.date] as const))("%s has a real YYYY-MM-DD date", (_, date) => {
    expect(date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    const parsed = new Date(`${date}T12:00:00`);
    expect(Number.isNaN(parsed.getTime())).toBe(false);
    expect(parsed.toISOString().slice(0, 10)).toBe(date);
  });

  it("gives every event a unique slug, so ?event= deep links are unambiguous", () => {
    const slugs = events.map((e) => slugify(e.name));
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("only links to photos that exist in public/", () => {
    const missing = events
      .filter((e) => e.photo)
      .filter((e) => !existsSync(join(publicDir, e.photo!.replace(/^\//, ""))))
      .map((e) => `${e.name}: ${e.photo}`);
    expect(missing).toEqual([]);
  });

  it("uses absolute https URLs for registration links", () => {
    for (const e of events.filter((e) => e.link)) {
      expect(e.link, e.name).toMatch(/^https:\/\//);
    }
  });
});
