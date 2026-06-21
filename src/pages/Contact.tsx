import { useState } from "react";
import { Send, CheckCircle, MessageCircle } from "lucide-react";
import mandala from "@/assets/mandala.png";

const WHATSAPP_GROUPS = [
  {
    label: "General Volunteers",
    description: "Help us run our events and make a difference in the community",
    link: "https://chat.whatsapp.com/Buy1nM95TYJ0ljNQpYbPQt",
    emoji: "🏡",
  },
  {
    label: "Events & Updates",
    description: "Get notified about upcoming events",
    link: "https://chat.whatsapp.com/CCPwog8RCW0DBF9yUivG3q",
    emoji: "🎉",
  },
  {
    label: "Youth Volunteers",
    description: "Connect with other youth volunteers in the community  ",
    link: "https://chat.whatsapp.com/CCPwog8RCW0DBF9yUivG3q",
    emoji: "🙂",
  },
];

type FormState = { name: string; contact: string; message: string };

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>({ name: "", contact: "", message: "" });

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
    <main className="pt-20">
      {/* Header */}
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

      {/* Contact section */}
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
                    className="w-10 h-10 rounded-full bg-saffron/10 border border-saffron/20 flex items-center justify-center text-saffron hover:bg-saffron hover:text-primary-foreground transition-colors text-sm font-semibold">
                    IG
                  </a>
                  <a href="https://www.facebook.com/hccd.durham" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-saffron/10 border border-saffron/20 flex items-center justify-center text-saffron hover:bg-saffron hover:text-primary-foreground transition-colors text-sm font-semibold">
                    FB
                  </a>
                  <a href="https://www.eventbrite.com/o/hindu-community-centre-of-durham-hccd-114637567781" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-saffron/10 border border-saffron/20 flex items-center justify-center text-saffron hover:bg-saffron hover:text-primary-foreground transition-colors text-sm font-semibold">
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
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-saffron text-primary-foreground font-body font-semibold px-8 py-3.5 rounded-full hover:bg-saffron-dark transition-all duration-200 shadow-warm hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send size={16} />
                    {submitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Community */}
      <section className="py-16 bg-cream-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <MessageCircle className="w-6 h-6 text-saffron" />
              <p className="font-body text-xs uppercase tracking-widest text-saffron">Stay Connected</p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Join Our WhatsApp Community
            </h2>
            <p className="font-body text-muted-foreground mb-10 max-w-xl mx-auto">
              Be the first to know about events, announcements, and community updates. Join one of our WhatsApp groups below.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl mx-auto">
              {WHATSAPP_GROUPS.map((group) => (
                <a
                  key={group.label}
                  href={group.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 bg-card border border-border rounded-2xl p-6 hover:border-saffron/40 hover:shadow-warm hover:-translate-y-0.5 transition-all duration-200 shadow-card group"
                >
                  <span className="text-4xl">{group.emoji}</span>
                  <div className="text-center">
                    <p className="font-display text-lg font-semibold text-foreground group-hover:text-saffron transition-colors">
                      {group.label}
                    </p>
                    <p className="font-body text-sm text-muted-foreground mt-1">{group.description}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 bg-[#25D366] text-white font-body font-semibold text-sm px-5 py-2 rounded-full mt-1">
                    <MessageCircle size={14} />
                    Join Group
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
