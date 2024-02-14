import SingleProductHeader from "@/components/product/single-product-header";
import Image from "next/image";
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
        <section className="py-4">
          <div className="relative w-full h-1/2screen">
            <Image
              src={
                "https://stoprocent.com/cdn/shop/files/bluzaLogo.png?v=1697656725&width=640"
              }
              alt="image"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex overflow-x-auto justify-start border-b-2 border-custom-blue gap-x-2 p-2">
            <figure className="relative w-12 h-12 shrink-0">
              <Image
                src={
                  "https://stoprocent.com/cdn/shop/files/bluzaLogo.png?v=1697656725&width=640"
                }
                alt="image"
                fill
                className="object-cover"
              />
            </figure>
            <figure className="relative w-12 h-12 shrink-0">
              <Image
                src={
                  "https://stoprocent.com/cdn/shop/files/bluzaLogo.png?v=1697656725&width=640"
                }
                alt="image"
                fill
                className="object-cover"
              />
            </figure>
            <figure className="relative w-12 h-12 shrink-0">
              <Image
                src={
                  "https://stoprocent.com/cdn/shop/files/bluzaLogo.png?v=1697656725&width=640"
                }
                alt="image"
                fill
                className="object-cover"
              />
            </figure>
            <figure className="relative w-12 h-12 shrink-0">
              <Image
                src={
                  "https://stoprocent.com/cdn/shop/files/bluzaLogo.png?v=1697656725&width=640"
                }
                alt="image"
                fill
                className="object-cover"
              />
            </figure>
            <figure className="relative w-12 h-12 shrink-0">
              <Image
                src={
                  "https://stoprocent.com/cdn/shop/files/bluzaLogo.png?v=1697656725&width=640"
                }
                alt="image"
                fill
                className="object-cover"
              />
            </figure>
            <figure className="relative w-12 h-12 shrink-0">
              <Image
                src={
                  "https://stoprocent.com/cdn/shop/files/bluzaLogo.png?v=1697656725&width=640"
                }
                alt="image"
                fill
                className="object-cover"
              />
            </figure>
            <figure className="relative w-12 h-12 shrink-0">
              <Image
                src={
                  "https://stoprocent.com/cdn/shop/files/bluzaLogo.png?v=1697656725&width=640"
                }
                alt="image"
                fill
                className="object-cover"
              />
            </figure>
            <figure className="relative w-12 h-12 shrink-0">
              <Image
                src={
                  "https://stoprocent.com/cdn/shop/files/bluzaLogo.png?v=1697656725&width=640"
                }
                alt="image"
                fill
                className="object-cover"
              />
            </figure>
            <figure className="relative w-12 h-12 shrink-0">
              <Image
                src={
                  "https://stoprocent.com/cdn/shop/files/bluzaLogo.png?v=1697656725&width=640"
                }
                alt="image"
                fill
                className="object-cover"
              />
            </figure>
            <figure className="relative w-12 h-12 shrink-0">
              <Image
                src={
                  "https://stoprocent.com/cdn/shop/files/bluzaLogo.png?v=1697656725&width=640"
                }
                alt="image"
                fill
                className="object-cover"
              />
            </figure>
          </div>
        </section>
        <section>content</section>
      </main>
    </div>
  );
};

export default SingleProductPage;
