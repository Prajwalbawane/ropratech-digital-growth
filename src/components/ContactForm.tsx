import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const mobile = (form.elements.namedItem("mobile") as HTMLInputElement).value.trim();
    const business = (form.elements.namedItem("business") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (!name || !mobile || !message) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      setLoading(false);
      return;
    }

    const waText = encodeURIComponent(
      `Hi RoPratech!\n\nName: ${name}\nMobile: ${mobile}\nBusiness: ${business}\nMessage: ${message}`
    );
    window.open(`https://wa.me/919999999999?text=${waText}`, "_blank");

    toast({ title: "Redirecting to WhatsApp…", description: "We'll respond within a few hours." });
    form.reset();
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
      <Input name="name" placeholder="Your Name *" required maxLength={100} />
      <Input name="mobile" placeholder="Mobile Number *" required type="tel" maxLength={15} />
      <Input name="business" placeholder="Business Type (e.g. Shop, School)" maxLength={100} />
      <Textarea name="message" placeholder="Tell us what you need *" required maxLength={1000} rows={4} />
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Sending…" : "Send Inquiry via WhatsApp"}
      </Button>
    </form>
  );
};

export default ContactForm;
