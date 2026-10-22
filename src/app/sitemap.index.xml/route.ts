import { SITE_URL, xmlEscape } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const lastmod = new Date().toISOString();
  const sitemaps = [`${SITE_URL}/index.xml`, `${SITE_URL}/image-sitemap.xml`];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (loc) => `  <sitemap>
    <loc>${xmlEscape(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`
  )
  .join("\n")}
</sitemapindex>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
