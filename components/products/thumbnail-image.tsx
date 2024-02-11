import { ImageType } from "@/types/ImageType";
import Image from "next/image";
import React from "react";

interface ThumbnaulImageProps {
  name: string;
  images: ImageType[];
  isMouseOver: boolean;
}

const ThumbnaulImage: React.FC<ThumbnaulImageProps> = ({
  name,
  images,
  isMouseOver,
}) => {
  return (
    <div className="relative w-full max-w-80 h-96">
      <Image
        src={images[0].url}
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`${
          isMouseOver ? "opacity-0" : "opacity-100"
        } transition-opacity duration-200 ease-in-out"`}
      />
      <Image
        src={images[1].url}
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`${
          isMouseOver ? "opacity-100" : "opacity-0"
        } transition-opacity duration-200 ease-in-out`}
      />
    </div>
  );
};

export default ThumbnaulImage;
