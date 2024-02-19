import Image from "next/image";
import React from "react";
import asideImage from "@/public/images/register-signin-image.jpg";

const AsideImage = () => {
  return (
    <div className="relative inset-0 min-h-screen w-1/2screen">
      <Image
        src={asideImage}
        alt="absolute Geometric shape background in engraving style."
        className="w-full h-full object-cover"
        priority
      />
      <div className="absolute inset-0 bg-custom-blue bg-opacity-75 z-0"></div>
    </div>
  );
};

export default AsideImage;
