import { Link } from "react-router-dom";
import {
  Globe, Smartphone, ShoppingCart, MapPin, MessageCircle, FileText, Wrench, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: Globe,
    title: "Business Website Development",
    desc: "A professional website for your business — clean design, mobile-friendly, easy to update. Perfect for shops, offices, clinics, and more.",
    useCases: ["Kirana stores wanting online visibility", "Clinics showing location & timings", "Schools sharing admission info"],
    price: "₹9,999",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Custom Android apps for your business. Let customers order, browse, or connect with you from their phones.",
    useCases: ["Restaurants with delivery ordering", "Service providers with booking apps", "Coaching institutes with student portals"],
    price: "₹24,999",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Website",
    desc: "Sell your products online with a complete online store — product pages, cart, checkout, and payment integration.",
    useCases: ["Local clothing stores", "Handicraft sellers", "Grocery home delivery"],
    price: "₹14,999",
  },
  {
    icon: MapPin,
    title: "Google Business Profile Setup",
    desc: "Show up when people search for businesses near them. We set up and optimize your Google listing so customers find you.",
    useCases: ["Any local business", "Restaurants and hotels", "Medical stores and clinics"],
    price: "₹1,999",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business Automation",
    desc: "Set up WhatsApp Business with auto-replies, product catalog, and quick responses to handle customer inquiries automatically.",
    useCases: ["Shops receiving daily inquiries", "Service providers taking bookings", "Businesses sharing catalogs"],
    price: "₹2,999",
  },
  {
    icon: FileText,
    title: "Billing & Management Software",
    desc: "Simple billing, inventory, and management software tailored for your daily business operations.",
    useCases: ["Retail shops needing GST billing", "Wholesale distributors", "Service-based businesses"],
    price: "₹7,999",
  },
  {
    icon: Wrench,
    title: "Website Maintenance & Support",
    desc: "Don't worry about hosting, updates, or technical issues. We take care of everything so you can focus on your business.",
    useCases: ["Any business with a website", "Seasonal content updates", "Security and backup needs"],
    price: "₹999/month",
  },
];

const Services = () => (
  <>
    <section className="bg-hero text-hero-foreground py-16 md:py-20">
      <div className="container max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">Our Services</h1>
        <p className="mt-4 text-hero-muted text-lg">
          Simple digital solutions designed for local businesses. No jargon, no confusion.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-20">
      <div className="container space-y-12">
        {services.map((s, i) => (
          <div
            key={s.title}
            className={`grid gap-6 lg:grid-cols-2 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
          >
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-accent text-accent-foreground mb-4">
                <s.icon className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-heading font-bold">{s.title}</h2>
              <p className="text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
              <p className="mt-3 font-semibold text-primary">Starting from {s.price}</p>
            </div>
            <div className={`bg-section-alt rounded-lg p-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <h4 className="font-heading font-semibold text-sm mb-3">Who is this for?</h4>
              <ul className="space-y-2">
                {s.useCases.map((u) => (
                  <li key={u} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-4 w-4 shrink-0 mt-0.5 text-primary" /> {u}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-2xl font-heading font-bold">Ready to get started?</h2>
        <p className="mt-2 opacity-80">Let's discuss your project — no commitment, no pressure.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/919999999999?text=Hi%20RoPratech" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground gap-2">
              <MessageCircle className="h-5 w-5" /> WhatsApp Us
            </Button>
          </a>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Contact Page
            </Button>
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Services;
