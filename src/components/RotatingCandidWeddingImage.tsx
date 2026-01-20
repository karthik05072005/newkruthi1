import { useState, useEffect, useRef } from "react";

// Import all new candid wedding images for the rotating display
import image00111_48 from "@/assets/candid-wedding/00111 (48).jpg";
import image0012 from "@/assets/candid-wedding/0012.jpg";
import image01DSC00007_268 from "@/assets/candid-wedding/01DSC00007 (268).jpg";
import image01DSC00007_406 from "@/assets/candid-wedding/01DSC00007 (406).jpg";
import image01DSC00007_446 from "@/assets/candid-wedding/01DSC00007 (446).jpg";
import image0E0A0003 from "@/assets/candid-wedding/0E0A0003.jpg";
import image0E0A0387 from "@/assets/candid-wedding/0E0A0387.jpg";
import image0E0A0457 from "@/assets/candid-wedding/0E0A0457.jpg";
import image0E0A0494 from "@/assets/candid-wedding/0E0A0494.jpg";
import image0E0A1475 from "@/assets/candid-wedding/0E0A1475.jpg";
import image0E0A1961 from "@/assets/candid-wedding/0E0A1961.jpg";
import image0E0A2091 from "@/assets/candid-wedding/0E0A2091.jpg";
import image0E0A3433 from "@/assets/candid-wedding/0E0A3433.jpg";
import image0E0A6048 from "@/assets/candid-wedding/0E0A6048.jpg";
import image0E0A6059 from "@/assets/candid-wedding/0E0A6059.jpg";
import image0E0A9883 from "@/assets/candid-wedding/0E0A9883.jpg";
import image13_4 from "@/assets/candid-wedding/13 (4).jpg";
import image1A_1 from "@/assets/candid-wedding/1A (1).jpg";
import image1A_22 from "@/assets/candid-wedding/1A (22).jpg";
import image1A_26 from "@/assets/candid-wedding/1A (26).jpg";
import image3E0A0360Edit from "@/assets/candid-wedding/3E0A0360-Edit.jpg";
import image3E0A1177 from "@/assets/candid-wedding/3E0A1177.jpg";
import image3E0A2381 from "@/assets/candid-wedding/3E0A2381.jpg";
import image4_5 from "@/assets/candid-wedding/4 (5).jpg";
import imageDSC00355 from "@/assets/candid-wedding/DSC00355.jpg";
import imageDSC00555 from "@/assets/candid-wedding/DSC00555.jpg";
import imageDSC01452 from "@/assets/candid-wedding/DSC01452.jpg";
import imageGURU5333SGSGE_2 from "@/assets/candid-wedding/GURU5333SGSGE (2).jpg";
import imageGURU5333SGSGE_3 from "@/assets/candid-wedding/GURU5333SGSGE (3).jpg";
import imageGURU5333SGSGE_4 from "@/assets/candid-wedding/GURU5333SGSGE (4).jpg";
import imageGURU5333SGSGE_6 from "@/assets/candid-wedding/GURU5333SGSGE (6).jpg";
import imageGURU5928 from "@/assets/candid-wedding/GURU5928.jpg";
import imageGURU6210 from "@/assets/candid-wedding/GURU6210.jpg";
import imageGURU6332 from "@/assets/candid-wedding/GURU6332.jpg";
import imageIMG20200228WA0051 from "@/assets/candid-wedding/IMG-20200228-WA0051.jpg";
import imageUntitled1ERTUY from "@/assets/candid-wedding/Untitled-1ERTUY.jpg";
import imageUntitled1new from "@/assets/candid-wedding/Untitled-1new.jpg";
import imageUntitled1REYERY from "@/assets/candid-wedding/Untitled-1REYERY.jpg";
import imageUntitled1ryerery from "@/assets/candid-wedding/Untitled-1ryerery.jpg";
import imageUntitled45 from "@/assets/candid-wedding/Untitled-45.jpg";
import image_DSC1282 from "@/assets/candid-wedding/_DSC1282.jpg";
import image_DSC1445 from "@/assets/candid-wedding/_DSC1445.jpg";
import image_DSC1520 from "@/assets/candid-wedding/_DSC1520.jpg";
import image_DSC2161 from "@/assets/candid-wedding/_DSC2161.jpg";
import image_DSC2217 from "@/assets/candid-wedding/_DSC2217.jpg";
import image_DSC2455 from "@/assets/candid-wedding/_DSC2455.jpg";
import image_DSC2481 from "@/assets/candid-wedding/_DSC2481.jpg";
import image_DSC2554 from "@/assets/candid-wedding/_DSC2554.jpg";
import image_DSC2643 from "@/assets/candid-wedding/_DSC2643.jpg";
import image_DSC2735 from "@/assets/candid-wedding/_DSC2735.jpg";
import image_DSC3191 from "@/assets/candid-wedding/_DSC3191.jpg";
import image_DSC3252 from "@/assets/candid-wedding/_DSC3252.jpg";
import image_E0A2661 from "@/assets/candid-wedding/_E0A2661.jpg";
import image_E0A2990 from "@/assets/candid-wedding/_E0A2990.jpg";
import image_E0A3006 from "@/assets/candid-wedding/_E0A3006.jpg";
import image_E0A3349 from "@/assets/candid-wedding/_E0A3349.jpg";
import image_E5A0805Exposure from "@/assets/candid-wedding/_E5A0805-Exposure.jpg";
import image_E5A95132 from "@/assets/candid-wedding/_E5A9513-2.jpg";

const candidWeddingImages = [
  image00111_48,
  image0012,
  image01DSC00007_268,
  image01DSC00007_406,
  image01DSC00007_446,
  image0E0A0003,
  image0E0A0387,
  image0E0A0457,
  image0E0A0494,
  image0E0A1475,
  image0E0A1961,
  image0E0A2091,
  image0E0A3433,
  image0E0A6048,
  image0E0A6059,
  image0E0A9883,
  image13_4,
  image1A_1,
  image1A_22,
  image1A_26,
  image3E0A0360Edit,
  image3E0A1177,
  image3E0A2381,
  image4_5,
  imageDSC00355,
  imageDSC00555,
  imageDSC01452,
  imageGURU5333SGSGE_2,
  imageGURU5333SGSGE_3,
  imageGURU5333SGSGE_4,
  imageGURU5333SGSGE_6,
  imageGURU5928,
  imageGURU6210,
  imageGURU6332,
  imageIMG20200228WA0051,
  imageUntitled1ERTUY,
  imageUntitled1new,
  imageUntitled1REYERY,
  imageUntitled1ryerery,
  imageUntitled45,
  image_DSC1282,
  image_DSC1445,
  image_DSC1520,
  image_DSC2161,
  image_DSC2217,
  image_DSC2455,
  image_DSC2481,
  image_DSC2554,
  image_DSC2643,
  image_DSC2735,
  image_DSC3191,
  image_DSC3252,
  image_E0A2661,
  image_E0A2990,
  image_E0A3006,
  image_E0A3349,
  image_E5A0805Exposure,
  image_E5A95132,
];

const RotatingCandidWeddingImage = () => {
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
        setCurrentIndex((prevIndex) => (prevIndex + 1) % candidWeddingImages.length);
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
        src={candidWeddingImages[currentIndex]}
        alt="Candid Wedding"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
    </div>
  );
};

export default RotatingCandidWeddingImage;