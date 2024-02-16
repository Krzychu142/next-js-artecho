import SingleProductContent from "@/components/product/single-prodcut-content";
import SingleProductGallery from "@/components/product/single-product-gallery";
import SingleProductHeader from "@/components/product/single-product-header";
import React from "react";
import { NextPage } from "next";
import { getProductBySlug } from "@/lib/products";
import { notFound } from "next/navigation";
import { ProductType } from "@/types/ProductType";

interface SingleProductPageProps {
  params: {
    slug: string;
  };
}

const SingleProductPage: NextPage<SingleProductPageProps> = async ({
  params,
}) => {
  const product: ProductType = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const {
    id,
    name,
    description,
    EAN,
    price,
    promotionalPrice,
    currency,
    addedAt,
    quantity,
    isAvilable,
    images,
  } = product;

  return (
    <main className="mt-24 flex flex-col lg:flex-row items-center lg:items-start justify-center mb-8">
      <SingleProductGallery images={images} />
      <div className="max-w-screen-md">
        <SingleProductHeader name={name} />
        <SingleProductContent
          description={description}
          promotionalPrice={promotionalPrice}
          price={price}
          currency={currency}
        />
      </div>
    </main>
  );
};

export default SingleProductPage;
