import { motion } from "framer-motion";
import WhatsappLogo from "@/assets/whatsapp-logo.svg";

const WhatsAppFab = () => (
  <motion.a
    href="https://wa.me/919999999999?text=Hi%20RoPratech%2C%20I%20need%20help%20with%20my%20business."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-xl bg-whatsapp text-whatsapp-foreground shadow-xl shadow-whatsapp/30 ring-2 ring-gold/30 hover:shadow-2xl hover:shadow-whatsapp/40 transition-shadow"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1, type: "spring", stiffness: 200 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    aria-label="Chat on WhatsApp"
  >
    <img src={WhatsappLogo} alt="WhatsApp" className="h-5 w-5" />
    <span className="text-sm font-semibold hidden sm:inline">Chat with us</span>
  </motion.a>
);

export default WhatsAppFab;
