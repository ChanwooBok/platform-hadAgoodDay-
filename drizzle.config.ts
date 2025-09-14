// this is the config for the drizzle-kit.
// Drizzle is going to check for this file and use it to generate the migrations.

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./app/features/**/schema.ts",
  out: "./app/sql/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
