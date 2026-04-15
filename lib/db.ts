import { Pool, type PoolClient, type QueryResultRow } from "pg";

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

export async function withTransaction<T>(callback: (client: PoolClient) => Promise<T>) {
  const client = await pool.connect();

  try {
    await client.query("begin");
    const result = await callback(client);
    await client.query("commit");
    return result;
  } catch (error) {
    await client.query("rollback");
    throw error;
  } finally {
    client.release();
  }
}
