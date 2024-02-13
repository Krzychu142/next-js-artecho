import SingleProductHeader from "@/components/product/single-product-header";
import React from "react";

const SingleProductPage = () => {
  return (
    <div className="mt-24">
      <SingleProductHeader
        name="Bluza Stoprocent RIPPEDTAG Czarna"
        price={349.99}
        promotionalPrice={339.99}
        currency="PLN"
      />
      <main>
        <section>galery</section>
        <section>content</section>
      </main>
    </div>
  );
};

export default SingleProductPage;
