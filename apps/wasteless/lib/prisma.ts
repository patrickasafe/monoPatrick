import { PrismaClient } from "@prisma/client";
let prisma: PrismaClient;

//@ts-ignore
if (process.env.NEXTAUTH_URL === "production") {
  prisma = new PrismaClient();
} else {
  //@ts-ignore
  if (!global.prisma) {
    //@ts-ignore
    global.prisma = new PrismaClient();
  }
  //@ts-ignore
  prisma = global.prisma;
}

export default prisma;
