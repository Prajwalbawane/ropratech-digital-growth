import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 glass-strong">
      <nav className="container flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-heading font-extrabold tracking-tight">
          <span className="gradient-text">Ro</span>Pratech
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  pathname === l.to
                    ? "text-primary bg-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+919999999999">
            <Button variant="outline" size="sm" className="gap-2 rounded-full">
              <Phone className="h-4 w-4" /> Call Us
            </Button>
          </a>
          <a
            href="https://wa.me/919999999999?text=Hi%20RoPratech%2C%20I%20need%20help%20with%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground gap-2 rounded-full shadow-lg shadow-whatsapp/20">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </Button>
          </a>
        </div>

        <button className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-card overflow-hidden"
          >
            <ul className="flex flex-col gap-1 px-4 pt-3 pb-2">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={`block py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                      pathname === l.to ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-2 px-4 pb-4">
              <a href="tel:+919999999999" className="flex-1">
                <Button variant="outline" size="sm" className="w-full gap-2 rounded-full">
                  <Phone className="h-4 w-4" /> Call
                </Button>
              </a>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button size="sm" className="w-full bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground rounded-full">
                  <MessageCircle className="h-4 w-4 mr-1" /> WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
