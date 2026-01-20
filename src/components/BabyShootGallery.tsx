import { useState, useEffect } from "react";

// Import all new baby shoot images
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

const BabyShootGallery = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {babyShootImages.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg animate-scale-in"
            style={{ animationDelay: `${(index % 8) * 50}ms` }}
          >
            <img
              src={image}
              alt={`Baby shoot ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BabyShootGallery;