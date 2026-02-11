import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Globe, Smartphone, ShoppingCart, MapPin, MessageCircle, FileText, Wrench,
  CheckCircle, Star, Shield, Phone, Mail, CreditCard, ArrowRight, Zap, Users, TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { FadeIn, StaggerContainer } from "@/components/AnimatedElements";
import heroBg from "@/assets/hero-bg.jpg";
import WhatsappLogo from "@/assets/whatsapp-logo.svg";

const services = [
  { icon: Globe, title: "Business Website", desc: "Professional website that represents your business online.", price: "₹9,999" },
  { icon: Smartphone, title: "Mobile App", desc: "Custom mobile apps to serve your customers on the go.", price: "₹24,999" },
  { icon: ShoppingCart, title: "E-commerce Store", desc: "Sell your products online with a fully functional store.", price: "₹14,999" },
  { icon: MapPin, title: "Google Business Profile", desc: "Get found on Google Maps by local customers.", price: "₹1,999" },
  { icon: () => <img src={WhatsappLogo} alt="WhatsApp" className="h-6 w-6" />, title: "WhatsApp Automation", desc: "Auto-replies, catalogs, and business messaging.", price: "₹2,999" },
  { icon: FileText, title: "Billing Software", desc: "Simple billing and management for daily needs.", price: "₹7,999" },
  { icon: Wrench, title: "Maintenance & Support", desc: "Ongoing updates, hosting, and technical support.", price: "₹999/mo" },
];

const whyUs = [
  { icon: MapPin, title: "Local Support", desc: "Based in Gadchiroli. We understand your needs." },
  { icon: CreditCard, title: "Affordable Pricing", desc: "Fair pricing designed for small businesses." },
  { icon: () => <img src={WhatsappLogo} alt="WhatsApp" className="h-6 w-6" />, title: "Simple Communication", desc: "Hindi, Marathi, or English — whatever works." },
  { icon: Wrench, title: "After-Delivery Support", desc: "We don't disappear after delivery." },
  { icon: Shield, title: "Trusted by Locals", desc: "Serving Gadchiroli businesses with honesty." },
];

const testimonials = [
  { name: "Ramesh Patil", role: "Grocery Store Owner", text: "RoPratech helped me set up my Google profile. Now I get calls from new customers every week!", avatar: "RP" },
  { name: "Sneha Meshram", role: "Coaching Class Teacher", text: "My coaching institute website looks so professional. Parents trust us more now.", avatar: "SM" },
  { name: "Vikram Thakare", role: "Building Contractor", text: "They built a simple portfolio for my projects. Very affordable and great support.", avatar: "VT" },
];

const portfolio = [
  { title: "Patil Kirana Store", category: "E-commerce", desc: "Online ordering system for a local grocery shop.", color: "from-blue-500 to-cyan-500" },
  { title: "Bright Future Academy", category: "Website", desc: "Informational website for a coaching institute.", color: "from-violet-500 to-purple-500" },
  { title: "Thakare Constructions", category: "Portfolio", desc: "Project showcase site for a local contractor.", color: "from-amber-500 to-orange-500" },
];

const stats = [
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Globe, value: "80+", label: "Projects Delivered" },
  { icon: TrendingUp, value: "3+", label: "Years Experience" },
  { icon: Zap, value: "24/7", label: "Support Available" },
];

import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO 
        title="Best Web Design & Digital Marketing in Gadchiroli"
        description="RoPratech offers affordable websites, mobile apps, and digital marketing services for local businesses in Gadchiroli. Get your business online today!"
        keywords="Gadchiroli website design, app development Gadchiroli, digital marketing agency, local SEO services, business website India"
      />
      {/* Hero */}
      <section className="relative overflow-hidden hero-gradient text-white min-h-[90vh] flex items-center">
        {/* Background orbs */}
        <div className="floating-orb w-96 h-96 bg-blue-500/30 top-[-10%] right-[-5%]" style={{ animationDelay: "0s" }} />
        <div className="floating-orb w-72 h-72 bg-purple-500/20 bottom-[-10%] left-[10%]" style={{ animationDelay: "3s" }} />
        <div className="floating-orb w-48 h-48 bg-secondary/20 top-[30%] right-[20%]" style={{ animationDelay: "5s" }} />

        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />

        <div className="relative container py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-white/80 mb-6">
                <Zap className="h-4 w-4 text-secondary" /> Digital Solutions for Gadchiroli
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1]">
                Take Your Business{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-yellow-400 to-secondary">
                  Online
                </span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-white/60 leading-relaxed max-w-xl">
                We help local businesses build websites, apps, and digital presence — at prices you can afford. No jargon. Just results.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/919999999999?text=Hi%20RoPratech%2C%20I%20need%20help%20with%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-white gap-2 text-base rounded-full shadow-xl shadow-whatsapp/25 h-12 px-6">
                    <img src={WhatsappLogo} alt="WhatsApp" className="h-5 w-5" /> WhatsApp Us
                  </Button>
                </a>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 gap-2 text-base rounded-full h-12 px-6 backdrop-blur-sm">
                    Free Consultation <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Stats cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glass rounded-2xl p-5 text-center bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <s.icon className="h-6 w-6 mx-auto mb-2 text-secondary" />
                  <p className="text-2xl md:text-3xl font-extrabold">{s.value}</p>
                  <p className="text-xs text-white/50 mt-1">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading title="Our Services" subtitle="Everything your business needs to go digital — simple, affordable, and effective." />
          <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.05}>
                <div className="group relative bg-card rounded-2xl p-6 border card-hover glow-border overflow-hidden">
                  <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300" />
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl gradient-primary text-white mb-4">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading font-bold text-lg">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
                    <p className="mt-4 text-sm font-bold text-primary">Starting from {s.price}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </StaggerContainer>
          <FadeIn className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" className="gap-2 rounded-full px-6 h-11">
                View All Services <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-section-alt">
        <div className="container">
          <SectionHeading 
            title={
              <>
                Why Choose <span className="text-[#1E73BE]">RoPra</span><span className="text-[#66BB33]">tech</span>?
              </>
            } 
            subtitle="We're not just another agency. We're your neighbours." 
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {whyUs.map((w, i) => (
              <FadeIn key={w.title} delay={i * 0.08}>
                <div className="flex gap-4 items-start bg-card rounded-2xl p-5 border card-hover">
                  <div className="shrink-0 w-11 h-11 rounded-xl gradient-primary flex items-center justify-center text-white">
                    <w.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold">{w.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{w.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading title="Our Work" subtitle="Recent projects we've crafted for local businesses." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div className="group bg-card rounded-2xl border overflow-hidden card-hover">
                  <div className={`h-48 bg-gradient-to-br ${p.color} flex items-center justify-center relative overflow-hidden`}>
                    <Globe className="h-16 w-16 text-white/20 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block text-xs font-semibold gradient-text uppercase tracking-wider">{p.category}</span>
                    <h3 className="font-heading font-bold text-lg mt-1">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
                    <p className="text-xs text-muted-foreground/60 mt-3 italic">Demo project</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 hero-gradient text-white relative overflow-hidden">
        <div className="floating-orb w-64 h-64 bg-blue-500/20 top-[10%] right-[-5%]" />
        <div className="floating-orb w-48 h-48 bg-purple-500/15 bottom-[10%] left-[5%]" style={{ animationDelay: "4s" }} />
        <div className="container relative">
          <SectionHeading title="What Our Clients Say" light />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.15}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="flex gap-1 text-secondary mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">"{t.text}"</p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-xs font-bold text-white">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-sm">{t.name}</p>
                      <p className="text-xs text-white/40">{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Payment & Trust */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <SectionHeading title="Simple & Secure Payments" subtitle="Transparent process. No hidden fees. Pay as you go." />
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: Shield, title: "Secure Payments", desc: "Online payments via Razorpay", color: "from-blue-500 to-cyan-500" },
              { icon: CreditCard, title: "50% Advance", desc: "Pay half to get started", color: "from-violet-500 to-purple-500" },
              { icon: CheckCircle, title: "50% on Delivery", desc: "Rest when you're satisfied", color: "from-emerald-500 to-green-500" },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="text-center bg-card rounded-2xl p-8 border card-hover">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} text-white mb-4`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-heading font-bold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 md:py-28 bg-section-alt" id="contact">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <SectionHeading title="Get In Touch" subtitle="Have a question? Want a quote? Let's talk." center={false} />
              <div className="space-y-4 mt-8">
                {[
                  { icon: () => <img src={WhatsappLogo} alt="WhatsApp" className="h-5 w-5" />, label: "WhatsApp", value: "+91 99999 99999", href: "https://wa.me/919999999999", iconBg: "bg-whatsapp/10", iconColor: "text-whatsapp" },
                  { icon: Phone, label: "Phone", value: "+91 99999 99999", href: "tel:+919999999999", iconBg: "bg-primary/10", iconColor: "text-primary" },
                  { icon: Mail, label: "Email", value: "ropratech@gmail.com", href: "mailto:ropratech@gmail.com", iconBg: "bg-primary/10", iconColor: "text-primary" },
                ].map((c) => (
                  <a key={c.label} href={c.href} target={c.label === "WhatsApp" ? "_blank" : undefined} rel={c.label === "WhatsApp" ? "noopener noreferrer" : undefined} className="flex items-center gap-4 p-4 bg-card rounded-xl border hover:shadow-md transition-all group">
                    <div className={`w-11 h-11 rounded-xl ${c.iconBg} flex items-center justify-center shrink-0`}>
                      <c.icon className={`h-5 w-5 ${c.iconColor}`} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{c.label}</p>
                      <p className="font-semibold text-sm group-hover:text-primary transition-colors">{c.value}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 ml-auto text-muted-foreground/30 group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
            <FadeIn>
              <div className="bg-card rounded-2xl border p-6 md:p-8 shadow-sm">
                <h3 className="font-heading font-bold text-xl mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
