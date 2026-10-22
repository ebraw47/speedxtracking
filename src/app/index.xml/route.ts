import {
  SITEMAP_PAGES,
  absoluteUrl,
  xmlEscape,
} from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const lastmod = new Date().toISOString();

  const urls = SITEMAP_PAGES.map((page) => {
    const loc = absoluteUrl(page.path);
    const changefreq = page.changefreq ?? "monthly";
    const priority = (page.priority ?? 0.5).toFixed(1);
    return `  <url>
    <loc>${xmlEscape(loc)}</loc>
    <lastmod>${page.lastmod ?? lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
