import { drizzle } from 'drizzle-orm/node-postgres';
import { seed } from 'drizzle-seed';
import env from '../env.js';
import { posts } from '../schema/post.js';

async function postSeed() {
  const db = drizzle(env.DATABASE_URL!);
  await seed(db, { posts }, { count: 5 });
}

export default postSeed;
