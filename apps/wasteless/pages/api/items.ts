import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getItems } from "../../lib/items";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  if (method === "GET") {
    const items = getItems()

    return res.status(200).json({
      data: items,
    });
  } else if (method === "POST") {
    const { item } = req.body;

    await prisma.user.create({
      data: {
        item,
      },
    });

    return res.status(200).json({
      data: item,
    });
  }

  return res.status(404).json({ message: "Route not found" });
}
