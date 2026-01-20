import { useState, useEffect, useRef } from "react";

// Import all new portrait images for the rotating display
import image_E0a3036 from "@/assets/portrait/_e0a3036.jpg";
import image_E0a3070 from "@/assets/portrait/_e0a3070.jpg";
import image_E0a3896 from "@/assets/portrait/_e0a3896.jpg";
import image_V9a1250 from "@/assets/portrait/_v9a1250.jpg";
import image_V9a1252 from "@/assets/portrait/_v9a1252.jpg";

const portraitsImages = [
  image_E0a3036,
  image_E0a3070,
  image_E0a3896,
  image_V9a1250,
  image_V9a1252,
];

const RotatingPortraitsImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % portraitsImages.length);
      }, 5000); // Change image every 5 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div ref={containerRef} className="w-full h-full">
      <img
        src={portraitsImages[currentIndex]}
        alt="Portraits"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
    </div>
  );
};

export default RotatingPortraitsImage;