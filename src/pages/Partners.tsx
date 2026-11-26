import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import Lightbox, { type LightboxImage } from "@/components/Lightbox";
import { partners } from "@/lib/supporters";

export default function Partners() {
  const [lightbox, setLightbox] = useState<{ images: LightboxImage[]; index: number } | null>(null);

  return (
    <main className="pt-16">
      {lightbox && (
        <Lightbox images={lightbox.images} startIndex={lightbox.index} onClose={() => setLightbox(null)} />
      )}

      <PageHeader title={<>Our <span className="text-saffron">Partners</span></>}>
        We are proud to work alongside our local municipalities to bring culture and community to Durham Region.
      </PageHeader>

      <section className="bg-cream">
        <div className="container mx-auto px-6 py-16 sm:py-20 grid md:grid-cols-2 gap-x-10 gap-y-16">
          {partners.map((p) => (
            <article key={p.name} className="flex flex-col border-t-2 border-foreground pt-6">
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-none mb-3">{p.name}</h2>
              <p className="font-body text-foreground/70 mb-8 max-w-md">{p.description}</p>

              {p.certificates.length > 0 ? (
                <div className={p.certificates.length > 1 ? "grid grid-cols-2 gap-4" : ""}>
                  {p.certificates.map((c, index) => (
                    <button
                      type="button"
                      key={c.src}
                      onClick={() => setLightbox({ images: p.certificates, index })}
                      className="group block w-full text-left cursor-zoom-in"
                    >
                      <span className="flex items-center justify-center h-72 sm:h-[26rem] bg-cream-dark rounded-md p-4 sm:p-6 group-hover:bg-saffron/10 transition-colors">
                        <img
                          src={c.src}
                          alt={`Certificate from ${c.caption}`}
                          loading="lazy"
                          className="max-h-full max-w-full object-contain shadow-[0_12px_30px_-12px_hsl(199_48%_12%/0.35)]"
                        />
                      </span>
                      <span className="block font-body text-sm text-foreground/60 mt-3">
                        Certificate of recognition from {c.caption}
                      </span>
                    </button>
                  ))}
                </div>
              ) : (
                <p className="flex items-center justify-center h-72 sm:h-[26rem] bg-cream-dark rounded-md font-body text-sm text-foreground/60">
                  Certificates of recognition coming soon.
                </p>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
