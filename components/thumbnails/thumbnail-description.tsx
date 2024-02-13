import React from "react";
import classes from "./thumbnail-description-animation.module.css";
import Link from "next/link";

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
    <section>
      <Link title="Move to page of this product" href="/">
        <h4
          className={`font-bold my-2 ${classes.animated} ${
            isMouseOver ? classes.active : ""
          }`}
        >
          {name}
        </h4>
      </Link>
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
    </section>
  );
};

export default ThumbnailDescription;
