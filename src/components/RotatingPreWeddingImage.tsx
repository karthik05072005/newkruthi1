import { useState, useEffect, useRef } from "react";

// Import all new pre-wedding images for the rotating display
import image01 from "@/assets/pre-wedding/01.jpg";
import image042 from "@/assets/pre-wedding/04 (2).jpg";
import image053 from "@/assets/pre-wedding/05 (3).jpg";
import image13 from "@/assets/pre-wedding/13.jpg";
import image18 from "@/assets/pre-wedding/18.jpg";
import image1a34 from "@/assets/pre-wedding/1a (34).jpg";
import image1a35 from "@/assets/pre-wedding/1a (35).jpg";
import image24 from "@/assets/pre-wedding/2 (4).jpg";
import image204 from "@/assets/pre-wedding/20 (4).jpg";
import image3 from "@/assets/pre-wedding/3.jpg";
import image3e0a0314 from "@/assets/pre-wedding/3e0a0314.jpg";
import image3e0a4385 from "@/assets/pre-wedding/3e0a4385.jpg";
import image3e0a5215 from "@/assets/pre-wedding/3e0a5215.jpg";
import image3e0a5620 from "@/assets/pre-wedding/3e0a5620.jpg";
import image3e0a5898 from "@/assets/pre-wedding/3e0a5898.jpg";
import image4 from "@/assets/pre-wedding/4.jpg";
import image63 from "@/assets/pre-wedding/6 (3).jpg";
import image9 from "@/assets/pre-wedding/9.jpg";
import imageGuru37392 from "@/assets/pre-wedding/guru3739-2.jpg";
import imageGuru3950Exposure from "@/assets/pre-wedding/guru3950-exposure.jpg";
import imageGuru4103 from "@/assets/pre-wedding/guru4103.jpg";
import imageGyfyyrfuy11 from "@/assets/pre-wedding/gyfyyrfuy1 (1).jpg";
import imageGyfyyrfuy110 from "@/assets/pre-wedding/gyfyyrfuy1 (10).jpg";
import imageGyfyyrfuy111 from "@/assets/pre-wedding/gyfyyrfuy1 (11).jpg";
import imageGyfyyrfuy113 from "@/assets/pre-wedding/gyfyyrfuy1 (13).jpg";
import imageGyfyyrfuy116 from "@/assets/pre-wedding/gyfyyrfuy1 (16).jpg";
import imageGyfyyrfuy15 from "@/assets/pre-wedding/gyfyyrfuy1 (5).jpg";
import image_E0a0660 from "@/assets/pre-wedding/_e0a0660.jpg";
import image_E0a0664 from "@/assets/pre-wedding/_e0a0664.jpg";
import image_E0a0689 from "@/assets/pre-wedding/_e0a0689.jpg";
import image_E0a7574 from "@/assets/pre-wedding/_e0a7574.jpg";
import image_E0a7620t from "@/assets/pre-wedding/_e0a7620t.jpg";

const preWeddingImages = [
  image01,
  image042,
  image053,
  image13,
  image18,
  image1a34,
  image1a35,
  image24,
  image204,
  image3,
  image3e0a0314,
  image3e0a4385,
  image3e0a5215,
  image3e0a5620,
  image3e0a5898,
  image4,
  image63,
  image9,
  imageGuru37392,
  imageGuru3950Exposure,
  imageGuru4103,
  imageGyfyyrfuy11,
  imageGyfyyrfuy110,
  imageGyfyyrfuy111,
  imageGyfyyrfuy113,
  imageGyfyyrfuy116,
  imageGyfyyrfuy15,
  image_E0a0660,
  image_E0a0664,
  image_E0a0689,
  image_E0a7574,
  image_E0a7620t,
];

const RotatingPreWeddingImage = () => {
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
        setCurrentIndex((prevIndex) => (prevIndex + 1) % preWeddingImages.length);
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
        src={preWeddingImages[currentIndex]}
        alt="Pre-Wedding"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
    </div>
  );
};

export default RotatingPreWeddingImage;