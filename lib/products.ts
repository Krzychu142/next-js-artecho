import prisma from './prisma';

export async function getAllProducts() {
  const products = await prisma.product.findMany({
    include: {
      images: true,
    },
  });
  return products;
}

export async function getProductBySlug(slug: string) {
  const product = await prisma.product.findUniqueOrThrow({
    where: {
      slug: slug,
    },
    include: {
      images: true,
    },
  });

  return product;
}