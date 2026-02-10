import SectionHeading from "@/components/SectionHeading";
import { Heart, Target, Users } from "lucide-react";

const About = () => (
  <>
    {/* Hero */}
    <section className="bg-hero text-hero-foreground py-16 md:py-20">
      <div className="container max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">About RoPratech</h1>
        <p className="mt-4 text-hero-muted text-lg">
          A small team with a big mission — bringing Gadchiroli's businesses online.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-20">
      <div className="container max-w-3xl">
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p>
            RoPratech was started with a simple idea: every business in Gadchiroli deserves a digital presence. Whether you run a small kirana store, a coaching class, or a construction firm — we believe technology should work for you, not confuse you.
          </p>
          <p>
            We're a founder-led agency. That means when you talk to us, you're talking to the people who actually build your website or app. No middlemen, no corporate layers, just honest conversations and real results.
          </p>
          <p>
            Our pricing is designed for local businesses — not Mumbai or Pune budgets. We keep things affordable because we want to see Gadchiroli grow digitally.
          </p>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-20 bg-section-alt">
      <div className="container">
        <SectionHeading title="What Drives Us" />
        <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
          {[
            { icon: Target, title: "Our Mission", desc: "Make digital services accessible and affordable for every business in Gadchiroli district." },
            { icon: Heart, title: "Our Values", desc: "Honesty, simplicity, and a genuine desire to help local businesses succeed online." },
            { icon: Users, title: "Our Promise", desc: "We'll be with you before, during, and after the project. Your success is our success." },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground mb-4">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
