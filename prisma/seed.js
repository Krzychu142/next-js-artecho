const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const imageUrls = [
  "https://m.media-amazon.com/images/I/71llNvamhuL._AC_SX679_.jpg",
  "https://m.media-amazon.com/images/I/61Jk-4gdQxL._AC_SX679_.jpg",
  "https://m.media-amazon.com/images/I/71yUJW5BqxL._AC_SX679_.jpg",
];

function createSlug(name, id) {
  const slugifiedName = name
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `${slugifiedName}-${id}`;
}

async function main() {
  for (let i = 1; i <= 3; i++) {
    const name = `Poster #${i}`;
    const slug = createSlug(name, i);

    await prisma.product.create({
      data: {
        name: `Poster #${i}`,
        slug: slug,
        description: `Description of poster #${i}. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        EAN: `123456789012${i}`,
        price: parseFloat((10.99 * i).toFixed(2)),
        promotionalPrice:
          i % 2 === 0 ? parseFloat((9.99 * i).toFixed(2)) : null,
        currency: "PLN",
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
