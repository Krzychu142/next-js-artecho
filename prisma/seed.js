const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: "jan@kowalski.com",
      name: "Jan Kowalski",
      posts: {
        create: [
          {
            title: "Pierwszy post",
            content: "To jest treść pierwszego posta",
            published: true,
          },
          {
            title: "Drugi post",
            content: "To jest treść drugiego posta",
            published: false,
          },
        ],
      },
    },
  });

  console.log(user);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
