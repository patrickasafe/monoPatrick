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
    const items = await getItems();

    return res.status(200).json(items);
  } else if (method === "POST") {
    const item = await req.body;

    console.log(item)

    const new_item = {
      data: {
        name: item.name,
        expiration: item.expiration,
      },
    };

    prisma.item.create(new_item);

    return res.status(200).json({
      created_item: new_item,
    });
  }

  return res.status(404).json({ message: "Route not found" });
}
