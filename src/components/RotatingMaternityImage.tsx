import { useState, useEffect, useRef } from "react";

// Import all new maternity images for the rotating display
import image0E0A4139Edit2 from "@/assets/maternity/0E0A4139 (18)-Edit-2.jpg";
import image0E0A4859 from "@/assets/maternity/0E0A4859.jpg";
import image0E0A8256 from "@/assets/maternity/0E0A8256.jpg";
import image3E0A4393EditEdit from "@/assets/maternity/3E0A4393-Edit-Edit.jpg";
import image3E0A4496 from "@/assets/maternity/3E0A4496.jpg";
import image3E0A4558Edit from "@/assets/maternity/3E0A4558-Edit.jpg";
import imagePad from "@/assets/maternity/pad.jpg";
import image_E0A4459 from "@/assets/maternity/_E0A4459.jpg";
import image_E0A4472 from "@/assets/maternity/_E0A4472.jpg";
import image_E0A4668 from "@/assets/maternity/_E0A4668.jpg";
import image_E0A4675 from "@/assets/maternity/_E0A4675.jpg";
import image_E0A66601 from "@/assets/maternity/_E0A66601.jpg";
import image_E0A6679 from "@/assets/maternity/_E0A6679.jpg";
import image_E0A6697 from "@/assets/maternity/_E0A6697.jpg";
import image_E0A6810 from "@/assets/maternity/_E0A6810.jpg";
import image_E0A6838 from "@/assets/maternity/_E0A6838.jpg";
import image_MGL7104 from "@/assets/maternity/_MGL7104.jpg";
import image_MGL7178 from "@/assets/maternity/_MGL7178.jpg";

const maternityImages = [
  image0E0A4139Edit2,
  image0E0A4859,
  image0E0A8256,
  image3E0A4393EditEdit,
  image3E0A4496,
  image3E0A4558Edit,
  imagePad,
  image_E0A4459,
  image_E0A4472,
  image_E0A4668,
  image_E0A4675,
  image_E0A66601,
  image_E0A6679,
  image_E0A6697,
  image_E0A6810,
  image_E0A6838,
  image_MGL7104,
  image_MGL7178,
];

const RotatingMaternityImage = () => {
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
        setCurrentIndex((prevIndex) => (prevIndex + 1) % maternityImages.length);
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
        src={maternityImages[currentIndex]}
        alt="Maternity"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
    </div>
  );
};

export default RotatingMaternityImage;