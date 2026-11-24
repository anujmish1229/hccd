import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type LightboxImage = { src: string; caption?: string };

/** Full-screen image viewer. Esc closes, arrow keys move between images. */
export default function Lightbox({
  images,
  startIndex = 0,
  onClose,
}: {
  images: LightboxImage[];
  startIndex?: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);
  const count = images.length;
  const prev = () => setCurrent((c) => (c - 1 + count) % count);
  const next = () => setCurrent((c) => (c + 1) % count);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      // Capture so an underlying modal's Escape handler doesn't also close.
      e.stopImmediatePropagation();
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") setCurrent((c) => (c - 1 + count) % count);
      else if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % count);
    };
    window.addEventListener("keydown", onKey, true);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey, true);
    };
  }, [onClose, count]);

  if (count === 0) return null;
  const image = images[current];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/95"
      onClick={(e) => { e.stopPropagation(); onClose(); }}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/25 text-white rounded-full p-2 transition-colors"
        aria-label="Close image viewer"
      >
        <X size={24} />
      </button>

      <img
        key={image.src}
        src={image.src}
        alt={image.caption ?? `Image ${current + 1}`}
        onClick={(e) => e.stopPropagation()}
        className="max-w-[100vw] max-h-[calc(100vh-5rem)] object-contain select-none"
      />

      <div className="mt-3 px-4 text-center font-body text-sm text-white/80">
        {image.caption && <span>{image.caption}</span>}
        {count > 1 && <span className="ml-2 text-white/50">{current + 1} / {count}</span>}
      </div>

      {count > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white rounded-full p-3 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={26} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white rounded-full p-3 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={26} />
          </button>
        </>
      )}
    </div>
  );
}
