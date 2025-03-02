import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "../../drizzle/schema.js";

// Database connection string
const connectionString = process.env.DATABASE_URL || "postgresql://postgres:1234567890@localhost:5432/employee-hierarchy";

// Create postgres client
const client = postgres(connectionString, {
  max: 10, // Connection pool size
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
});

// Create drizzle instance with schema
export const db = drizzle(client, { schema });
