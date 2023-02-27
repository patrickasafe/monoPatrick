import prisma from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getSessionToken } from "../../lib/getSessionToken";
import { getUserId } from "../../lib/getUserId";
import { getItems } from "../../lib/items";



export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { method } = request;
  const cookies = request.cookies;
  const sessionToken = getSessionToken(cookies);
  //@ts-ignore TODO: FIX
  const ownerId = await getUserId(sessionToken);


  if (!sessionToken) {
    return response.status(401).send("Unauthorized");
  } else {
    if (method === "GET") {
      const items = await getItems(sessionToken);

      return response.status(200).json(items);
    } else if (method === "POST") {
      const { name, expiration } = request.body;

      const result = await prisma.item.create({
        data: {
          name,
          expiration,
          ownerId,
        },
      });

      return response.status(200).json(result);
    } else if (method === "PATCH") {
      const { id } = request.body;

      const result = await prisma.item.update({
        where: {
          id,
        },
        data: {
          deletedAt: new Date(),
        },
      });

      return response.status(200).json(result);
    }
  }

  return response.status(404).json({ message: "Route not found" });
}
