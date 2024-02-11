import React from "react";

interface ThumbnailDescriptionProps {
  name: string;
  promotionalPrice: number | null;
  price: number;
  currency: string;
}

const ThumbnailDescription: React.FC<ThumbnailDescriptionProps> = ({
  name,
  promotionalPrice,
  price,
  currency,
}) => {
  return (
    <div>
      <h4 className="font-bold">{name}</h4>
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
