import { useState } from "react";
import { Heart } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import garba from "@/assets/photo-garba.jpg";

export default function Join() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    about: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const body = new URLSearchParams(new FormData(e.currentTarget) as never).toString();
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
    } catch (err) {
      console.error("Form submission error:", err);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <main className="pt-16">
      <PageHeader
        title={<>Join <span className="text-saffron">HCCD</span></>}
        image={garba}
        imageAlt="Families dancing Garba at HCCD's Navratri Garba Night"
      >
        Become a member of our growing family. Whether you want to volunteer, attend events, or simply connect
        with the community, there's a place for you at HCCD.
      </PageHeader>

      {/* ── Benefits ────────────────────────────────── */}
      <section className="py-16 bg-cream-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            {[
              { title: "Event Access", desc: "Hear first about our festivals, workshops, trips and cultural programs." },
              { title: "Community", desc: "Connect with families across Durham Region who share your values and heritage." },
              { title: "Make a Difference", desc: "Volunteer and contribute to meaningful service in the Durham community." },
            ].map((b) => (
              <div key={b.title} className="bg-card rounded-lg p-6 border border-border shadow-card">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Join Form ───────────────────────────────── */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-4xl font-semibold text-foreground mb-3">Tell Us About Yourself</h2>
              <p className="font-body text-muted-foreground">
                Fill out the form below and a member of our team will reach out to welcome you.
              </p>
            </div>

            {submitted ? (
              <div className="bg-card border border-border rounded-lg p-12 text-center shadow-card animate-scale-in">
                <h3 className="font-display text-3xl font-semibold text-foreground mb-3">
                  Welcome to HCCD!
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-2">
                  Thank you for joining our family. We're thrilled to have you with us.
                </p>
                <p className="font-body text-muted-foreground text-sm">
                  One of our team members will reach out to you soon with next steps.
                </p>
                <p className="mt-6 text-saffron font-display text-lg italic">Vasudhaiva Kutumbakam</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ fullName: "", email: "", phone: "", about: "" }); }}
                  className="mt-8 font-body text-sm text-saffron underline underline-offset-2 hover:text-saffron-dark"
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <form
                name="hccd-join"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="bg-card border border-border rounded-lg p-8 sm:p-10 shadow-card space-y-6"
              >
                <input type="hidden" name="form-name" value="hccd-join" />
                <p className="hidden">
                  <label>Don't fill: <input name="bot-field" /></label>
                </p>

                <div>
                  <label htmlFor="fullName" className="block font-body text-sm font-medium text-foreground mb-2">
                    Full Name <span className="text-saffron">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full font-body text-sm px-4 py-3 rounded-xl border border-input bg-background placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-saffron/40 focus:border-saffron transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-body text-sm font-medium text-foreground mb-2">
                    Email Address <span className="text-saffron">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full font-body text-sm px-4 py-3 rounded-xl border border-input bg-background placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-saffron/40 focus:border-saffron transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-body text-sm font-medium text-foreground mb-2">
                    Phone Number <span className="text-saffron">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(905) 555-0000"
                    className="w-full font-body text-sm px-4 py-3 rounded-xl border border-input bg-background placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-saffron/40 focus:border-saffron transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="about" className="block font-body text-sm font-medium text-foreground mb-2">
                    Tell Us About Yourself <span className="text-saffron">*</span>
                  </label>
                  <textarea
                    id="about"
                    name="about"
                    rows={6}
                    required
                    value={form.about}
                    onChange={handleChange}
                    placeholder="Share a little about yourself; your interests, how you heard about HCCD, how you'd like to get involved..."
                    className="w-full font-body text-sm px-4 py-3 rounded-xl border border-input bg-background placeholder:text-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-saffron/40 focus:border-saffron transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-saffron text-primary-foreground font-body font-semibold px-8 py-3.5 rounded-md hover:bg-saffron-dark transition-all duration-200 shadow-warm hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Heart size={16} />
                  {submitting ? "Submitting..." : "Join HCCD"}
                </button>

                <p className="font-body text-xs text-center text-muted-foreground">
                  By submitting this form, you agree to be contacted by HCCD. We respect your privacy.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
