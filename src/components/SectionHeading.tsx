import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionHeading = ({ title, subtitle, center = true, light = false }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`mb-12 ${center ? "text-center" : ""}`}
  >
    {center && (
      <div className={`w-10 h-1 rounded-full mb-4 ${center ? "mx-auto" : ""} ${light ? "bg-gold/60" : "bg-gold"}`} />
    )}
    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold ${light ? "text-white" : "text-foreground"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-4 text-lg max-w-2xl ${center ? "mx-auto" : ""} ${light ? "text-white/60" : "text-muted-foreground"}`}>
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
