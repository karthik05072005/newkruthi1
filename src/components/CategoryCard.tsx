import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  delay?: number;
}

const CategoryCard = ({ title, description, image, delay = 0 }: CategoryCardProps) => {
  return (
    <div
      className="group relative overflow-hidden rounded-lg aspect-[4/5] animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="font-display text-2xl text-foreground mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {title}
        </h3>
        <p className="font-body text-sm text-muted-foreground mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
          {description}
        </p>
        <Link
          to="/portfolio"
          className="flex items-center gap-2 font-body text-sm text-primary opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200"
        >
          View Gallery
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
