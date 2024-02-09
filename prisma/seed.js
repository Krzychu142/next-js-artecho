const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const imageUrls = [
  "https://m.media-amazon.com/images/I/71llNvamhuL._AC_SX679_.jpg",
  "https://m.media-amazon.com/images/I/61Jk-4gdQxL._AC_SX679_.jpg",
  "https://m.media-amazon.com/images/I/71yUJW5BqxL._AC_SX679_.jpg",
];

async function main() {
  for (let i = 1; i <= 3; i++) {
    await prisma.product.create({
      data: {
        name: `Poster #${i}`,
        description: `Description of poster #${i}`,
        EAN: `123456789012${i}`,
        price: parseFloat((10.99 * i).toFixed(2)),
        promotionalPrice:
          i % 2 === 0 ? parseFloat((9.99 * i).toFixed(2)) : null,
        quantity: 100 * i,
        isAvilable: true,
        images: {
          create: imageUrls.map((url) => ({
            url: url,
          })),
        },
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
