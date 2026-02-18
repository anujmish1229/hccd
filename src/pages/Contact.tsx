import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import mandala from "@/assets/mandala.png";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Netlify forms: real submission happens via Netlify — we just show success state
    // The form will POST to Netlify on production
    setSubmitted(true);
  };

  return (
    <main className="pt-20">
      {/* ── Page Header ─────────────────────────────── */}
      <section className="bg-cream-dark py-20 relative overflow-hidden">
        <img src={mandala} alt="" aria-hidden className="absolute right-10 top-1/2 -translate-y-1/2 w-72 opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <p className="font-body text-xs uppercase tracking-widest text-saffron mb-3">We'd Love to Hear From You</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-foreground mb-4">
            Get in <span className="text-saffron">Touch</span>
          </h1>
          <div className="w-16 h-1 rounded bg-gold mb-6" />
          <p className="font-body text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Have a question, a partnership idea, or just want to say hello? Fill out the form below and we'll get back to you soon.
          </p>
        </div>
      </section>

      {/* ── Contact section ─────────────────────────── */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Left: info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-3xl font-semibold text-foreground mb-6">Contact Information</h2>
                {[
                  { label: "Email", value: "hinducommunitycentre@gmail.com", icon: "✉️" },
                  { label: "Location", value: "Durham Region, Ontario", icon: "📍" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-start mb-5">
                    <span className="text-2xl mt-0.5">{item.icon}</span>
                    <div>
                      <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className="font-body text-foreground font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="border-t border-border pt-6">
                <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-4">Follow Us</p>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/hccd_durham/" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-saffron/10 border border-saffron/20 flex items-center justify-center text-saffron hover:bg-saffron hover:text-primary-foreground transition-colors text-sm">
                    IG
                  </a>
                  <a href="https://www.facebook.com/hccd.durham" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-saffron/10 border border-saffron/20 flex items-center justify-center text-saffron hover:bg-saffron hover:text-primary-foreground transition-colors text-sm">
                    FB
                  </a>
                  <a href="https://www.eventbrite.com/o/hindu-community-centre-of-durham-hccd-114637567781" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-saffron/10 border border-saffron/20 flex items-center justify-center text-saffron hover:bg-saffron hover:text-primary-foreground transition-colors text-sm">
                    EB
                  </a>
                </div>
              </div>

              {/* Decorative quote */}
              <div className="bg-saffron/8 border border-saffron/15 rounded-2xl p-6">
                <p className="font-display text-xl italic text-foreground leading-relaxed">
                  "अतिथि देवो भव"
                </p>
                <p className="font-body text-sm text-muted-foreground mt-2">
                  "The Guest is God" — we welcome every inquiry with open arms.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-card border border-border rounded-3xl p-12 text-center shadow-card">
                  <CheckCircle className="w-16 h-16 text-saffron mx-auto mb-4" />
                  <h3 className="font-display text-3xl font-semibold text-foreground mb-3">Message Sent!</h3>
                  <p className="font-body text-muted-foreground">
                    Thank you for reaching out. We'll get back to you within 2–3 business days. 🙏
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", contact: "", message: "" }); }}
                    className="mt-8 font-body text-sm text-saffron underline underline-offset-2 hover:text-saffron-dark"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  name="hccd-contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="bg-card border border-border rounded-3xl p-8 sm:p-10 shadow-card space-y-6"
                >
                  {/* Netlify hidden fields */}
                  <input type="hidden" name="form-name" value="hccd-contact" />
                  <p className="hidden">
                    <label>Don't fill this: <input name="bot-field" /></label>
                  </p>

                  <div>
                    <label htmlFor="name" className="block font-body text-sm font-medium text-foreground mb-2">
                      Full Name <span className="text-saffron">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full font-body text-sm px-4 py-3 rounded-xl border border-input bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-saffron/40 focus:border-saffron transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact" className="block font-body text-sm font-medium text-foreground mb-2">
                      Email Address or Phone Number <span className="text-saffron">*</span>
                    </label>
                    <input
                      id="contact"
                      name="contact"
                      type="text"
                      required
                      value={form.contact}
                      onChange={handleChange}
                      placeholder="email@example.com or (905) 555-0000"
                      className="w-full font-body text-sm px-4 py-3 rounded-xl border border-input bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-saffron/40 focus:border-saffron transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-body text-sm font-medium text-foreground mb-2">
                      Message <span className="text-saffron">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="w-full font-body text-sm px-4 py-3 rounded-xl border border-input bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-saffron/40 focus:border-saffron transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-saffron text-primary-foreground font-body font-semibold px-8 py-3.5 rounded-full hover:bg-saffron-dark transition-all duration-200 shadow-warm hover:shadow-lg"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
