interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ title, subtitle, center = true }: Props) => (
  <div className={`mb-10 ${center ? "text-center" : ""}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
    {subtitle && <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

export default SectionHeading;
