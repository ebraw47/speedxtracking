export type FeatureCard = {
  title: string;
  body: string;
};

export type PostStep = {
  title: string;
  body: string;
};

export type PostSection =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "features"; cards: FeatureCard[] }
  | { type: "steps"; steps: PostStep[] }
  | { type: "links"; items: { href: string; label: string }[] };

export type PostCta = {
  title: string;
  body: string;
  links: { href: string; label: string }[];
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  crumbLabel: string;
  sections: PostSection[];
  cta: PostCta;
};

export const posts: Post[] = [
  {
    slug: "for-retailers",
    title: "Last-Mile Delivery for Retailers | SpeedX Tracking",
    description:
      "How retailers, marketplaces, and DTC brands use SpeedX next-day and two-day last-mile delivery with live tracking and POD.",
    eyebrow: "Ship With Us",
    h1: "Last-mile delivery for retailers, marketplaces & DTC",
    lead: "From order to doorstep, fast delivery is how shoppers judge your brand. This guide covers how ecommerce retailers can use the SpeedX last-mile network for next-day and two-day shipping, clear rates, and visible tracking.",
    crumbLabel: "Retailers",
    sections: [
      {
        type: "heading",
        text: "Why retailers choose a dedicated last-mile partner",
      },
      {
        type: "paragraph",
        text: "Online shoppers expect speed and proof that their order is moving. A focused last-mile partner helps you hit high on-time targets (often around 95%), keep peak season stable, and avoid locking into a single carrier when volumes spike.",
      },
      {
        type: "list",
        items: [
          "Scalable next-day and second-day options that grow with volume",
          "Transparent parcel pricing without surprise surcharge stacks",
          "Carrier diversification so peak demand does not stall checkout",
          "Live tracking, SMS updates, and photo proof of delivery",
        ],
      },
      {
        type: "heading",
        text: "Built for marketplaces and DTC brands",
      },
      {
        type: "paragraph",
        text: "Ecommerce retailers & marketplaces need flexible capacity, peak-season support, and predictable handoffs from fulfillment into the delivery network.",
      },
      {
        type: "paragraph",
        text: "DTC brands need a polished delivery experience: customized service levels, end-to-end visibility, and support that matches your brand promise after the sale.",
      },
      {
        type: "paragraph",
        text: "Cross-border retailers selling into the U.S. can combine customs clearance, handling, and injection into the same last-mile network so international orders feel as smooth as domestic ones.",
      },
      {
        type: "links",
        items: [
          {
            href: "/posts/cross-border-shipping",
            label: "Cross-border shipping guide →",
          },
        ],
      },
      {
        type: "heading",
        text: "Services that support growth",
      },
      {
        type: "features",
        cards: [
          {
            title: "Next-day delivery",
            body: "Fast, reliable service designed for high customer expectations.",
          },
          {
            title: "2nd-day delivery",
            body: "Affordable speed when next-day is not required for every SKU.",
          },
          {
            title: "Customs clearance",
            body: "Compliance-focused brokerage that keeps inbound parcels moving.",
          },
          {
            title: "Handling & injection",
            body: "Sortation and network injection from hub to final mile.",
          },
        ],
      },
      {
        type: "heading",
        text: "Tech that keeps quality high",
      },
      {
        type: "list",
        items: [
          "AI and geolocation checks on proof-of-delivery photos",
          "Models trained on tens of millions of POD images",
          "Driver apps and management tools for route-level control",
          "Plug-and-play integrations and APIs for order and tracking data",
        ],
      },
      {
        type: "heading",
        text: "Coverage that matches U.S. demand",
      },
      {
        type: "paragraph",
        text: "The SpeedX network focuses on dense U.S. demand: thousands of zip codes and reach across a large share of North American ecommerce orders.",
      },
      {
        type: "links",
        items: [{ href: "/coverage", label: "View U.S. coverage map →" }],
      },
    ],
    cta: {
      title: "Ready to ship with us?",
      body: "Book a discovery call or jump back to tracking tools on the home page.",
      links: [
        { href: "/discovery", label: "Book a discovery call →" },
        { href: "/", label: "Track a package →" },
        { href: "/posts/for-logistics-providers", label: "Logistics & 3PLs →" },
      ],
    },
  },
  {
    slug: "for-logistics-providers",
    title: "Last-Mile for Logistics Providers & 3PLs | SpeedX",
    description:
      "How 3PLs and logistics providers expand U.S. last-mile coverage with API integration, zone-skipping, and next-day delivery.",
    eyebrow: "Ship With Us",
    h1: "Last-mile delivery for logistics providers & 3PLs",
    lead: "Give your clients a stronger U.S. final mile without rebuilding your entire network. This guide explains how logistics providers plug into SpeedX for speed, scale, and clean integrations.",
    crumbLabel: "Logistics",
    sections: [
      {
        type: "heading",
        text: "Extend your network, keep your clients",
      },
      {
        type: "paragraph",
        text: "3PLs and freight partners win when last-mile is reliable and easy to connect. SpeedX lets you offer next-day and second-day options in major U.S. markets while you stay focused on warehousing, freight, and client relationships.",
      },
      {
        type: "list",
        items: [
          "Access dense U.S. zip coverage without standing up every market alone",
          "Zone-skipping style efficiency to shorten line-haul into delivery zones",
          "API and platform integration for tracking, inventory, and fulfillment signals",
          "Peak-season flexibility when client brands surge",
        ],
      },
      {
        type: "heading",
        text: "What logistics teams care about",
      },
      {
        type: "features",
        cards: [
          {
            title: "Expand coverage",
            body: "Reach major U.S. metros and beyond through one last-mile partner instead of stitching dozens of local couriers.",
          },
          {
            title: "Speed & reliability",
            body: "Next-day and second-day products backed by routing tech and live status for your customer care teams.",
          },
          {
            title: "Customer experience",
            body: "Proof of delivery, proactive updates, and support paths that keep brand clients confident.",
          },
          {
            title: "Easy integration",
            body: "Modern APIs for labels, tracking events, and operational control so your stack stays the source of truth.",
          },
        ],
      },
      {
        type: "heading",
        text: "Transparent pricing for partners",
      },
      {
        type: "paragraph",
        text: "Partner economics work better when rates are clear. Prefer simple parcel pricing over traditional net-rate structures that grow through layered surcharges. Use a discovery call to model your lanes and average daily volume.",
      },
      {
        type: "heading",
        text: "Quality tech for your SLAs",
      },
      {
        type: "list",
        items: [
          "Geolocation-aware POD checks",
          "ML review of POD photo quality at scale",
          "Driver management tools for on-the-ground accountability",
          "Real-time tracking your portal can surface to shippers",
        ],
      },
      {
        type: "links",
        items: [
          { href: "/posts/for-retailers", label: "Retailers guide →" },
          {
            href: "/posts/cross-border-shipping",
            label: "Cross-border shipping →",
          },
        ],
      },
    ],
    cta: {
      title: "Connect your network",
      body: "Talk through integrations and coverage on a discovery call.",
      links: [
        { href: "/discovery", label: "Book a discovery call →" },
        { href: "/technology", label: "See technology →" },
        { href: "/posts/for-retailers", label: "Retailers guide →" },
      ],
    },
  },
  {
    slug: "cross-border-shipping",
    title: "Cross-Border Shipping to the U.S. | SpeedX",
    description:
      "Cross-border ecommerce into the U.S.: customs brokerage, airport hubs, last-mile injection, tracking, and POD.",
    eyebrow: "Ship With Us",
    h1: "Cross-border shipping built for U.S. ecommerce",
    lead: "Reaching U.S. customers should not feel harder than domestic shipping. This guide walks through customs clearance, hub injection, and last-mile delivery for cross-border retailers and logistics teams.",
    crumbLabel: "Cross-border",
    sections: [
      {
        type: "heading",
        text: "Why cross-border last mile fails without a plan",
      },
      {
        type: "paragraph",
        text: "International parcels stall at customs, sit in unsorted inbound piles, or lose tracking between the gateway and the local courier. SpeedX connects clearance, U.S. network injection, and shopper updates until the doorstep.",
      },
      {
        type: "list",
        items: [
          "Integrated brokerage (including Type 01 & T11 style clearance)",
          "Strategic airport hubs for inbound volume",
          "Secure retrieval, sortation, and last-mile injection",
          "Transparent rates and end-to-end tracking with POD photos",
        ],
      },
      {
        type: "heading",
        text: "How it works",
      },
      {
        type: "steps",
        steps: [
          {
            title: "01 · Freight arrival & customs clearance",
            body: "Inbound volume lands at major airport hubs and moves through compliance-focused clearance so parcels are not stuck in limbo.",
          },
          {
            title: "02 · Secure transport & sortation",
            body: "Cleared shipments are retrieved, sorted, and injected into the domestic last-mile network for efficient outbound routes.",
          },
          {
            title: "03 · Next-day & two-day delivery",
            body: "Optimized routing targets strong on-time performance so international orders still feel fast to the end customer.",
          },
        ],
      },
      {
        type: "heading",
        text: "Who this is for",
      },
      {
        type: "features",
        cards: [
          {
            title: "Cross-border ecommerce retailers",
            body: "Clear into the U.S., inject to last mile, keep pricing simple, and support shoppers with live tracking.",
          },
          {
            title: "Logistics providers with global lanes",
            body: "Add U.S. final-mile coverage, airport hub handling, and carrier integrations without rebuilding every market.",
          },
        ],
      },
      {
        type: "heading",
        text: "Visibility shoppers expect",
      },
      {
        type: "paragraph",
        text: "From origin scan to doorstep photo, tracking should stay on one journey so support teams can answer “where is my order?” faster.",
      },
      {
        type: "links",
        items: [
          { href: "/how-to-track", label: "Tracking guide →" },
          { href: "/", label: "Track a package →" },
          { href: "/posts/for-retailers", label: "Retailer last-mile →" },
          {
            href: "/posts/for-logistics-providers",
            label: "3PL / logistics →",
          },
        ],
      },
    ],
    cta: {
      title: "Plan your U.S. entry",
      body: "Discuss hubs, clearance, and volume on a discovery call.",
      links: [
        { href: "/discovery", label: "Book a discovery call →" },
        { href: "/ship", label: "Back to Ship With Us →" },
      ],
    },
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}
