import { useState } from "react";

// Import all new engagement images
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

const EngagementGallery = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {engagementImages.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-square overflow-hidden rounded-lg animate-scale-in"
            style={{ animationDelay: `${(index % 8) * 50}ms` }}
          >
            <img
              src={image}
              alt={`Engagement ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EngagementGallery;