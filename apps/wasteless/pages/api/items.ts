import prisma from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getSessionToken } from "../../lib/getSessionToken";
import { getUserId } from "../../lib/getUserId";
import { getItems } from "../../lib/items";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const session = await getServerSession(request, response, authOptions);
  const { method } = request;
  const ownerId = session.user.id;

  if (session) {
    if (method === "GET") {
      const items = await getItems(ownerId);

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
  } else {
    return response.status(401).send("Unauthorized");
  }

  return response.status(404).json({ message: "Route not found" });
}
