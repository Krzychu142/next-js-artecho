import { ProductType } from "@/types/ProductType";
import React from "react";

interface ProductsGridProps {
  products: ProductType[];
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products }) => {
  return (
    <>
      <header>
        <h2>Zobacz nasze produkty</h2>
      </header>
      <main>tutaj będzie wiele produktów</main>
    </>
  );
};

export default ProductsGrid;
