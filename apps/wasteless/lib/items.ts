import { PrismaClient } from "@prisma/client";
import { getUserId } from "./getUserId";

const prisma = new PrismaClient();

export async function getItems(sessionToken: string) {
  const ownerId = await getUserId(sessionToken);

  const items = await prisma.item.findMany({
    where: {
      deletedAt: null,
      ownerId,
    },
    select: {
      id: true,
      name: true,
      createdAt: true,
      expiration: true,
    },
  });

  return items;
}
