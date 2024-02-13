const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function clearTables() {
  await prisma.image.deleteMany({});
  await prisma.product.deleteMany({});
}

clearTables()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
