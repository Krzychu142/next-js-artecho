import React from "react";
import classes from "./thumbnail-description-animation.module.css";

interface ThumbnailDescriptionProps {
  name: string;
  promotionalPrice: number | null;
  price: number;
  currency: string;
  isMouseOver: boolean;
}

const ThumbnailDescription: React.FC<ThumbnailDescriptionProps> = ({
  name,
  promotionalPrice,
  price,
  currency,
  isMouseOver,
}) => {
  return (
    <div>
      <h4
        className={`font-bold my-2 ${classes.animated} ${
          isMouseOver ? classes.active : ""
        }`}
      >
        {name}
      </h4>
      <p className={`${promotionalPrice && "line-through "} `}>
        {price}
        {currency}
      </p>
      {promotionalPrice && (
        <p>
          {promotionalPrice}
          {currency}
        </p>
      )}
    </div>
  );
};

export default ThumbnailDescription;
