import { useState } from "react";
import anujImg from "@/assets/anuj-mishra.jpg";
import nidhiImg from "@/assets/nidhi-mishra.jpg";
import mukeshImg from "@/assets/mukesh-mishra.jpg";
import volunteersImg from "@/assets/volunteers.jpg";
import mandala from "@/assets/mandala.png";

type Member = {
  name: string;
  image: string;
};

// Order as provided by HCCD. Portfolios and bios will be added later.
const team: Member[] = [
  { name: "Anuj Mishra", image: anujImg },
  { name: "Priyank Lakhia", image: "/ambassador-photos/priyank-lakhia.jpg" },
  { name: "Kajal Pandya", image: "/ambassador-photos/kajal-pandya.jpg" },
  { name: "Nidhi Mishra", image: nidhiImg },
  { name: "Lata Sharma", image: "/ambassador-photos/lata-sharma.jpg" },
  { name: "Priti Gandhi", image: "/ambassador-photos/priti-gandhi.jpg" },
  { name: "Kiran M", image: "/ambassador-photos/kiran-m.jpg" },
  { name: "Mukesh Mishra", image: mukeshImg },
];

const volunteerLabels: { name: string; x: number; y: number }[] = [
  { name: "Harsh Patel", x: 19.3, y: 33.9 },
  { name: "Aarush Patel", x: 31.1, y: 31.25 },
  { name: "Yashvi Patel", x: 44.8, y: 43.2 },
  { name: "Niva Pandya", x: 53.6, y: 41.1 },
  { name: "Anuj Mishra", x: 72.1, y: 33.3 },
  { name: "Tanishka Sharma", x: 83.5, y: 42.2 },
];

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function MemberCard({ member }: { member: Member }) {
  const [imgError, setImgError] = useState(false);

  return (
    <figure className="group">
      <div className="relative aspect-4/5 rounded-3xl overflow-hidden border border-border shadow-card bg-cream-dark transition-all duration-300 group-hover:shadow-warm group-hover:-translate-y-1">
        {!imgError ? (
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-3 bg-linear-to-br from-saffron/15 to-gold/20"
            aria-label={`${member.name}, photo coming soon`}
            role="img"
          >
            <span className="font-display text-6xl font-semibold text-saffron/70">{initials(member.name)}</span>
            <span className="font-body text-[11px] uppercase tracking-widest text-brown-mid/60">Photo coming soon</span>
          </div>
        )}
      </div>
      <figcaption className="font-display text-xl font-semibold text-foreground text-center mt-4">
        {member.name}
      </figcaption>
    </figure>
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
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground">
              Meet Our <span className="text-saffron">Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {team.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Volunteers */}
      <section className="py-20 bg-cream-dark shadow-section">
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
