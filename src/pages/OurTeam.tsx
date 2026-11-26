import { Link } from "react-router";
import { useState } from "react";
import anujImg from "@/assets/anuj-mishra.jpg";
import nidhiImg from "@/assets/nidhi-mishra.jpg";
import mukeshImg from "@/assets/mukesh-mishra.jpg";
import volunteersImg from "@/assets/volunteers.jpg";
import PageHeader from "@/components/PageHeader";

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
      <div className="relative aspect-4/5 rounded-lg overflow-hidden border border-border shadow-card bg-cream-dark transition-all duration-300 group-hover:shadow-warm group-hover:-translate-y-1">
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
            <span className="font-body text-[11px] uppercase tracking-widest text-foreground/50">Photo coming soon</span>
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
    <main className="pt-16">
      <PageHeader title={<>Our <span className="text-saffron">Team</span></>}>
        HCCD is powered by dedicated volunteers and leaders who give their time and heart to serve our community.
      </PageHeader>

      {/* Team */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-5xl font-bold text-foreground leading-none mb-12">Meet our team</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 ">
            {team.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Volunteers */}
      <section className="py-20 bg-cream-dark">
        <div className="container mx-auto px-6">
          <div className="mb-10 grid lg:grid-cols-12 gap-6 items-end">
            <h2 className="lg:col-span-5 font-display text-5xl font-bold text-foreground leading-none">Our volunteers</h2>
            <p className="lg:col-span-6 font-body text-foreground/70 max-w-xl">
              Our volunteers are the backbone of HCCD. Every event, every program, every smile is made possible by their dedication.
            </p>
          </div>

          <div className="group relative rounded-lg overflow-hidden shadow-[0_8px_40px_-8px_hsl(25_40%_12%/0.2)]">
            <img
              src={volunteersImg}
              alt="HCCD volunteers at a community event"
              className="w-full aspect-video object-cover"
            />
            {volunteerLabels.map((v) => (
              <span
                key={v.name}
                style={{ left: `${v.x}%`, top: `${v.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-full -mt-2 bg-night/90 text-cream text-xs font-body font-semibold px-2.5 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              >
                {v.name}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              to="/join"
              className="inline-flex items-center bg-saffron text-primary-foreground font-body font-semibold px-7 py-3.5 rounded-md hover:bg-saffron-dark transition-colors"
            >
              Volunteer with us
            </Link>
            <Link to="/contact" className="font-body font-semibold text-saffron-dark hover:underline underline-offset-4">
              Join a WhatsApp group →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
