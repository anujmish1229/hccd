import anujImg from "@/assets/anuj-mishra.jpg";
import nidhiImg from "@/assets/nidhi-mishra.jpg";
import mukeshImg from "@/assets/mukesh-mishra.jpg";
import volunteersImg from "@/assets/volunteers.jpg";
import mandala from "@/assets/mandala.png";

const founder = {
  name: "Anuj Mishra",
  role: "Founder & President",
  image: anujImg,
  bio: "Hey! I'm Anuj, the founder of HCCD. My vision for HCCD is to create a vibrant community space where we can celebrate our culture, support each other, and make a positive impact in our city. I started HCCD because I believe in the power of community and wanted to create a platform for us to connect, learn, and grow together. When I'm not working on HCCD, you can find me exploring new cuisines, building robots, or planning our next big event!",
};

const boardMembers = [
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

export default function OurTeam() {
  return (
    <main className="pt-20">
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

      {/* Founder */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-body text-xs uppercase tracking-widest text-saffron mb-3">
              Leadership
            </p>
            <h2 className="font-display text-4xl font-semibold text-foreground">Founder</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 flex flex-col md:flex-row">
              <div className="md:w-80 flex-shrink-0">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-72 md:h-full object-cover object-top"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-saffron/10 border border-saffron/20 text-saffron rounded-full px-4 py-1.5 text-xs font-body font-semibold uppercase tracking-wider mb-4 w-fit">
                  {founder.role}
                </div>
                <h3 className="font-display text-3xl font-bold text-foreground mb-4">{founder.name}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{founder.bio}</p>
                <div className="mt-6 h-px bg-gradient-to-r from-saffron/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-20 bg-cream-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-body text-xs uppercase tracking-widest text-saffron mb-3">
              Governance
            </p>
            <h2 className="font-display text-4xl font-semibold text-foreground">Board Members</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="bg-card border border-border rounded-3xl overflow-hidden shadow-card hover:shadow-warm hover:border-saffron/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-saffron text-primary-foreground text-xs font-body font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                      {member.role}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">{member.name}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteers */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-body text-xs uppercase tracking-widest text-saffron mb-3">Volunteers</p>
            <h2 className="font-display text-4xl font-semibold text-foreground mb-4">Our Volunteers</h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Our volunteers are the backbone of HCCD. Every event, every program, every smile is made possible by their dedication.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-[0_8px_40px_-8px_hsl(25_40%_12%/0.2)]">
            <img
              src={volunteersImg}
              alt="HCCD volunteers at a community event"
              className="w-full h-96 object-cover"
            />
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
