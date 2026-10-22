import {
  SITEMAP_IMAGES,
  absoluteUrl,
  xmlEscape,
} from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  // Group images by page URL
  const byPage = new Map<string, typeof SITEMAP_IMAGES>();
  for (const image of SITEMAP_IMAGES) {
    const page = absoluteUrl(image.pagePath);
    const list = byPage.get(page) ?? [];
    list.push(image);
    byPage.set(page, list);
  }

  const urls = [...byPage.entries()]
    .map(([pageLoc, images]) => {
      const imageTags = images
        .map(
          (img) => `    <image:image>
      <image:loc>${xmlEscape(img.loc)}</image:loc>
      <image:title>${xmlEscape(img.title)}</image:title>${
            img.caption
              ? `
      <image:caption>${xmlEscape(img.caption)}</image:caption>`
              : ""
          }
    </image:image>`
        )
        .join("\n");

      return `  <url>
    <loc>${xmlEscape(pageLoc)}</loc>
${imageTags}
  </url>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
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
