import jwt from "jsonwebtoken";

export async function adminMiddleware(c, next) {
  const authHeader = c.req.header("Authorization");

  const token = authHeader?.split(" ")[1];

  if (!token) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  try {
    const user = jwt.verify(token, import.meta.env.JWT_SECRET);

    if (!user.isAdmin) {
      return c.json({ error: "Forbidden: Admins only" }, 403);
    }

    c.set("user", user);

    await next();
  } catch (err) {
    return c.json({ error: "Invalid token" }, 403);
  }
}