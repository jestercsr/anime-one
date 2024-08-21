-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "prenom" VARCHAR(255) NOT NULL,
    "nom" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(32) NOT NULL,
    "adresse" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(12) NOT NULL,
    "carte_bancaire" VARCHAR(20) NOT NULL,
    "date_naissance" TIMESTAMP(3) NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'client',
    "active" BOOLEAN NOT NULL DEFAULT true,
    "offreId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "nom" VARCHAR(255) NOT NULL,
    "avatar" VARCHAR(255) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produit" (
    "id" SERIAL NOT NULL,
    "titre" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "photo" TEXT,
    "prix" DOUBLE PRECISION NOT NULL,
    "quantite" INTEGER NOT NULL,
    "categorieId" INTEGER,

    CONSTRAINT "Produit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categorie" (
    "id" SERIAL NOT NULL,
    "nom" VARCHAR(255) NOT NULL,

    CONSTRAINT "Categorie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Offre" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "prix" DOUBLE PRECISION NOT NULL,
    "video" TEXT NOT NULL,
    "lectureSimul" INTEGER NOT NULL,
    "appareil" TEXT NOT NULL,
    "telechargement" TEXT NOT NULL DEFAULT 'Non',
    "pub" TEXT NOT NULL DEFAULT 'Avec Pub',
    "audio" TEXT NOT NULL,
    "livraison" TEXT NOT NULL,

    CONSTRAINT "Offre_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_offreId_fkey" FOREIGN KEY ("offreId") REFERENCES "Offre"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produit" ADD CONSTRAINT "Produit_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "Categorie"("id") ON DELETE SET NULL ON UPDATE CASCADE;
