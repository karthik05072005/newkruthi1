import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  event: string;
  content: string;
  rating: number;
  delay?: number;
}

const TestimonialCard = ({ name, event, content, rating, delay = 0 }: TestimonialCardProps) => {
  return (
    <div
      className="bg-card border border-border rounded-lg p-8 hover-lift animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Quote className="text-primary/30 w-10 h-10 mb-4" />
      
      <p className="font-body text-muted-foreground leading-relaxed mb-6 italic">
        "{content}"
      </p>
      
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "fill-primary text-primary" : "text-muted"}
          />
        ))}
      </div>
      
      <div>
        <h4 className="font-display text-lg text-foreground">{name}</h4>
        <p className="font-body text-sm text-primary">{event}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
