import prisma from "./prisma";

export const getUserId = async (sessionToken: string): Promise<string> => {
  const userIdObj = await prisma.session.findFirstOrThrow({
    where: {
      sessionToken,
    },
    select: {
      userId: true,
    },
  });

  return userIdObj["userId"];
};
