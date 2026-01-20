interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4 animate-fade-up">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-muted-foreground max-w-2xl mx-auto animate-fade-up delay-100">
          {subtitle}
        </p>
      )}
      <div className={`mt-6 flex items-center gap-4 ${centered ? "justify-center" : ""}`}>
        <div className="w-12 h-px bg-primary animate-fade-up delay-200" />
        <span className="font-script text-2xl text-primary animate-fade-up delay-200">K</span>
        <div className="w-12 h-px bg-primary animate-fade-up delay-200" />
      </div>
    </div>
  );
};

export default SectionHeading;
