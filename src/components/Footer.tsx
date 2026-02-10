import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-heading font-bold mb-3">RoPratech</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Helping local businesses in Gadchiroli go digital. Simple solutions, honest pricing, real support.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/" className="hover:opacity-100 transition-opacity">Home</Link></li>
            <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
            <li><Link to="/services" className="hover:opacity-100 transition-opacity">Services</Link></li>
            <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-3">Contact Info</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /> +91 99999 99999</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /> hello@ropratech.com</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5" /> Gadchiroli, Maharashtra, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/20 mt-8 pt-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} RoPratech. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
