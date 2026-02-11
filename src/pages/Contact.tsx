import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { FadeIn } from "@/components/AnimatedElements";

import SEO from "@/components/SEO";

const Contact = () => (
  <>
    <SEO 
      title="Contact Us - Web Design Service"
      description="Get in touch with RoPratech for your website and app development needs in Gadchiroli. Call or WhatsApp us today!"
    />
    <section className="hero-gradient text-white py-20 md:py-28 relative overflow-hidden">
      <div className="floating-orb w-72 h-72 bg-gold/10 top-[-10%] right-[10%]" />
      <div className="floating-orb w-48 h-48 bg-primary/15 bottom-[10%] left-[5%]" style={{ animationDelay: "3s" }} />
      <div className="container max-w-3xl text-center relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-sm text-gold mb-6">
            <Zap className="h-4 w-4 text-gold" /> Let's Talk
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black">Contact Us</h1>
          <p className="mt-6 text-white/50 text-lg">
            We'd love to hear from you. Reach out via WhatsApp, call, or the form below.
          </p>
          <div className="mt-8">
            <a href="https://wa.me/919999999999?text=Hi%20RoPratech" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-white gap-2 rounded-xl shadow-xl shadow-whatsapp/25 h-12 px-8">
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <SectionHeading title="Send Us a Message" center={false} />
            <FadeIn>
              <div className="bg-card rounded-2xl border p-6 md:p-8 shadow-sm">
                <ContactForm />
              </div>
            </FadeIn>
          </div>
          <div>
            <SectionHeading title="Other Ways to Reach Us" center={false} />
            <div className="space-y-4">
              {[
                { icon: MessageCircle, label: "WhatsApp", value: "+91 99999 99999", href: "https://wa.me/919999999999", target: "_blank", iconBg: "bg-whatsapp/10", iconColor: "text-whatsapp" },
                { icon: Phone, label: "Phone", value: "+91 99999 99999", href: "tel:+919999999999", iconBg: "bg-gold/10", iconColor: "text-gold" },
                { icon: Mail, label: "Email", value: "ropratech@gmail.com", href: "mailto:ropratech@gmail.com", iconBg: "bg-gold/10", iconColor: "text-gold" },
                { icon: MapPin, label: "Office", value: "Gadchiroli, Maharashtra, India", href: "#", iconBg: "bg-gold/10", iconColor: "text-gold" },
              ].map((c, i) => (
                <FadeIn key={c.label} delay={i * 0.1}>
                  <a
                    href={c.href}
                    target={c.label === "WhatsApp" ? "_blank" : undefined}
                    rel={c.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl border hover:border-gold/30 hover:shadow-md transition-all group"
                  >
                    <div className={`w-12 h-12 rounded-xl ${c.iconBg} flex items-center justify-center shrink-0`}>
                      <c.icon className={`h-5 w-5 ${c.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground">{c.label}</p>
                      <p className="font-semibold text-sm group-hover:text-gold transition-colors">{c.value}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-gold transition-colors" />
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Contact;
