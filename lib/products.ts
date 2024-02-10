import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllProducts() {
  const products = await prisma.product.findMany({
    include: {
      images: true,
    },
  });
  return products;
}