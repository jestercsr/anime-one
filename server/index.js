import { Hono } from "hono";
import { handle } from "hono/vercel";
import { serve } from "@hono/node-server";
import signupRoute from "./routes/signup.js";
import usersRoute from "./routes/users.js";
import profileRoute from "./routes/profiles.js";
import watchlistRoute from "./routes/watchlist.js";
import avatarRoute from "./routes/avatar.js";
import collectionRoute from "./routes/collection.js";
import listeRoute from "./routes/liste.js";
import loginRoute from "./routes/login.js";
import mangaRoute from "./routes/mangas.js";
import offreRoute from "./routes/offres.js";
import produitRoute from "./routes/produits.js";
import postRoute from "./routes/posts.js";

export const config = { runtime: "nodejs" };

const app = new Hono();

app.use("*", async (c, next) => {
  const origin = c.req.header("origin") || "";
  const allowedOrigins = ["http://localhost:3000", "https://anime-one-project.vercel.app"];
  if (allowedOrigins.includes(origin)) {
    c.header("Access-Control-Allow-Origin", origin);
    c.header("Access-Control-Allow-Credentials", "true");
    c.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH,OPTIONS");
    c.header("Access-Control-Allow-Headers", "Content-Type,Authorization,Accept,Origin");
  }
  if (c.req.method === "OPTIONS") return c.text("", 204);
  await next();
});

app.route("/api/signup", signupRoute);
app.route("/api/users", usersRoute);
app.route("/api/profiles", profileRoute);
app.route("/api/watchlist", watchlistRoute);
app.route("/api/avatar", avatarRoute);
app.route("/api/collections", collectionRoute);
app.route("/api/listes", listeRoute);
app.route("/api/login", loginRoute);
app.route("/api/mangas", mangaRoute);
app.route("/api/offres", offreRoute);
app.route("/api/produits", produitRoute);
app.route("/api/posts", postRoute);

serve({ fetch: app.fetch, port: 3001 }, () => {
  console.log("API server running on http://localhost:3001");
});

export default handle(app);