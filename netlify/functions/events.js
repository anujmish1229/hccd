import fetch from "node-fetch";

export async function handler() {
  const ORGANIZER_ID = process.env.EVENTBRITE_ORGANIZER_ID;
  const PRIVATE_TOKEN = process.env.EVENTBRITE_PRIVATE_TOKEN;

  if (!ORGANIZER_ID || !PRIVATE_TOKEN) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Missing Eventbrite environment variables" }),
    };
  }

  try {
    const res = await fetch(
      `https://www.eventbriteapi.com/v3/organizers/${ORGANIZER_ID}/events/?expand=venue`,
      {
        headers: { Authorization: `Bearer ${PRIVATE_TOKEN}` },
      }
    );

    const data = await res.json();
    const now = new Date();

    const normalized = data.events.map((e) => {
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

    return {
      statusCode: 200,
      body: JSON.stringify(normalized),
    };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ error: "Failed to fetch events" }) };
  }
}
