import { PlusOutlined } from "@ant-design/icons";
import React from "react";

interface SingleProductContentProps {
  description: string;
  promotionalPrice: number | null;
  price: number;
  currency: string;
}

const SingleProductContent: React.FC<SingleProductContentProps> = ({
  description,
  promotionalPrice,
  price,
  currency,
}) => {
  return (
    <section className="flex flex-col items-start gap-4 my-4 px-4">
      <p>{description}</p>
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
        {/* * TODO: add to schema */}
        <p>
          Lowest price within the last 30 days: {price}
          {currency}
        </p>
      </div>
      <p className="text-sm font-thin">
        Delivery costs included in the summary.
      </p>
      <button className="mx-auto w-full max-w-96 p-2 border-2 border-custom-blue rounded-3xl duration-200 ease-in-out flex items-center justify-center gap-2 font-medium hover:bg-black hover:text-white">
        Add to cart
        <PlusOutlined
          className="text-custom-blue "
          style={{ fontSize: "24px", textShadow: "0 0 2px #000" }}
        />
      </button>
    </section>
  );
};

export default SingleProductContent;
