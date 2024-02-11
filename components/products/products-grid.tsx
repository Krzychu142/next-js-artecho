import { ProductType } from "@/types/ProductType";
import React from "react";
import ThumbnailProduct from "./thumbnail-product";

interface ProductsGridProps {
  products: ProductType[];
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products }) => {
  // ONLY FOR DEV
  const duplicatedProducts = [...products, ...products, ...products];

  return (
    <main className="flex justify-center">
      <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-6">
        {duplicatedProducts.map((product, index) => (
          <ThumbnailProduct product={product} key={index} />
        ))}
      </ul>
    </main>
  );
};

export default ProductsGrid;
