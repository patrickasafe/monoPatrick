import { getUserId } from "./getUserId";
import prisma from "./prisma";


export async function getItems(ownerId: string) {

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
