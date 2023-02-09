import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getSessionToken } from "../../lib/getSessionToken";
import { getUserId } from "../../lib/getUserId";
import { getItems } from "../../lib/items";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const cookies = req.cookies;
  const sessionToken = getSessionToken(cookies);
  //@ts-ignore TODO: FIX
  const ownerId = await getUserId(sessionToken);


  if (!sessionToken) {
    return res.status(401).send("Unauthorized");
  } else {
    if (method === "GET") {
      const items = await getItems(sessionToken);

      return res.status(200).json(items);
    } else if (method === "POST") {
      const { name, expiration } = req.body;

      const result = await prisma.item.create({
        data: {
          name,
          expiration,
          ownerId,
        },
      });

      return res.status(200).json(result);
    } else if (method === "PATCH") {
      const { id } = req.body;

      const result = await prisma.item.update({
        where: {
          id,
        },
        data: {
          deletedAt: new Date(),
        },
      });

      return res.status(200).json(result);
    }
  }

  return res.status(404).json({ message: "Route not found" });
}
