import { useState } from "react";
import { Award, Landmark } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Lightbox, { type LightboxImage } from "@/components/Lightbox";
import { partners } from "@/lib/supporters";

export default function Partners() {
  const [lightbox, setLightbox] = useState<{ images: LightboxImage[]; index: number } | null>(null);

  return (
    <main className="pt-[65px]">
      {lightbox && (
        <Lightbox images={lightbox.images} startIndex={lightbox.index} onClose={() => setLightbox(null)} />
      )}

      <PageHeader eyebrow="Working Together" title={<>Our <span className="text-saffron">Partners</span></>}>
        We are proud to work alongside our local municipalities to bring culture and community to Durham Region.
      </PageHeader>

      {partners.map((p, i) => (
        <section key={p.name} className={`py-16 shadow-section ${i % 2 === 0 ? "bg-cream" : "bg-cream-dark"}`}>
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-12 rounded-full bg-saffron/10 text-saffron flex items-center justify-center shrink-0">
                <Landmark size={24} />
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">{p.name}</h2>
            </div>
            <p className="font-body text-muted-foreground max-w-2xl mb-8">{p.description}</p>

            {p.certificates.length > 0 ? (
              <>
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">Certificates of Recognition</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                  {p.certificates.map((c, index) => (
                    <button
                      type="button"
                      key={c.src}
                      onClick={() => setLightbox({ images: p.certificates, index })}
                      className="group block text-left cursor-zoom-in"
                    >
                      <img
                        src={c.src}
                        alt={`Certificate from ${c.caption}`}
                        loading="lazy"
                        className="w-full aspect-3/4 object-contain bg-white p-1.5 rounded-lg border border-border group-hover:shadow-warm transition-shadow"
                      />
                      <span className="block font-body text-xs text-muted-foreground mt-1.5 leading-snug">{c.caption}</span>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="max-w-sm rounded-2xl border-2 border-dashed border-saffron/25 bg-white/50 px-6 py-10 text-center">
                <Award size={28} className="mx-auto text-saffron/60 mb-3" />
                <p className="font-body text-sm text-muted-foreground">Certificates of recognition coming soon.</p>
              </div>
            )}
          </div>
        </section>
      ))}
    </main>
  );
}
