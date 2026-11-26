import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Shared page header: a large title and intro on cream and an optional photo,
 * with a hairline border along the bottom.
 */
export default function PageHeader({
  title,
  children,
  image,
  imageAlt = "",
  imagePosition = "center",
}: {
  title: ReactNode;
  children?: ReactNode;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
}) {
  return (
    <section className="bg-cream-dark relative border-b border-border">
      <div
        className={cn(
          "container mx-auto px-6 pt-16 pb-14 sm:pt-20 sm:pb-16 grid gap-10 items-end",
          image && "lg:grid-cols-12",
        )}
      >
        <div className={cn(image && "lg:col-span-6")}>
          <h1 className="font-display text-5xl sm:text-7xl font-bold text-foreground leading-[0.95] tracking-tight mb-6 text-balance">
            {title}
          </h1>
          {children && (
            <p className="font-body text-lg text-foreground/70 max-w-xl leading-relaxed">{children}</p>
          )}
        </div>
        {image && (
          <div className="lg:col-span-6 relative">
            <div className="absolute -right-3 -bottom-3 w-2/3 h-2/3 bg-saffron rounded-md" aria-hidden />
            <img
              src={image}
              alt={imageAlt}
              className="relative w-full h-64 sm:h-80 object-cover rounded-md"
              style={{ objectPosition: imagePosition }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
