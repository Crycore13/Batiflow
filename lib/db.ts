import { Pool, type QueryResultRow } from "pg";

declare global {
  var __batiflowPool: Pool | undefined;
}

function createPool() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL n'est pas configurée.");
  }

  return new Pool({ connectionString });
}

export const pool = globalThis.__batiflowPool ?? createPool();

if (process.env.NODE_ENV !== "production") {
  globalThis.__batiflowPool = pool;
}

export async function query<T extends QueryResultRow>(text: string, params: unknown[] = []) {
  return pool.query<T>(text, params);
}
