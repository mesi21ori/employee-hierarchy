import { drizzle } from 'drizzle-orm/node-postgres';  
import pkg from 'pg'; 
import dotenv from 'dotenv';  
import * as schema from './schema';  

dotenv.config();


if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is required');
}


const pool = new pkg.Pool({
  connectionString: process.env.DATABASE_URL,  
});

const db = drizzle(pool, { schema }); 

export { db };  