import SingleProductContent from "@/components/product/single-prodcut-content";
import SingleProductGallery from "@/components/product/single-product-gallery";
import SingleProductHeader from "@/components/product/single-product-header";
import React from "react";

const SingleProductPage = () => {
  return (
    <main className="mt-24 flex flex-col md:flex-row md:justify-center md:gap-8 pb-8 md:py-8">
      <SingleProductGallery />
      <div className="max-w-screen-md md:py-4">
        <SingleProductHeader
          name="Bluza Stoprocent RIPPEDTAG Czarna"
          price={349.99}
          promotionalPrice={339.99}
          currency="PLN"
        />
        <SingleProductContent />
      </div>
    </main>
  );
};

export default SingleProductPage;
