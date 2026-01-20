import { useState } from "react";
import { X } from "lucide-react";

// Import all new portrait images
import image_E0a3036 from "@/assets/portrait/_e0a3036.jpg";
import image_E0a3070 from "@/assets/portrait/_e0a3070.jpg";
import image_E0a3896 from "@/assets/portrait/_e0a3896.jpg";
import image_V9a1250 from "@/assets/portrait/_v9a1250.jpg";
import image_V9a1252 from "@/assets/portrait/_v9a1252.jpg";

// Create array of all imported images
const portraitsImages = [
  image_E0a3036,
  image_E0a3070,
  image_E0a3896,
  image_V9a1250,
  image_V9a1252,
];

const PortraitsGallery = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {portraitsImages.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-square overflow-hidden rounded-lg animate-scale-in"
            style={{ animationDelay: `${(index % 8) * 50}ms` }}
          >
            <img
              src={image}
              alt={`Portraits ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortraitsGallery;