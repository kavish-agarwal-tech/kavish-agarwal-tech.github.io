import type { APIRoute } from "astro";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL(`${basePath}/sitemap-index.xml`, site ?? "https://kavish-agarwal-tech.github.io");
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
