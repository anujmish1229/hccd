import { useState } from "react";
import { CheckCircle, Heart } from "lucide-react";
import mandala from "@/assets/mandala.png";
import community from "@/assets/community.jpg";

export default function Join() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    about: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setSubmitted(true);
  };

  return (
    <main className="pt-20">
      {/* ── Page Header ─────────────────────────────── */}
      <section className="relative overflow-hidden">
        <img src={community} alt="HCCD community" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative z-10 bg-gradient-to-br from-cream-dark via-cream to-cream py-24">
          <img src={mandala} alt="" aria-hidden className="absolute right-10 top-1/2 -translate-y-1/2 w-72 opacity-10 pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <p className="font-body text-xs uppercase tracking-widest text-saffron mb-3">Be Part of Something Beautiful</p>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-foreground mb-4">
              Join <span className="text-saffron">HCCD</span>
            </h1>
            <div className="w-16 h-1 rounded bg-gold mb-6" />
            <p className="font-body text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Become a member of our growing family. Whether you want to volunteer, attend events, or simply connect
              with the community — there's a place for you at HCCD.
            </p>
          </div>
        </div>
      </section>

      {/* ── Benefits ────────────────────────────────── */}
      <section className="py-16 bg-cream-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            {[
              { icon: "🎉", title: "Event Access", desc: "Priority access to all HCCD festivals, workshops, and cultural programs." },
              { icon: "🤝", title: "Community", desc: "Connect with hundreds of families who share your values and heritage." },
              { icon: "❤️", title: "Make a Difference", desc: "Volunteer and contribute to meaningful service in the Durham community." },
            ].map((b) => (
              <div key={b.title} className="bg-card rounded-2xl p-6 border border-border shadow-card">
                <span className="text-3xl block mb-3">{b.icon}</span>
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
              <p className="font-body text-xs uppercase tracking-widest text-saffron mb-3">Membership Application</p>
              <h2 className="font-display text-4xl font-semibold text-foreground mb-3">Tell Us About Yourself</h2>
              <p className="font-body text-muted-foreground">
                Fill out the form below and a member of our team will reach out to welcome you.
              </p>
            </div>

            {submitted ? (
              <div className="bg-card border border-border rounded-3xl p-12 text-center shadow-card animate-scale-in">
                <div className="w-20 h-20 rounded-full bg-saffron/10 border border-saffron/20 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-10 h-10 text-saffron" />
                </div>
                <h3 className="font-display text-3xl font-semibold text-foreground mb-3">
                  Welcome to HCCD! 🙏
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-2">
                  Thank you for joining our family. We're thrilled to have you with us.
                </p>
                <p className="font-body text-muted-foreground text-sm">
                  One of our team members will reach out to you soon with next steps.
                </p>
                <div className="mt-6 flex items-center justify-center gap-2 text-saffron font-display text-lg italic">
                  <Heart size={18} className="fill-saffron" />
                  Vasudhaiva Kutumbakam
                  <Heart size={18} className="fill-saffron" />
                </div>
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
                className="bg-card border border-border rounded-3xl p-8 sm:p-10 shadow-card space-y-6"
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
                    className="w-full font-body text-sm px-4 py-3 rounded-xl border border-input bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-saffron/40 focus:border-saffron transition-colors"
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
                    className="w-full font-body text-sm px-4 py-3 rounded-xl border border-input bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-saffron/40 focus:border-saffron transition-colors"
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
                    placeholder="(919) 555-0000"
                    className="w-full font-body text-sm px-4 py-3 rounded-xl border border-input bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-saffron/40 focus:border-saffron transition-colors"
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
                    placeholder="Share a little about yourself — your interests, how you heard about HCCD, how you'd like to get involved..."
                    className="w-full font-body text-sm px-4 py-3 rounded-xl border border-input bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-saffron/40 focus:border-saffron transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-saffron text-primary-foreground font-body font-semibold px-8 py-3.5 rounded-full hover:bg-saffron-dark transition-all duration-200 shadow-warm hover:shadow-lg"
                >
                  <Heart size={16} />
                  Join HCCD
                </button>

                <p className="font-body text-xs text-center text-muted-foreground">
                  By submitting this form, you agree to be contacted by HCCD. We respect your privacy.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── Closing quote ───────────────────────────── */}
      <section className="bg-brown py-16 text-center">
        <div className="container mx-auto px-6">
          <p className="font-display text-3xl sm:text-4xl text-cream font-medium italic mb-3">
            "वसुधैव कुटुम्बकम्"
          </p>
          <p className="font-body text-gold/80 text-sm uppercase tracking-widest">
            The World Is One Family — Join Ours
          </p>
        </div>
      </section>
    </main>
  );
}
