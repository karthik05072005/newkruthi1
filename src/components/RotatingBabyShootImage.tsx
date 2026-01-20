import { useState, useEffect, useRef } from "react";

// Import all new baby shoot images for the rotating display
import image00014 from "@/assets/baby-shoot/00014.jpg";
import image01 from "@/assets/baby-shoot/01.jpg";
import image0E0A6231NEW from "@/assets/baby-shoot/0E0A6231 NEW.jpg";
import image0E0A62401 from "@/assets/baby-shoot/0E0A6240_1.jpg";
import image0E0A6258New from "@/assets/baby-shoot/0E0A6258 new.jpg";
import image0E0A8599 from "@/assets/baby-shoot/0E0A8599.jpg";
import image0E0A8677 from "@/assets/baby-shoot/0E0A8677.jpg";
import image0E0A8895New from "@/assets/baby-shoot/0E0A8895.jpg";
import image1A40 from "@/assets/baby-shoot/1A-(40).jpg";
import image3E0A0449 from "@/assets/baby-shoot/3E0A0449.jpg";
import image3E0A12632 from "@/assets/baby-shoot/3E0A1263-2.jpg";
import image3E0A1790ExposureGG from "@/assets/baby-shoot/3E0A1790-ExposureGG.jpg";
import image3E0A9244 from "@/assets/baby-shoot/3E0A9244.jpg";
import image3E0A9372 from "@/assets/baby-shoot/3E0A9372.jpg";
import image3E0A9526 from "@/assets/baby-shoot/3E0A9526.jpg";
import image3E0A9573 from "@/assets/baby-shoot/3E0A9573.jpg";
import image3E0A9776 from "@/assets/baby-shoot/3E0A9776.jpg";
import imageFBIMG1490014733112 from "@/assets/baby-shoot/FB_IMG_1490014733112.jpg";
import imagePADIMAGE from "@/assets/baby-shoot/PAD IMAGE.jpg";
import image_E0A3989 from "@/assets/baby-shoot/_E0A3989.jpg";
import image_E0A4315 from "@/assets/baby-shoot/_E0A4315.jpg";

const babyShootImages = [
  image00014,
  image01,
  image0E0A6231NEW,
  image0E0A62401,
  image0E0A6258New,
  image0E0A8599,
  image0E0A8677,
  image0E0A8895New,
  image1A40,
  image3E0A0449,
  image3E0A12632,
  image3E0A1790ExposureGG,
  image3E0A9244,
  image3E0A9372,
  image3E0A9526,
  image3E0A9573,
  image3E0A9776,
  imageFBIMG1490014733112,
  imagePADIMAGE,
  image_E0A3989,
  image_E0A4315,
];

const RotatingBabyShootImage = () => {
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
        setCurrentIndex((prevIndex) => (prevIndex + 1) % babyShootImages.length);
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
        src={babyShootImages[currentIndex]}
        alt="Baby Shoot"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
    </div>
  );
};

export default RotatingBabyShootImage;