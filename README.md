# Hindu Community Centre of Durham (HCCD)

Website for the **Hindu Community Centre of Durham**, a youth-founded community organization in Durham Region, Ontario, that celebrates Hindu heritage through festivals, cultural events and community service. The site lists upcoming and past events, introduces the team and ambassadors, and takes volunteer and contact sign-ups.

**Live site:** https://hccd.ca

![HCCD home page](docs/screenshot.png)
<!-- TODO: add a 1280×800 screenshot of the home page at docs/screenshot.png -->

## Who it's for

- **Families in Durham Region** looking for Hindu festivals and community events (Navratri Garba, Diwali, Independence Day, Yoga Day)
- **Youth volunteers and ambassadors** who want to get involved
- **Local officials and partner organizations** contacting the centre

## My role

I founded HCCD and served as its president. I designed and built the website: the React front end, the data-driven events calendar, Netlify Forms sign-ups, the test suite, and deployment.

## Features

- **Events calendar** driven by a single `public/events.json` file. Events move from *Upcoming* to *Past* automatically once their day has ended.
- **Shareable event links.** `/events?event=<slug>` opens that event's details directly.
- **Join and contact forms** handled by Netlify Forms, with honeypot spam protection.
- **Team and ambassadors** pages.

## Tech stack

| Layer      | Choice                                                |
| ---------- | ----------------------------------------------------- |
| Framework  | React 19 + TypeScript                                 |
| Build tool | Vite 8                                                |
| Routing    | React Router 7                                        |
| Styling    | Tailwind CSS 4 + shadcn/ui primitives (toast, tooltip) |
| Testing    | Vitest 5, Testing Library, jsdom                      |
| Hosting    | Netlify (auto-deploys from `main`)                    |
| CI         | GitHub Actions: lint, typecheck, test, build          |

## Architecture

```
Browser (React SPA)
   │
   ├── GET /events.json ──► static file in public/, edited by hand
   │        └─ src/lib/events.ts: fetchEvents() → splitEvents() into upcoming / past
   │
   └── form POSTs ───────► Netlify Forms
                            (hidden copies of each form in index.html let
                             Netlify detect them at build time)
```

To add or update an event, edit `public/events.json` and put its photo in `public/event-photos/`. The test suite checks the file on every push.

```
public/
  events.json            Event data (name, date, time, location, link, photo, descriptions)
  event-photos/          Event images
  ambassador-photos/     Ambassador headshots
src/
  App.tsx                Routes: /, /about, /team, /events, /contact, /join, 404
  pages/                 One component per route
  components/            Navbar, Footer, icons/, ui/ (shadcn)
  lib/events.ts          Event types, date logic, slugs
  test/setup.ts          Testing Library + jest-dom setup
```

## Tests

```bash
npm test
```

- `src/lib/events.test.ts`: slugs, the "past once the day ends" rule, and upcoming/past ordering
- `src/lib/events-data.test.ts`: validates `public/events.json` (required fields, real dates, unique slugs, photos that exist, https links)
- `src/pages/Events.test.tsx`: renders the Events page, switches tabs, handles a failed load, and opens a deep-linked event

## Local setup

Requires Node.js 22.12+ (Vitest 5 requirement; see `.nvmrc`) and npm.

```bash
git clone https://github.com/anujmish1229/hccd.git
cd hccd
npm install
npm run dev        # http://localhost:8080
```

| Script              | What it does                    |
| ------------------- | ------------------------------- |
| `npm run dev`       | Vite dev server                 |
| `npm run build`     | Production build into `dist/`   |
| `npm test`          | Run the test suite once         |
| `npm run test:watch`| Tests in watch mode             |
| `npm run lint`      | ESLint                          |
| `npm run typecheck` | TypeScript type check           |

## Environment variables

None. Events come from a static JSON file, and Eventbrite is only linked to, never called.
