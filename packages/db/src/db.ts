import env from './env.js';
import { drizzle } from 'drizzle-orm/node-postgres';

export const db = drizzle({
  connection: {
    connectionString: env.DATABASE_URL!,
    ssl: env.NODE_ENV === 'production',
  },
});
