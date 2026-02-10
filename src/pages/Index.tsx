import { Link } from "react-router-dom";
import {
  Globe, Smartphone, ShoppingCart, MapPin, MessageCircle, FileText, Wrench,
  CheckCircle, Star, Shield, Phone, Mail, CreditCard, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  { icon: Globe, title: "Business Website", desc: "Get a professional website that represents your business online.", price: "₹9,999" },
  { icon: Smartphone, title: "Mobile App Development", desc: "Custom mobile apps to serve your customers on the go.", price: "₹24,999" },
  { icon: ShoppingCart, title: "E-commerce Website", desc: "Sell your products online with a fully functional store.", price: "₹14,999" },
  { icon: MapPin, title: "Google Business Profile", desc: "Get found on Google Maps and Search by local customers.", price: "₹1,999" },
  { icon: MessageCircle, title: "WhatsApp Automation", desc: "Auto-replies, catalogs, and business messaging setup.", price: "₹2,999" },
  { icon: FileText, title: "Billing Software", desc: "Simple billing and management software for your daily needs.", price: "₹7,999" },
  { icon: Wrench, title: "Maintenance & Support", desc: "Ongoing updates, hosting, and technical support for your website.", price: "₹999/mo" },
];

const whyUs = [
  { icon: MapPin, title: "Local Support", desc: "We are based in Gadchiroli. We understand your needs." },
  { icon: CreditCard, title: "Affordable Pricing", desc: "Fair and transparent pricing designed for small businesses." },
  { icon: MessageCircle, title: "Simple Communication", desc: "Talk to us in Hindi, Marathi, or English — whatever works for you." },
  { icon: Wrench, title: "After-Delivery Support", desc: "We don't disappear after delivery. We stay with you." },
  { icon: Shield, title: "Trusted by Locals", desc: "Serving businesses in Gadchiroli district with honesty." },
];

const testimonials = [
  { name: "Ramesh Patil", role: "Grocery Store Owner", text: "RoPratech helped me set up my Google profile. Now I get calls from new customers every week!" },
  { name: "Sneha Meshram", role: "Coaching Class Teacher", text: "My coaching institute website looks so professional. Parents trust us more now." },
  { name: "Vikram Thakare", role: "Building Contractor", text: "They built a simple portfolio for my projects. Very affordable and great support." },
];

const portfolio = [
  { title: "Patil Kirana Store", category: "E-commerce", desc: "Online ordering system for a local grocery shop." },
  { title: "Bright Future Academy", category: "Website", desc: "Informational website for a coaching institute." },
  { title: "Thakare Constructions", category: "Portfolio", desc: "Project showcase site for a local contractor." },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero text-hero-foreground">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="relative container py-20 md:py-28">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Take Your Business <span className="text-secondary">Online</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-hero-muted leading-relaxed">
              We help local businesses in Gadchiroli build websites, apps, and digital presence — at prices you can afford.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/919999999999?text=Hi%20RoPratech%2C%20I%20need%20help%20with%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground gap-2 text-base">
                  <MessageCircle className="h-5 w-5" /> WhatsApp Us
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-hero-foreground/30 text-hero-foreground hover:bg-hero-foreground/10 gap-2 text-base">
                  Get Free Consultation <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-section-alt" id="services">
        <div className="container">
          <SectionHeading title="Our Services" subtitle="Everything your business needs to go digital." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-card rounded-lg p-6 border hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-md bg-accent text-accent-foreground mb-4">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading font-semibold text-lg">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                <p className="mt-3 text-sm font-semibold text-primary">Starting from {s.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button variant="outline" className="gap-2">
                View All Services <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20">
        <div className="container">
          <SectionHeading title="Why Choose RoPratech?" subtitle="We're not just another agency. We're your neighbours." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w) => (
              <div key={w.title} className="flex gap-4 items-start">
                <div className="shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground">
                  <w.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold">{w.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 md:py-20 bg-section-alt">
        <div className="container">
          <SectionHeading title="Our Work" subtitle="Some recent projects we've worked on." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((p) => (
              <div key={p.title} className="bg-card rounded-lg border overflow-hidden">
                <div className="h-40 bg-accent flex items-center justify-center">
                  <Globe className="h-12 w-12 text-accent-foreground/40" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-primary uppercase tracking-wide">{p.category}</span>
                  <h3 className="font-heading font-semibold mt-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                  <p className="text-xs text-muted-foreground mt-2 italic">Demo project</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20">
        <div className="container">
          <SectionHeading title="What Our Clients Say" />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card border rounded-lg p-6">
                <div className="flex gap-1 text-secondary mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
                <div className="mt-4">
                  <p className="font-heading font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment & Trust */}
      <section className="py-16 md:py-20 bg-section-alt">
        <div className="container max-w-3xl text-center">
          <SectionHeading title="Simple & Secure Payments" subtitle="We keep things transparent so you can trust us." />
          <div className="grid gap-6 sm:grid-cols-3 text-center">
            <div className="flex flex-col items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <h4 className="font-heading font-semibold">Secure Payments</h4>
              <p className="text-sm text-muted-foreground">Online payments via Razorpay</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CreditCard className="h-8 w-8 text-primary" />
              <h4 className="font-heading font-semibold">50% Advance</h4>
              <p className="text-sm text-muted-foreground">Pay half to get started</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CheckCircle className="h-8 w-8 text-primary" />
              <h4 className="font-heading font-semibold">50% on Delivery</h4>
              <p className="text-sm text-muted-foreground">Pay the rest when you're happy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-20" id="contact">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div>
              <SectionHeading title="Get In Touch" subtitle="Have a question? Want a quote? Let's talk." center={false} />
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-whatsapp/10 flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 text-whatsapp" />
                  </div>
                  <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="hover:text-primary">WhatsApp: +91 99999 99999</a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <a href="tel:+919999999999" className="hover:text-primary">Phone: +91 99999 99999</a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <a href="mailto:hello@ropratech.com" className="hover:text-primary">hello@ropratech.com</a>
                </li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
