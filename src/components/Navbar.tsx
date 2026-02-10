import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
      <nav className="container flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-heading font-bold text-primary tracking-tight">
          RoPratech
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === l.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+919999999999">
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="h-4 w-4" /> Call Us
            </Button>
          </a>
          <a
            href="https://wa.me/919999999999?text=Hi%20RoPratech%2C%20I%20need%20help%20with%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground gap-2">
              WhatsApp Us
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-background pb-4">
          <ul className="flex flex-col gap-1 px-4 pt-2">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`block py-2 px-3 rounded-md text-sm font-medium ${
                    pathname === l.to ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 px-4 mt-3">
            <a href="tel:+919999999999" className="flex-1">
              <Button variant="outline" size="sm" className="w-full gap-2">
                <Phone className="h-4 w-4" /> Call
              </Button>
            </a>
            <a
              href="https://wa.me/919999999999?text=Hi%20RoPratech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button size="sm" className="w-full bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground">
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
