import HeroSection from "@/components/main-page/hero-section";
import ProductsGrid from "@/components/thumbnails/thumbnails-grid";
import {getAllProducts} from "@/lib/products";

async function Products() {
    return await getAllProducts();
}

export default async function Home() {
  const products = await Products();

  return (
    <main>
      <HeroSection />
      <ProductsGrid products={products} />
    </main>
  );
}
