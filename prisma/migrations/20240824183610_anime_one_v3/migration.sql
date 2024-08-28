/*
  Warnings:

  - You are about to drop the column `carteId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_carteId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "carteId";

-- AddForeignKey
ALTER TABLE "CarteBancaire" ADD CONSTRAINT "CarteBancaire_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
