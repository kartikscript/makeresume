import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";
config({ path: '.env.local' });


export default defineConfig({
  schema: "./drizzle/schema.ts",
  out: "./drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DRIZZLE_DATABASE_URL!,
  },
});