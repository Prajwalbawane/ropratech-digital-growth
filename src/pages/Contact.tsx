import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

const Contact = () => (
  <>
    <section className="bg-hero text-hero-foreground py-16 md:py-20">
      <div className="container max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">Contact Us</h1>
        <p className="mt-4 text-hero-muted text-lg">
          We'd love to hear from you. Reach out via WhatsApp, call, or the form below.
        </p>
        <div className="mt-6">
          <a href="https://wa.me/919999999999?text=Hi%20RoPratech" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground gap-2 text-base">
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-20">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <SectionHeading title="Send Us a Message" center={false} />
            <ContactForm />
          </div>
          <div>
            <SectionHeading title="Other Ways to Reach Us" center={false} />
            <ul className="space-y-5">
              <li className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-whatsapp/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="h-5 w-5 text-whatsapp" />
                </div>
                <div>
                  <p className="font-semibold text-sm">WhatsApp</p>
                  <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">+91 99999 99999</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Phone</p>
                  <a href="tel:+919999999999" className="text-sm text-muted-foreground hover:text-primary">+91 99999 99999</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Email</p>
                  <a href="mailto:hello@ropratech.com" className="text-sm text-muted-foreground hover:text-primary">hello@ropratech.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Office</p>
                  <p className="text-sm text-muted-foreground">Gadchiroli, Maharashtra, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Contact;
