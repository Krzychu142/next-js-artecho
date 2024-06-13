import prisma from './prisma';

export async function getAllProducts() {
  return prisma.product.findMany({
    include: {
      images: true,
    },
  });
}

export async function getProductBySlug(slug: string) {
  return prisma.product.findUniqueOrThrow({
    where: {
      slug: slug,
    },
    include: {
      images: true,
    },
  });
}