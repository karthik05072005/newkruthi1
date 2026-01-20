import { useState } from "react";
import { X } from "lucide-react";

// Import all new maternity images
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

// Create array of all imported images
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

const MaternityGallery = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {maternityImages.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-square overflow-hidden rounded-lg animate-scale-in"
            style={{ animationDelay: `${(index % 8) * 50}ms` }}
          >
            <img
              src={image}
              alt={`Maternity ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaternityGallery;