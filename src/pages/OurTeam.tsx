import { useState } from "react";
import anujImg from "@/assets/anuj-mishra.jpg";
import nidhiImg from "@/assets/nidhi-mishra.jpg";
import mukeshImg from "@/assets/mukesh-mishra.jpg";
import volunteersImg from "@/assets/volunteers.jpg";
import mandala from "@/assets/mandala.png";

type Person = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

// Archived — no longer displayed. Anuj is heading to university and stepping back from
// representing HCCD day-to-day. Keeping his info here in case it's needed again later.
const archivedTeam: Person[] = [
  {
    name: "Anuj Mishra",
    role: "Founder & President",
    image: anujImg,
    bio: "Hey! I'm Anuj, the founder of HCCD. My vision for HCCD is to create a vibrant community space where we can celebrate our culture, support each other, and make a positive impact in our city. I started HCCD because I believe in the power of community and wanted to create a platform for us to connect, learn, and grow together. When I'm not working on HCCD, you can find me exploring new cuisines, building robots, or planning our next big event!",
  },
];

const team: Person[] = [
  {
    name: "Nidhi Mishra",
    role: "Board Member",
    image: nidhiImg,
    bio: "Hi. I'm Nidhi, a board member at HCCD. I joined the board because I wanted to contribute to our community and help shape the future of HCCD. My background is in community organizing and event planning, so I bring that experience to the table as we plan our programs and initiatives. I'm passionate about creating inclusive spaces where everyone feels welcome and valued.",
  },
  {
    name: "Mukesh Mishra",
    role: "Board Member",
    image: mukeshImg,
    bio: "Hello, I'm Mukesh, a board member at HCCD. I joined the board to support Anuj's vision and to help ensure that HCCD remains a sustainable and impactful organization. I'm committed to making sure that HCCD can continue to serve our community for years to come.",
  },
];

const roleBadgeStyles: Record<string, string> = {
  "Founder & President": "bg-saffron text-primary-foreground",
  "Board Member": "bg-gold text-brown",
  Ambassador: "bg-maroon text-cream",
};

const volunteers: Person[] = {
  {
    name: "Priti Gandhi",
    role: "Ambassador",
    image: "/ambassador-photos/priti-gandhi.jpg",
    bio: "Placeholder bio for Priti Gandhi — update with her story, involvement with HCCD, and what being an ambassador means to her.",
  },
  {
    name: "Shilpa Bhatt",
    role: "Ambassador",
    image: "/ambassador-photos/shilpa-bhatt.jpg",
    bio: "Placeholder bio for Shilpa Bhatt — update with her story, involvement with HCCD, and what being an ambassador means to her.",
  },
  {
    name: "Hasit Bhatt",
    role: "Ambassador",
    image: "/ambassador-photos/hasit-bhatt.jpg",
    bio: "Placeholder bio for Hasit Bhatt — update with his story, involvement with HCCD, and what being an ambassador means to him.",
  },
  {
    name: "Kanchan Pandey",
    role: "Ambassador",
    image: "/ambassador-photos/kanchan-pandey.jpg",
    bio: "Placeholder bio for Kanchan Pandey — update with her story, involvement with HCCD, and what being an ambassador means to her.",
  },
};

const ambassadors: Person[] = [
  {
    name: "Kajal Pandya",
    role: "Ambassador",
    image: "/ambassador-photos/kajal-pandya.jpg",
    bio: "Placeholder bio for Kajal Pandya — update with her story, involvement with HCCD, and what being an ambassador means to her.",
  },
  {
    name: "Girish Pandey",
    role: "Ambassador",
    image: "/ambassador-photos/girish-pandey.jpg",
    bio: "Placeholder bio for Girish Pandey — update with his story, involvement with HCCD, and what being an ambassador means to him.",
  },
];

const volunteerLabels: { name: string; x: number; y: number }[] = [
  { name: "Harsh Patel", x: 19.3, y: 33.9 },
  { name: "Aarush Patel", x: 31.1, y: 31.25 },
  { name: "Yashvi Patel", x: 44.8, y: 43.2 },
  { name: "Niva Pandya", x: 53.6, y: 41.1 },
  { name: "Anuj Mishra", x: 72.1, y: 33.3 },
  { name: "Tanishka Sharma", x: 83.5, y: 42.2 },
];

const MAX_PER_ROW = 3;
const ambassadorRows: Person[][] = [];
for (let i = 0; i < ambassadors.length; i += MAX_PER_ROW) {
  ambassadorRows.push(ambassadors.slice(i, i + MAX_PER_ROW));
}

function PersonCard({ person }: { person: Person }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group flex flex-col md:flex-row md:h-[26rem] shrink-0 md:transition-[margin] md:duration-500 md:ease-out md:hover:-mr-6">
      {/* Image — fixed size always, never shrinks or grows, self or siblings */}
      <div className="relative z-20 w-full h-96 md:h-full md:w-80 shrink-0 rounded-3xl overflow-hidden border border-border shadow-card">
        {!imgError ? (
          <img
            src={person.image}
            alt={person.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-saffron/10 to-gold/10">
            <span className="text-5xl opacity-40">🪷</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brown/85 via-brown/10 to-transparent" />
        {/* Name + role — hidden on hover, replaced by the info panel */}
        <div className="absolute bottom-5 left-5 right-5 transition-opacity duration-300 md:group-hover:opacity-0">
          <h3 className="font-display text-xl font-bold text-white leading-tight drop-shadow-sm">
            {person.name}
          </h3>
          <p className="font-body text-xs text-saffron uppercase tracking-wider font-semibold mt-1">
            {person.role}
          </p>
        </div>
      </div>

      {/* Info panel — white, tucked behind the image's curve, flows out on hover */}
      <div className="hidden md:block relative z-10 -ml-6 h-full shrink-0 overflow-hidden rounded-r-3xl border border-l-0 border-border bg-white shadow-card w-0 transition-[width] duration-500 ease-out group-hover:w-[calc(20rem+2.5rem)]">
        <div className="w-[calc(20rem+2.5rem)] h-full pl-9 pr-7 py-7 flex flex-col items-start justify-start">
          <span
            className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-body font-semibold uppercase tracking-wider mb-4 w-fit ${roleBadgeStyles[person.role]}`}
          >
            {person.role}
          </span>
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">{person.name}</h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">{person.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default function OurTeam() {
  return (
    <main className="pt-[65px]">
      {/* Page Header */}
      <section className="bg-cream-dark py-20 relative overflow-hidden">
        <img
          src={mandala}
          alt=""
          aria-hidden
          className="absolute right-10 top-1/2 -translate-y-1/2 w-72 opacity-10 pointer-events-none"
        />
        <div className="container mx-auto px-6 relative z-10">
          <p className="font-body text-xs uppercase tracking-widest text-saffron mb-3">
            The People Behind HCCD
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-foreground mb-4">
            Our <span className="text-saffron">Team</span>
          </h1>
          <div className="w-16 h-1 rounded bg-gold mb-6" />
          <p className="font-body text-lg text-muted-foreground max-w-2xl leading-relaxed">
            HCCD is powered by dedicated volunteers and leaders who give their time and heart to serve our community.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-cream shadow-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-body text-xs uppercase tracking-widest text-saffron mb-3">
              Leadership &amp; Governance
            </p>
            <h2 className="font-display text-4xl font-semibold text-foreground">Meet the Team</h2>
          </div>

          <div className="flex flex-col md:flex-row md:justify-center gap-6 md:gap-10 w-full">
            {team.map((member) => (
              <PersonCard key={member.name} person={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Ambassadors */}
      <section className="py-20 bg-cream-dark shadow-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-body text-xs uppercase tracking-widest text-saffron mb-3">
              Community Ambassadors
            </p>
            <h2 className="font-display text-4xl font-semibold text-foreground">Our Ambassadors</h2>
          </div>

          <div className="flex flex-col gap-6 md:gap-10">
            {ambassadorRows.map((row, i) => (
              <div key={i} className="flex flex-col md:flex-row md:justify-center gap-6 md:gap-10 w-full">
                {row.map((ambassador) => (
                  <PersonCard key={ambassador.name} person={ambassador} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteers */}
      <section className="py-20 bg-cream shadow-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-body text-xs uppercase tracking-widest text-saffron mb-3">Volunteers</p>
            <h2 className="font-display text-4xl font-semibold text-foreground mb-4">Our Volunteers</h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Our volunteers are the backbone of HCCD. Every event, every program, every smile is made possible by their dedication.
            </p>
          </div>

          <div className="group relative rounded-3xl overflow-hidden shadow-[0_8px_40px_-8px_hsl(25_40%_12%/0.2)]">
            <img
              src={volunteersImg}
              alt="HCCD volunteers at a community event"
              className="w-full aspect-video object-cover"
            />
            {volunteerLabels.map((v) => (
              <span
                key={v.name}
                style={{ left: `${v.x}%`, top: `${v.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-full -mt-2 bg-brown/85 text-cream text-xs font-body font-semibold px-2.5 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              >
                {v.name}
              </span>
            ))}
          </div>

          {/* Volunteer stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto text-center">
            {[
              { value: "20+", label: "Active Volunteers" },
              { value: "100+", label: "Hours Donated" },
              { value: "5+", label: "Events Supported" },
            ].map((s) => (
              <div key={s.label} className="bg-card border border-border rounded-2xl p-6 shadow-card">
                <p className="font-display text-4xl font-bold text-saffron">{s.value}</p>
                <p className="font-body text-xs text-muted-foreground mt-1 uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
