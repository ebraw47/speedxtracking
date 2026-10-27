export const SITE_URL = "https://speedxtracking.io";

export type SitemapPage = {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly";
  priority?: number;
  lastmod?: string;
};

/** All public HTML pages for the URL sitemap. */
export const SITEMAP_PAGES: SitemapPage[] = [
  { path: "/", changefreq: "daily", priority: 1.0 },
  { path: "/about", changefreq: "monthly", priority: 0.8 },
  { path: "/overview", changefreq: "monthly", priority: 0.7 },
  { path: "/services", changefreq: "monthly", priority: 0.8 },
  { path: "/how-we-deliver", changefreq: "monthly", priority: 0.7 },
  { path: "/technology", changefreq: "monthly", priority: 0.6 },
  { path: "/ship", changefreq: "weekly", priority: 0.8 },
  { path: "/how-to-track", changefreq: "weekly", priority: 0.9 },
  { path: "/status", changefreq: "monthly", priority: 0.7 },
  { path: "/coverage", changefreq: "monthly", priority: 0.7 },
  { path: "/drive", changefreq: "monthly", priority: 0.6 },
  { path: "/contact", changefreq: "monthly", priority: 0.8 },
  { path: "/faq", changefreq: "weekly", priority: 0.8 },
  { path: "/blogs", changefreq: "weekly", priority: 0.8 },
  {
    path: "/blogs/how-late-does-speedx-deliver",
    changefreq: "monthly",
    priority: 0.7,
    lastmod: "2026-08-25",
  },
  {
    path: "/blogs/what-time-does-speedx-stop-delivering",
    changefreq: "monthly",
    priority: 0.7,
    lastmod: "2026-08-25",
  },
  { path: "/discovery", changefreq: "monthly", priority: 0.7 },
  { path: "/posts/for-retailers", changefreq: "monthly", priority: 0.7 },
  {
    path: "/posts/for-logistics-providers",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    path: "/posts/cross-border-shipping",
    changefreq: "monthly",
    priority: 0.7,
  },
];

export type SitemapImage = {
  /** Page URL that hosts / references the image */
  pagePath: string;
  loc: string;
  title: string;
  caption?: string;
};

/** Images for the image sitemap. */
export const SITEMAP_IMAGES: SitemapImage[] = [
  {
    pagePath: "/",
    loc: `${SITE_URL}/images/speedx-van.webp`,
    title: "SpeedX delivery van",
    caption: "SpeedX Tracking last-mile delivery fleet",
  },
  {
    pagePath: "/",
    loc: `${SITE_URL}/images/speedx-logo.webp`,
    title: "SpeedX logo",
    caption: "SpeedX Tracking brand logo",
  },
  {
    pagePath: "/coverage",
    loc: `${SITE_URL}/images/us-coverage.svg`,
    title: "SpeedX U.S. coverage map",
    caption:
      "SpeedX United States coverage map with ATL, DFW, EWR, IAH, LAX, MIA, ORD, and SFO gateways",
  },
  {
    pagePath: "/",
    loc: `${SITE_URL}/icon.png`,
    title: "SpeedX Tracking icon",
    caption: "SpeedX Tracking site icon",
  },
];

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function xmlEscape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
