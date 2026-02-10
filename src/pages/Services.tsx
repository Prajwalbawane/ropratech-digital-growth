import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Globe, Smartphone, ShoppingCart, MapPin, MessageCircle, FileText, Wrench, ArrowRight, Zap, CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/AnimatedElements";

const services = [
  {
    icon: Globe, title: "Business Website Development",
    desc: "A professional website for your business — clean design, mobile-friendly, easy to update. Perfect for shops, offices, clinics, and more.",
    useCases: ["Kirana stores wanting online visibility", "Clinics showing location & timings", "Schools sharing admission info"],
    price: "₹9,999", color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone, title: "Mobile App Development",
    desc: "Custom Android apps for your business. Let customers order, browse, or connect with you from their phones.",
    useCases: ["Restaurants with delivery ordering", "Service providers with booking apps", "Coaching institutes with student portals"],
    price: "₹24,999", color: "from-violet-500 to-purple-500",
  },
  {
    icon: ShoppingCart, title: "E-commerce Website",
    desc: "Sell your products online with a complete online store — product pages, cart, checkout, and payment integration.",
    useCases: ["Local clothing stores", "Handicraft sellers", "Grocery home delivery"],
    price: "₹14,999", color: "from-amber-500 to-orange-500",
  },
  {
    icon: MapPin, title: "Google Business Profile Setup",
    desc: "Show up when people search for businesses near them. We set up and optimize your Google listing so customers find you.",
    useCases: ["Any local business", "Restaurants and hotels", "Medical stores and clinics"],
    price: "₹1,999", color: "from-emerald-500 to-green-500",
  },
  {
    icon: MessageCircle, title: "WhatsApp Business Automation",
    desc: "Set up WhatsApp Business with auto-replies, product catalog, and quick responses to handle inquiries automatically.",
    useCases: ["Shops receiving daily inquiries", "Service providers taking bookings", "Businesses sharing catalogs"],
    price: "₹2,999", color: "from-teal-500 to-cyan-500",
  },
  {
    icon: FileText, title: "Billing & Management Software",
    desc: "Simple billing, inventory, and management software tailored for your daily business operations.",
    useCases: ["Retail shops needing GST billing", "Wholesale distributors", "Service-based businesses"],
    price: "₹7,999", color: "from-rose-500 to-pink-500",
  },
  {
    icon: Wrench, title: "Website Maintenance & Support",
    desc: "Don't worry about hosting, updates, or technical issues. We take care of everything so you can focus on your business.",
    useCases: ["Any business with a website", "Seasonal content updates", "Security and backup needs"],
    price: "₹999/month", color: "from-indigo-500 to-blue-500",
  },
];

const Services = () => (
  <>
    <section className="hero-gradient text-white py-20 md:py-28 relative overflow-hidden">
      <div className="floating-orb w-72 h-72 bg-blue-500/20 top-[-10%] right-[10%]" />
      <div className="floating-orb w-48 h-48 bg-purple-500/15 bottom-[10%] left-[5%]" style={{ animationDelay: "3s" }} />
      <div className="container max-w-3xl text-center relative">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-white/80 mb-6">
            <Zap className="h-4 w-4 text-secondary" /> What We Offer
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">Our Services</h1>
          <p className="mt-6 text-white/60 text-lg">Simple digital solutions designed for local businesses. No jargon, no confusion.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container space-y-16">
        {services.map((s, i) => (
          <FadeIn key={s.title}>
            <div className={`grid gap-8 lg:grid-cols-5 items-center ${i % 2 === 1 ? "" : ""}`}>
              <div className={`lg:col-span-3 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} text-white mb-4`}>
                  <s.icon className="h-6 w-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-extrabold">{s.title}</h2>
                <p className="text-muted-foreground mt-3 leading-relaxed text-lg">{s.desc}</p>
                <p className="mt-4 font-bold text-xl gradient-text">Starting from {s.price}</p>
              </div>
              <div className={`lg:col-span-2 bg-card rounded-2xl p-6 border ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h4 className="font-heading font-semibold text-sm text-muted-foreground mb-4 uppercase tracking-wider">Who is this for?</h4>
                <ul className="space-y-3">
                  {s.useCases.map((u) => (
                    <li key={u} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>

    <section className="py-16 gradient-primary text-white relative overflow-hidden">
      <div className="container text-center relative">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold">Ready to get started?</h2>
          <p className="mt-3 text-white/70 text-lg">Let's discuss your project — no commitment, no pressure.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/919999999999?text=Hi%20RoPratech" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-white gap-2 rounded-full shadow-xl shadow-black/20 h-12 px-6">
                <MessageCircle className="h-5 w-5" /> WhatsApp Us
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full h-12 px-6 gap-2">
                Contact Page <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  </>
);

export default Services;
