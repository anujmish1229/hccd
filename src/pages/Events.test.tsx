import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { EventType } from "@/lib/events";
import Events from "./Events";

const daysFromNow = (days: number) => {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
};

const sampleEvents: EventType[] = [
  {
    name: "Diwali Mela",
    date: daysFromNow(30),
    time: "5:00 PM",
    location: "Ajax, ON",
    link: "https://www.eventbrite.ca/e/diwali-mela",
    description: "Lights, food and music.",
    detailedDescription: "A full evening celebrating Diwali with the community.",
  },
  {
    name: "Holi Celebration",
    date: daysFromNow(-60),
    time: "11:00 AM",
    location: "Pickering, ON",
    link: "",
    description: "Colours and community.",
  },
];

const mockFetch = (response: Partial<Response>) =>
  vi.spyOn(globalThis, "fetch").mockResolvedValue(response as Response);

const renderEvents = (path = "/events") =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Events />
    </MemoryRouter>,
  );

describe("Events page", () => {
  beforeEach(() => {
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("loads events.json and shows only past events by default", async () => {
    const fetchSpy = mockFetch({ ok: true, json: async () => sampleEvents });
    renderEvents();

    expect(screen.getByText("Loading events...")).toBeInTheDocument();
    expect(await screen.findByRole("heading", { level: 3, name: "Holi Celebration" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { level: 3, name: "Diwali Mela" })).not.toBeInTheDocument();
    expect(fetchSpy).toHaveBeenCalledWith("/events.json");
  });

  it("switches to upcoming events when the Upcoming Events tab is clicked", async () => {
    mockFetch({ ok: true, json: async () => sampleEvents });
    renderEvents();
    await screen.findByRole("heading", { level: 3, name: "Holi Celebration" });

    await userEvent.click(screen.getByRole("button", { name: "Upcoming Events" }));

    expect(screen.getByRole("heading", { level: 3, name: "Diwali Mela" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { level: 3, name: "Holi Celebration" })).not.toBeInTheDocument();
  });

  it("shows an empty state instead of crashing when events.json fails to load", async () => {
    mockFetch({ ok: false, status: 500 });
    renderEvents();

    expect(await screen.findByText(/No past events at the moment/)).toBeInTheDocument();
  });

  it("shows an event's videos and certificates in its details", async () => {
    const withMedia: EventType = {
      ...sampleEvents[1],
      videos: [{ src: "/event-videos/holi/1.mp4", caption: "Colour throw" }],
      certificates: [{ src: "/event-photos/holi/certificates/1.jpg", caption: "Mayor of Pickering" }],
    };
    mockFetch({ ok: true, json: async () => [withMedia] });
    renderEvents("/events?event=holi-celebration");

    expect(await screen.findByText("Colour throw")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Certificate from Mayor of Pickering" })).toBeInTheDocument();
  });

  it("opens the matching event's details from a ?event= deep link", async () => {
    mockFetch({ ok: true, json: async () => sampleEvents });
    renderEvents("/events?event=holi-celebration");

    const modalHeading = await screen.findByRole("heading", { level: 2, name: "Holi Celebration" });
    expect(modalHeading).toBeInTheDocument();
    // The deep link also switches the list to the tab that contains the event.
    expect(screen.getByRole("heading", { level: 3, name: "Holi Celebration" })).toBeInTheDocument();
  });
});
