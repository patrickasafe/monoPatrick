import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUserId = async (sessionToken: string): Promise<string> => {
  const userIdObj = await prisma.session.findUniqueOrThrow({
    where: {
      sessionToken,
    },
    select: {
      userId: true,
    },
  });

  return userIdObj["userId"];
};
