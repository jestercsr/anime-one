import { Hono } from "hono";
import connectDB from "../lib/mongo.js";
import { prisma } from "../lib/prisma.js";
import ProductModel from "../models/productModel.js";

const produitRoute = new Hono();

produitRoute.get("/", async (c) => {
  await connectDB();
  const produit = await ProductModel.aggregate([{ $sample: { size: 9 } }]);
  return c.json({ produit }, { status: 200 });
});

produitRoute.post("/", async (c) => {
  await connectDB();

  const data = await c.req.json();

  const newProduct = new ProductModel(data);

  try {
    const savedProduct = await newProduct.save();
    console.log("Nouveau Produit Créé:", savedProduct);
    return c.json({ message: "Nouveau Produit Créé" }, { status: 201 });
  } catch (error) {
    console.error("Erreur lors de l'ajout du document:", error);
    return c.json(
      { message: "Erreur lors de l'ajout du document" },
      { status: 500 },
    );
  }
});

produitRoute.post("/:titre", async (c) => {
  try {
    await connectDB();
    const { userId, productId, rating } = await c.req.json();

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      return (
        new c.json({ message: "Utilisateur non trouvé" }),
        { status: 404 }
      );
    }

    const product = await ProductModel.findOne({ titre: productId });

    if (!product) {
      return (
        new c.json({ message: "Produit non trouvé" }),
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Erreur lors de l'ajout de la note:", error);
    return c.json(
      { message: "Erreur lors de l'ajout de la note" },
      { status: 500 },
    );
  }
});

produitRoute.get("/:titre", async (c) => {
  const { titre } = c.req.param();
  try {
    await connectDB();
    const produitOne = await ProductModel.findOne({ manga: titre });
    if (!produitOne) {
      return c.json(
        { message: "Aucun produit trouvé" },
        { status: 404 },
      );
    }
    return c.json({ produitOne }, { status: 200 });
  } catch (error) {
    console.error("Impossible de récupérer le produit:", error);
    return c.json(
      { message: "Impossible de récupérer le produit" },
      { status: 500 },
    );
  }
});

produitRoute.delete("/:titre", async (c) => {
  const { titre } = c.req.param();
  await connectDB();
  const deletedProduit = await ProductModel.findOneAndDelete({ url: titre });
  if (deletedProduit) {
    return c.json({ message: "Produit supprimé" }, { status: 200 });
  } else {
    return c.json(
      { message: "Produit non trouvé" },
      { status: 404 },
    );
  }
});

produitRoute.put("/:titre", async (c) => {
  const { titre } = c.req.param();
  try {
    const data = await c.req.json();
    await connectDB();
    const update = await ProductModel.findOneAndUpdate({ titre: titre }, data, {
      new: true,
      runValidators: true,
    });
    if (!update) {
      return c.json(
        { message: "Aucun produit trouvé" },
        { status: 404 },
      );
    }
    return c.json({ update }, { status: 200 });
  } catch (error) {
    console.error("Impossible de mettre à jour le produit:", error);
    return c.json(
      { message: "Impossible de mettre à jour le produit" },
      { status: 500 },
    );
  }
});

produitRoute.get("/:titre/:lien", async (c) => {
  const { titre, lien } = c.req.param();
  try {
    await connectDB();
    const produitOne = await ProductModel.findOne({ url: lien });
    if (!produitOne) {
      return c.json(
        { message: "Aucun produit trouvé" },
        { status: 404 },
      );
    }
    return c.json({ produitOne }, { status: 200 });
  } catch (error) {
    console.error("Impossible de récupérer le produit:", error);
    return c.json(
      { message: "Impossible de récupérer le produit" },
      { status: 500 },
    );
  }
});

produitRoute.get("/accessoires", async (c) => {
  try {
    await connectDB();
    const produitOne = await ProductModel.find({
      genre: { $in: "Accessoire" },
    });
    if (!produitOne) {
      return c.json(
        { message: "Aucun produit trouvé" },
        { status: 404 },
      );
    }
    return c.json({ produitOne }, { status: 200 });
  } catch (error) {
    console.error("Impossible de récupérer le produit:", error);
    return c.json(
      { message: "Impossible de récupérer le produit" },
      { status: 500 },
    );
  }
});

produitRoute.get("/accessoires/:one", async (c) => {
  const { one } = c.req.param();
  try {
    await connectDB();
    const produitOne = await ProductModel.find({
      manga: one,
      genre: { $in: "Accessoire" },
    });
    if (!produitOne) {
      return c.json(
        { message: "Aucun produit trouvé" },
        { status: 404 },
      );
    }
    return c.json({ produitOne }, { status: 200 });
  } catch (error) {
    console.error("Impossible de récupérer le produit:", error);
    return c.json(
      { message: "Impossible de récupérer le produit" },
      { status: 500 },
    );
  }
});

produitRoute.get("/all", async (c) => {
  await connectDB();
  const produit = await ProductModel.find({ genre: { $in: "Figurine" } });
  return c.json({ produit }, { status: 200 });
});

produitRoute.get("/all/:one", async (c) => {
  const { one } = c.req.param();
  try {
    await connectDB();
    const produitOne = await ProductModel.find({
      manga: one,
      genre: { $in: "Figurine" },
    });
    if (!produitOne) {
      return c.json(
        { message: "Aucun produit trouvé" },
        { status: 404 },
      );
    }
    return c.json({ produitOne }, { status: 200 });
  } catch (error) {
    console.error("Impossible de récupérer le produit:", error);
    return c.json(
      { message: "Impossible de récupérer le produit" },
      { status: 500 },
    );
  }
});

produitRoute.get("/clothes", async (c) => {
  try {
    await connectDB();
    const produitOne = await ProductModel.find({ genre: { $in: "Vêtements" } });
    if (!produitOne) {
      return c.json(
        { message: "Aucun produit trouvé" },
        { status: 404 },
      );
    }
    return c.json({ produitOne }, { status: 200 });
  } catch (error) {
    console.error("Impossible de récupérer le produit:", error);
    return c.json(
      { message: "Impossible de récupérer le produit" },
      { status: 500 },
    );
  }
});

produitRoute.get("/clothes/:one", async (c) => {
  const { one } = c.req.param();
  try {
    await connectDB();
    const produitOne = await ProductModel.find({
      manga: one,
      genre: { $in: "Vêtements" },
    });
    if (!produitOne) {
      return c.json(
        { message: "Aucun produit trouvé" },
        { status: 404 },
      );
    }
    return c.json({ produitOne }, { status: 200 });
  } catch (error) {
    console.error("Impossible de récupérer le produit:", error);
    return c.json(
      { message: "Impossible de récupérer le produit" },
      { status: 500 },
    );
  }
});

produitRoute.get("/loading", async (c) => {
  try {
    await connectDB();
    const limit = 4;
    const skip = parseInt(c.req.query("skip") || "0", 10);
    const produitOne = await ProductModel.find();
    const shuffledProducts = produitOne.sort(() => 0.5 - Math.random());
    const produits = shuffledProducts.slice(skip, skip + limit);
    if (!produits) {
      return c.json(
        { message: "Aucun produit trouvé" },
        { status: 404 },
      );
    }
    return c.json({ produits }, { status: 200 });
  } catch (error) {
    console.error("Impossible de récupérer le produit:", error);
    return c.json(
      { message: "Impossible de récupérer le produit" },
      { status: 500 },
    );
  }
});

produitRoute.get("/new", async (c) => {
  try {
    await connectDB();
    const produitOne = await ProductModel.find({ genre: { $in: "New" } });
    if (!produitOne) {
      return c.json(
        { message: "Aucun produit trouvé" },
        { status: 404 },
      );
    }
    return c.json({ produitOne }, { status: 200 });
  } catch (error) {
    console.error("Impossible de récupérer le produit:", error);
    return c.json(
      { message: "Impossible de récupérer le produit" },
      { status: 500 },
    );
  }
});

produitRoute.get("/new/:one", async (c) => {
  const { one } = c.req.param();
  try {
    await connectDB();
    const produitOne = await ProductModel.find({
      manga: one,
      genre: { $in: "New" },
    });
    if (!produitOne) {
      return c.json(
        { message: "Aucun produit trouvé" },
        { status: 404 },
      );
    }
    return c.json({ produitOne }, { status: 200 });
  } catch (error) {
    console.error("Impossible de récupérer le produit:", error);
    return c.json(
      { message: "Impossible de récupérer le produit" },
      { status: 500 },
    );
  }
});

produitRoute.get("/promo", async (c) => {
  try {
    await connectDB();
    const produitOne = await ProductModel.find({ sale: { $nin: null } });
    if (!produitOne) {
      return c.json(
        { message: "Aucun produit trouvé" },
        { status: 404 },
      );
    }
    return c.json({ produitOne }, { status: 200 });
  } catch (error) {
    console.error("Impossible de récupérer le produit:", error);
    return c.json(
      { message: "Impossible de récupérer le produit" },
      { status: 500 },
    );
  }
});

produitRoute.get("/promo/:one", async (c) => {
  const { one } = c.req.param();
  try {
    await connectDB();
    const produitOne = await ProductModel.find({
      manga: one,
      sale: { $nin: null },
    });
    if (!produitOne) {
      return c.json(
        { message: "Aucun produit trouvé" },
        { status: 404 },
      );
    }
    return c.json({ produitOne }, { status: 200 });
  } catch (error) {
    console.error("Impossible de récupérer le produit:", error);
    return c.json(
      { message: "Impossible de récupérer le produit" },
      { status: 500 },
    );
  }
});

produitRoute.get("/random", async (c) => {
  try {
    await connectDB();
    const produitRandom = await ProductModel.aggregate([
      { $sample: { size: 9 } },
    ]);
    if (!produitRandom) {
      return c.json(
        { message: "Aucun produit trouvé" },
        { status: 404 },
      );
    }
    return c.json({ produitRandom }, { status: 200 });
  } catch (error) {
    console.error("Impossible de récupérer le produit:", error);
    return c.json(
      { message: "Impossible de récupérer le produit" },
      { status: 500 },
    );
  }
});

export default produitRoute;
