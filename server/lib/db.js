import { Pool } from "pg";

let pool;

if (!pool) {
  pool = new Pool({
    connectionString: import.meta.env.POSTGRES_PRISMA_URL,
  });
}

export const query = (text, params) => {
  return pool.query(text, params);
};