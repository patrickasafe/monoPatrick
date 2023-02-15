import { PrismaClient } from "@prisma/client";
declare global {
  var prisma: PrismaClient | undefined;
}

if (process.env.NEXTAUTH_URL === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}
