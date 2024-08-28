/*
  Warnings:

  - You are about to drop the column `avatar` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `carte_bancaire` on the `User` table. All the data in the column will be lost.
  - Added the required column `avatarId` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "avatar",
ADD COLUMN     "avatarId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "carte_bancaire",
ADD COLUMN     "carteId" INTEGER,
ALTER COLUMN "password" SET DATA TYPE VARCHAR(60),
ALTER COLUMN "date_naissance" SET DATA TYPE DATE;

-- CreateTable
CREATE TABLE "CarteBancaire" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "nom_carte" VARCHAR(255) NOT NULL,
    "numero_carte" VARCHAR(20) NOT NULL,
    "expiration" DATE NOT NULL,
    "cvc" SMALLINT NOT NULL,

    CONSTRAINT "CarteBancaire_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Avatar" (
    "id" SERIAL NOT NULL,
    "images" VARCHAR(255) NOT NULL DEFAULT '/assets/avatar/narutoShippudenAvatar.png',

    CONSTRAINT "Avatar_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_carteId_fkey" FOREIGN KEY ("carteId") REFERENCES "CarteBancaire"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "Avatar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
