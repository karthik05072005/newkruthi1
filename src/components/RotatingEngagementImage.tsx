import { useState, useEffect, useRef } from "react";

// Import all new engagement images for the rotating display
import image3E0A01632 from "@/assets/engagement/3E0A0163-2.jpg";
import imageUntitled1ERTUTU from "@/assets/engagement/Untitled-1ERTUTU.jpg";
import imageUntitled1EWT from "@/assets/engagement/Untitled-1EWT.jpg";
import imageUntitled1J from "@/assets/engagement/Untitled-1J.jpg";

const engagementImages = [
  image3E0A01632,
  imageUntitled1ERTUTU,
  imageUntitled1EWT,
  imageUntitled1J,
];

const RotatingEngagementImage = () => {
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
        setCurrentIndex((prevIndex) => (prevIndex + 1) % engagementImages.length);
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
        src={engagementImages[currentIndex]}
        alt="Engagement"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
    </div>
  );
};

export default RotatingEngagementImage;