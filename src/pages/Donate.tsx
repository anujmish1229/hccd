import { useState } from "react";
import { Link } from "react-router";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import PageHeader from "@/components/PageHeader";
import { donation } from "@/lib/supporters";
import seniorsNiagara from "@/assets/photo-seniors-niagara.jpg";

const MESSAGE = "Donation for HCCD";

function CopyRow({ label, value, display }: { label: string; value: string; display?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast.success(`${label} copied`);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy. Please copy it manually.");
    }
  };

  return (
    <div className="py-5 border-b border-dashed border-night/25 last:border-b-0">
      <p className="font-body text-xs font-semibold text-night/60 mb-2">{label}</p>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <p className="font-display text-2xl sm:text-3xl font-semibold text-night leading-tight [overflow-wrap:anywhere]">{display ?? value}</p>
        <button
          type="button"
          onClick={copy}
          aria-label={`Copy ${label.toLowerCase()}`}
          className="self-start sm:self-auto shrink-0 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-night border border-night/30 rounded-md px-3 py-2 hover:bg-night hover:text-cream transition-colors"
        >
          {copied ? <Check size={15} /> : <Copy size={15} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}

export default function Donate() {
  const { etransferEmail } = donation;

  return (
    <main className="pt-16">
      <PageHeader
        title={<>Support <span className="text-saffron">HCCD</span></>}
        image={seniorsNiagara}
        imageAlt="Seniors on the HCCD trip to Niagara Falls"
      >
        Your generosity helps us run festivals, seniors' trips and community programs across Durham Region.
        Every contribution, big or small, makes a difference.
      </PageHeader>

      <section className="bg-cream">
        <div className="container mx-auto px-6 py-20 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-display text-5xl font-bold text-foreground leading-none mb-6">
              Give by Interac e&#8209;Transfer
            </h2>
            <p className="font-body text-foreground/70 leading-relaxed mb-10 max-w-md">
              Send an e-Transfer from your bank app in three steps.
            </p>

            <ol className="border-t-2 border-foreground">
              {[
                <>Open <strong className="font-semibold text-foreground">Interac e-Transfer</strong> in your bank app and add our email as a recipient.</>,
                <>Enter the amount you would like to give.</>,
                <>In the message, write <strong className="font-semibold text-foreground">"{MESSAGE}"</strong> followed by your name.</>,
              ].map((step, i) => (
                <li key={i} className="grid grid-cols-[2.5rem_1fr] py-5 border-b border-border">
                  <span className="font-display text-3xl font-bold text-saffron leading-none">{i + 1}</span>
                  <p className="font-body text-foreground/75 leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-7">
            {etransferEmail ? (
              <div className="bg-gold rounded-md p-8 sm:p-10 shadow-[0_24px_60px_-24px_hsl(43_80%_30%/0.6)]">
                <p className="font-display text-3xl sm:text-4xl font-bold text-night leading-none mb-3">Transfer details</p>
                <CopyRow label="Send to" value={etransferEmail} />
                <CopyRow label="Message" value={`${MESSAGE} `} display={`${MESSAGE} + your name`} />
              </div>
            ) : (
              <p className="font-body text-foreground/70">E-transfer details coming soon.</p>
            )}

            <p className="font-body text-sm text-foreground/60 mt-8">
              Prefer to help in another way?{" "}
              <Link to="/join" className="font-semibold text-saffron-dark hover:underline underline-offset-4">
                Volunteer with us
              </Link>{" "}
              or{" "}
              <Link to="/contact" className="font-semibold text-saffron-dark hover:underline underline-offset-4">
                get in touch
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
