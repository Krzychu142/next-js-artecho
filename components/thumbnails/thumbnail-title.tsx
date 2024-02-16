import React from "react";

interface ThumbnailTitleProps {
  title: string;
}

const ThumbnailTitle: React.FC<ThumbnailTitleProps> = ({ title }) => {
  return (
    <li className="flex justify-center items-center">
      <h4 className="text-2xl md:text-3xl">{title}</h4>
    </li>
  );
};

export default ThumbnailTitle;
