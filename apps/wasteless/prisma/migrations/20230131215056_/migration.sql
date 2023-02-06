/*
  Warnings:

  - Added the required column `ownerId` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "expiration" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" DATETIME,
    "ownerId" TEXT NOT NULL
);
INSERT INTO "new_Item" ("createdAt", "deletedAt", "expiration", "id", "name") SELECT "createdAt", "deletedAt", "expiration", "id", "name" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
CREATE INDEX "Item_ownerId_idx" ON "Item"("ownerId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
