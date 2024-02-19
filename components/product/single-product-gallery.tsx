"use client";

import Image from "next/image";
import React, { useState } from "react";
import classes from "./single-product-gallery.module.css";
import { ImageType } from "@/types/ImageType";

interface SingleProductGalleryProps {
  images: ImageType[];
}

const SingleProductGallery: React.FC<SingleProductGalleryProps> = ({
  images,
}) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleSelectPhoto = (index: number) => {
    setSelectedPhotoIndex(index);
    setIsFullscreen(false);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section className="w-full max-w-xl min-w-1/2screen mb-8">
      <div
        className={` ${
          isFullscreen
            ? "fixed inset-0 z-20 bg-black"
            : "relative h-1/2screen lg:h-3/4screen"
        }`}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-200 ease-in-out ${
              index === selectedPhotoIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.url}
              alt={`image ${index}`}
              fill
              className={`object-contain ${
                isFullscreen ? "cursor-zoom-out" : "cursor-zoom-in "
              }`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              title="Click to view full screen"
              onClick={toggleFullscreen}
            />
          </div>
        ))}
      </div>
      <div
        className={`flex overflow-x-auto justify-start border-b-2 border-custom-blue gap-x-2 p-2 ${classes["scrollbar-hide"]}`}
      >
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleSelectPhoto(index)}
            className="focus:outline-none"
          >
            <figure className="relative w-14 h-14 shrink-0">
              <Image
                src={image.url}
                alt={`image thumbnail ${index}`}
                fill
                className={`object-cover object-center ${
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
