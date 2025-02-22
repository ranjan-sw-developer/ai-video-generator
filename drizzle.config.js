import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: "postgresql://account:npg_TOeC9rNXhjm6@ep-restless-mud-a82ybg5u-pooler.eastus2.azure.neon.tech/ai-video-generator?sslmode=require",
  },
});
