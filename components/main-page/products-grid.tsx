import { ImageType } from "@/types/ImageType";
import { ProductType } from "@/types/ProductType";
import { PlusSquareOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";

interface ProductsGridProps {
  products: ProductType[];
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products }) => {
  // ONLY FOR DEV
  const duplicatedProducts = [...products, ...products, ...products];

  return (
    <main className="flex justify-center">
      <ul className="w-full grid grid-cols-2 py-6">
        {duplicatedProducts.map((product, index) => (
          <li key={index} className="flex flex-col items-center">
            <div className="relative w-full h-60">
              <Image src={product.images[0].url} alt={product.name} fill />
            </div>
            <div className="w-10/12 mb-4 flex items-center justify-between">
              <div>
                <h4 className="font-bold">{product.name}</h4>
                <p>
                  {product.price}
                  {product.currency}
                </p>
              </div>
              <PlusSquareOutlined className="text-2xl" />
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ProductsGrid;
