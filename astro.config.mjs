import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site =
  process.env.PUBLIC_SITE_URL ||
  "https://kavish-agarwal-tech.github.io";
const base = process.env.PUBLIC_BASE_PATH || "";

export default defineConfig({
  site,
  ...(base ? { base } : {}),
  output: "static",
  integrations: [sitemap()],
});
