import HeroSection from "@/components/main-page/hero-section";
import ProductsGrid from "@/components/products/products-grid";
import { getAllProducts } from "@/lib/products";

async function Products() {
  const products = await getAllProducts();
  return products;
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
