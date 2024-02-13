import React from "react";

interface SingleProductHeaderProps {
  name: string;
  price: number;
  promotionalPrice: number | null;
  currency: string;
}

const SingleProductHeader: React.FC<SingleProductHeaderProps> = ({
  name,
  price,
  promotionalPrice,
  currency,
}) => {
  return (
    <header className="px-4 flex flex-wrap flex-col gap-4">
      <h2 className="text-2xl font-bold">{name}</h2>
      <div>
        {promotionalPrice ? (
          <>
            <p className="text-xl font-medium line-through text-custom-blue">
              {price}
              {currency}
            </p>
            <p className="text-xl font-medium">
              {promotionalPrice}
              {currency}
            </p>
          </>
        ) : (
          <p className="text-xl font-medium">
            {price}
            {currency}
          </p>
        )}
      </div>
      <p className="text-sm font-thin">
        Delivery costs included in the summary.
      </p>
    </header>
  );
};

export default SingleProductHeader;
