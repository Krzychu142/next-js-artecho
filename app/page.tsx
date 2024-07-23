import HeroSection from "@/components/main-page/hero-section";
import ProductsGrid from "@/components/thumbnails/thumbnails-grid";
import { getAllProducts } from "@/lib/products";
import { getServerSession } from "next-auth";

async function Products() {
  return getAllProducts();
}

export default async function Home() {
  const products = await Products();
  const session = await getServerSession();

  return (
    <main>
      <HeroSection isUserLogged={session ? true : false} />
      <ProductsGrid products={products} />
    </main>
  );
}
