import type { ReactNode } from "react";
import mandala from "@/assets/mandala.png";

export default function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="bg-cream-dark py-20 relative overflow-hidden">
      <img
        src={mandala}
        alt=""
        aria-hidden
        className="absolute right-10 top-1/2 -translate-y-1/2 w-72 opacity-10 pointer-events-none"
      />
      <div className="container mx-auto px-6 relative z-10">
        <p className="font-body text-xs uppercase tracking-widest text-saffron mb-3">{eyebrow}</p>
        <h1 className="font-display text-5xl sm:text-6xl font-bold text-foreground mb-4">{title}</h1>
        <div className="w-16 h-1 rounded bg-gold mb-6" />
        {children && (
          <p className="font-body text-lg text-muted-foreground max-w-2xl leading-relaxed">{children}</p>
        )}
      </div>
    </section>
  );
}
