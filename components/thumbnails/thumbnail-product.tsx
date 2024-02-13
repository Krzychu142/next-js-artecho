"use client";

import { ProductType } from "@/types/ProductType";
import React, { useState } from "react";
import ThumbnailDescription from "./thumbnail-description";
import ThumbnaulImage from "./thumbnail-images";
import ThumbnaulButton from "./thumbnail-button";

interface ThumbnailProductProps {
  product: ProductType;
}

const ThumbnailProduct: React.FC<ThumbnailProductProps> = ({ product }) => {
  const { id, images, name, price, currency, promotionalPrice, slug } = product;

  //TODO: check if images has minum 2 url-s

  const [isMouseOver, setMouseOver] = useState(false);

  return (
    <li
      key={id}
      className="flex flex-col flex-wrap items-center"
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <ThumbnaulImage images={images} name={name} isMouseOver={isMouseOver} />
      <div className="max-w-7/12 w-64 md:w-72 mb-4 flex items-center justify-between">
        <ThumbnailDescription
          name={name}
          price={price}
          promotionalPrice={promotionalPrice}
          currency={currency}
          isMouseOver={isMouseOver}
          slug={slug}
        />
        <ThumbnaulButton isMouseOver={isMouseOver} />
      </div>
    </li>
  );
};

export default ThumbnailProduct;
