import { Copy, Heart, Mail } from "lucide-react";
import { toast } from "sonner";
import PageHeader from "@/components/PageHeader";
import { donation } from "@/lib/supporters";

export default function Donate() {
  const { etransferEmail, instructions } = donation;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(etransferEmail);
      toast.success("E-transfer email copied");
    } catch {
      toast.error("Couldn't copy. Please copy the email manually.");
    }
  };

  return (
    <main className="pt-[65px]">
      <PageHeader eyebrow="Support Our Seva" title={<>Donate to <span className="text-saffron">HCCD</span></>}>
        Your generosity helps us run festivals, seniors' trips and community programs across Durham Region.
        Every contribution, big or small, makes a difference.
      </PageHeader>

      <section className="py-20 bg-cream shadow-section">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto bg-card rounded-3xl p-8 sm:p-10 border border-border shadow-card text-center">
            <span className="w-16 h-16 rounded-full bg-saffron/10 text-saffron flex items-center justify-center mx-auto mb-6">
              <Heart size={30} />
            </span>
            <h2 className="font-display text-3xl font-semibold text-foreground mb-2">Donate by Interac e-Transfer</h2>

            {etransferEmail ? (
              <>
                <p className="font-body text-muted-foreground mb-6">Send your e-transfer to:</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-cream-dark rounded-2xl px-5 py-4 mb-6">
                  <Mail size={18} className="text-saffron shrink-0" />
                  <span className="font-body font-semibold text-foreground break-all">{etransferEmail}</span>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1.5 bg-saffron text-primary-foreground font-body font-semibold text-xs px-4 py-2 rounded-full hover:bg-saffron-dark transition-colors shrink-0"
                  >
                    <Copy size={13} /> Copy
                  </button>
                </div>
                {instructions.length > 0 && (
                  <ol className="text-left font-body text-sm text-muted-foreground space-y-2 list-decimal pl-5">
                    {instructions.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ol>
                )}
              </>
            ) : (
              <p className="font-body text-muted-foreground">E-transfer details coming soon.</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
