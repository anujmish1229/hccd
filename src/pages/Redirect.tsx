import { useEffect } from "react";

type RedirectProps = {
  to: string;
  delay?: number; // milliseconds
};

export default function Redirect({ to, delay = 0 }: RedirectProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = to;
    }, delay);

    return () => clearTimeout(timer);
  }, [to, delay]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-cream">
      <div className="text-center font-body text-muted-foreground">
        <p className="text-lg mb-2">Redirecting...</p>
        <p className="text-sm">
          If you are not redirected,{" "}
          <a href={to} className="text-saffron underline">
            click here
          </a>.
        </p>
      </div>
    </div>
  );
}