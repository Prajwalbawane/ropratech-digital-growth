import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import WhatsappLogo from "@/assets/whatsapp-logo.svg";
import Logo from "@/assets/ROPRATECHLOGO.png";

const Footer = () => (
  <footer className="hero-gradient text-white">
    <div className="container py-16">
      <div className="grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={Logo} alt="RoPratech" className="h-12 w-auto mb-4" />
          <p className="text-white/60 leading-relaxed max-w-sm">
            Helping local businesses in Gadchiroli go digital with affordable websites, apps, and marketing solutions.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-whatsapp/20 flex items-center justify-center text-whatsapp hover:bg-whatsapp/30 transition-colors"
            >
              <img src={WhatsappLogo} alt="WhatsApp" className="h-4 w-4" />
            </a>
            <a
              href="tel:+919999999999"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href="mailto:ropratech@gmail.com"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-white/90">Quick Links</h4>
          <ul className="space-y-3 text-sm text-white/50">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white transition-colors inline-flex items-center gap-1 group">
                  {l.label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-white/90">Contact</h4>
          <ul className="space-y-3 text-sm text-white/50">
            <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 shrink-0" /> +91 99999 99999</li>
            <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 shrink-0" /> ropratech@gmail.com</li>
            <li className="flex items-start gap-2"><MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5" /> Gadchiroli, Maharashtra</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/30">
        <p>© {new Date().getFullYear()} RoPratech. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Built with ❤️ for Gadchiroli businesses</p>
      </div>
    </div>
  </footer>
);

export default Footer;
