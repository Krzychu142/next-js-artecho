"use client";

import Image from "next/image";
import React, { useState } from "react";
import classes from "./single-product-gallery.module.css";

const SingleProductGallery = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const photos = [
    "https://stoprocent.com/cdn/shop/files/1kaptur.jpg?v=1697656725",
    "https://stoprocent.com/cdn/shop/files/bluzaLogo.png?v=1697656725",
    "https://stoprocent.com/cdn/shop/files/9_609524b1-23ee-464a-bfdb-20f3e19774b8.jpg?v=1698082659",
    "https://stoprocent.com/cdn/shop/files/metka_bluza2_71fe7e30-2a89-4527-9730-6500b93258bd.jpg?v=1698082659",
    "https://stoprocent.com/cdn/shop/files/metka_bluza1_bcb97edc-da65-4ce0-bd6e-8bdc543a89ca.jpg?v=1698082659",
    "https://stoprocent.com/cdn/shop/files/bluza_4e862c7c-a196-4040-9fd6-d85ba57ae31f.jpg?v=1698082659",
    "https://stoprocent.com/cdn/shop/files/recznik1_9c323f8e-d4e2-4a7b-83f9-780c9f333f99.jpg?v=1698082660",
    "https://stoprocent.com/cdn/shop/files/6_3fa4ad9c-3886-4f5e-ab2c-d41c9cf30bf6.jpg?v=1697656725",
    "https://stoprocent.com/cdn/shop/files/hoodietyl2.jpg?v=1697656725",
  ];

  const handleSelectPhoto = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  return (
    <section className="py-4 md:w-1/2 max-w-3xl">
      <div className="relative min-w-full  h-3/4screen">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-200 ease-in-out ${
              index === selectedPhotoIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={photo}
              alt={`image ${index}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
      <div
        className={`flex overflow-x-auto justify-start border-b-2 border-custom-blue gap-x-2 p-2 ${classes["scrollbar-hide"]}`}
      >
        {photos.map((photo, index) => (
          <button
            key={index}
            onClick={() => handleSelectPhoto(index)}
            className="focus:outline-none"
          >
            <figure className="relative w-14 h-14 shrink-0">
              <Image
                src={photo}
                alt={`image thumbnail ${index}`}
                fill
                className={`object-cover ${
                  index === selectedPhotoIndex
                    ? "border-4 border-custom-blue"
                    : ""
                }`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </figure>
          </button>
        ))}
      </div>
    </section>
  );
};

export default SingleProductGallery;
