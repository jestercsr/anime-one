/*
  Warnings:

  - You are about to drop the column `adresse` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Categorie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Produit` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `Avatar` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Produit" DROP CONSTRAINT "Produit_categorieId_fkey";

-- AlterTable
ALTER TABLE "Avatar" ADD COLUMN     "category" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "adresse",
ALTER COLUMN "date_naissance" SET DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "Categorie";

-- DropTable
DROP TABLE "Produit";

-- CreateTable
CREATE TABLE "Commande" (
    "id" SERIAL NOT NULL,
    "product" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Commande_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Adresse" (
    "id" SERIAL NOT NULL,
    "numero_rue" INTEGER NOT NULL,
    "voie" VARCHAR(255) NOT NULL,
    "code_postal" TEXT NOT NULL,
    "ville" VARCHAR(255) NOT NULL,
    "pays" VARCHAR(255) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Adresse_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Commande" ADD CONSTRAINT "Commande_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adresse" ADD CONSTRAINT "Adresse_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
