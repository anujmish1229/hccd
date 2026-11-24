import { Link } from "react-router";
import { Award, ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { sponsors } from "@/lib/supporters";

export default function Sponsors() {
  return (
    <main className="pt-[65px]">
      <PageHeader eyebrow="With Gratitude" title={<>Our <span className="text-saffron">Sponsors</span></>}>
        Our celebrations are made possible by local businesses who believe in culture, community and togetherness.
      </PageHeader>

      <section className="py-20 bg-cream shadow-section">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sponsors.map((s) => (
              <article
                key={s.name}
                className="bg-card rounded-2xl p-8 border border-border shadow-card flex flex-col items-center text-center"
              >
                {s.logo ? (
                  <img src={s.logo} alt={`${s.name} logo`} className="h-24 w-auto object-contain mb-6" />
                ) : (
                  <span className="w-16 h-16 rounded-full bg-saffron/10 text-saffron flex items-center justify-center mb-6">
                    <Award size={30} />
                  </span>
                )}
                <h2 className="font-display text-2xl font-semibold text-foreground mb-3">{s.name}</h2>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                {s.url && (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-saffron font-body font-semibold text-sm hover:underline"
                  >
                    Visit website <ExternalLink size={13} />
                  </a>
                )}
              </article>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="font-body text-muted-foreground mb-4">Interested in sponsoring an HCCD event?</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-saffron text-primary-foreground font-body font-semibold px-7 py-3 rounded-full hover:bg-saffron-dark transition-colors shadow-warm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
