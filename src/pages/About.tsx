import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { FadeIn } from "@/components/AnimatedElements";
import { Heart, Target, Users, Zap } from "lucide-react";

const About = () => (
  <>
    {/* Hero */}
    <section className="hero-gradient text-white py-20 md:py-28 relative overflow-hidden">
      <div className="floating-orb w-80 h-80 bg-blue-500/20 top-[-10%] right-[10%]" />
      <div className="floating-orb w-48 h-48 bg-purple-500/15 bottom-[10%] left-[5%]" style={{ animationDelay: "3s" }} />
      <div className="container max-w-3xl text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm text-white/80 mb-6">
            <Zap className="h-4 w-4 text-secondary" /> Our Story
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-400">RoPratech</span>
          </h1>
          <p className="mt-6 text-white/60 text-lg max-w-xl mx-auto">
            A small team with a big mission — bringing Gadchiroli's businesses online.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <FadeIn>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              RoPratech was started with a simple idea: <strong className="text-foreground">every business in Gadchiroli deserves a digital presence.</strong> Whether you run a small kirana store, a coaching class, or a construction firm — we believe technology should work for you, not confuse you.
            </p>
            <p>
              We're a founder-led agency. That means when you talk to us, you're talking to the people who actually build your website or app. No middlemen, no corporate layers, just honest conversations and real results.
            </p>
            <p>
              Our pricing is designed for local businesses — not Mumbai or Pune budgets. We keep things affordable because we want to see Gadchiroli grow digitally.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-section-alt">
      <div className="container">
        <SectionHeading title="What Drives Us" />
        <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
          {[
            { icon: Target, title: "Our Mission", desc: "Make digital services accessible and affordable for every business in Gadchiroli district.", color: "from-blue-500 to-cyan-500" },
            { icon: Heart, title: "Our Values", desc: "Honesty, simplicity, and a genuine desire to help local businesses succeed online.", color: "from-rose-500 to-pink-500" },
            { icon: Users, title: "Our Promise", desc: "We'll be with you before, during, and after the project. Your success is our success.", color: "from-violet-500 to-purple-500" },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="text-center bg-card rounded-2xl p-8 border card-hover">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} text-white mb-5`}>
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading font-bold text-xl">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
