import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getItems() {
  const items = await prisma.item.findMany(
    {
    where: {
      deletedAt: null,
    },
    select: {
      id: true,
      name: true,
      createdAt: true,
      expiration: true,
    }
  }
  );

  return items;
}
