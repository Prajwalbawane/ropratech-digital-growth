import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    try {
      // Sign up at https://www.emailjs.com/
      const YOUR_SERVICE_ID = "service_gan2zkq";
      const YOUR_TEMPLATE_ID = "template_ejrbb9r"; 
      const YOUR_PUBLIC_KEY = "PnE8I4AbEMxg_BBHs";

      await emailjs.sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        formRef.current,
        YOUR_PUBLIC_KEY
      );

      // ---------------------------------------------------------
      // AUTO REPLY SETUP
      // Ensure the "To Email" in this template is set to {{user_email}}
      // ---------------------------------------------------------
      const AUTO_REPLY_TEMPLATE_ID = "template_sthgd1i";
      
      await emailjs.sendForm(
        YOUR_SERVICE_ID,
        AUTO_REPLY_TEMPLATE_ID,
        formRef.current,
        YOUR_PUBLIC_KEY
      );

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you shortly.",
        className: "bg-green-50 border-green-200 text-green-900",
      });
      
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly on WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 max-w-lg">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input name="from_name" placeholder="Your Name *" required maxLength={100} className="bg-card rounded-lg h-12" />
        <Input name="from_mobile" placeholder="Mobile Number *" required type="tel" maxLength={15} className="bg-card rounded-lg h-12" />
        <Input name="email" placeholder="Your Email *" required type="email" maxLength={100} className="bg-card rounded-lg h-12" />
        <Input name="business_type" placeholder="Business Type (e.g. Shop)" maxLength={100} className="bg-card rounded-lg h-12" />
      </div>
      <Textarea name="message" placeholder="Tell us what you need *" required maxLength={1000} rows={4} className="bg-card rounded-lg resize-none" />
      <Button type="submit" disabled={loading} className="w-full h-12 rounded-lg gradient-primary border-0 text-white font-semibold gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
        <Send className="h-4 w-4" />
        {loading ? "Sending..." : "Send Inquiry"}
      </Button>
    </form>
  );
};

export default ContactForm;
