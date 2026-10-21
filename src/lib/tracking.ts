export type TimelineEvent = {
  title: string;
  detail: string;
  active: boolean;
};

export type ShipmentStatus = {
  label: string;
  badge: string;
  eta: string;
  build: (h: number) => TimelineEvent[];
};

export type Shipment = {
  tn: string;
  label: string;
  badge: string;
  eta: string;
  events: TimelineEvent[];
};

export function validTn(value: string): boolean {
  const cleaned = value.trim();
  return cleaned.length >= 8 && /^[A-Za-z0-9\-]+$/.test(cleaned);
}

/** Deterministic hash so the same ID always returns the same result. */
export function hashTn(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function pick<T>(arr: T[], n: number): T {
  return arr[n % arr.length];
}

function formatWhen(daysAgo: number, hour: number, minute: number): string {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  d.setHours(hour, minute, 0, 0);
  if (daysAgo === 0) {
    return `Today, ${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
  }
  if (daysAgo === 1) {
    return `Yesterday, ${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
  }
  return `${daysAgo} days ago · ${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

const hubs = [
  "Los Angeles, CA",
  "Dallas, TX",
  "Chicago, IL",
  "Newark, NJ",
  "Miami, FL",
  "Atlanta, GA",
  "Houston, TX",
  "San Francisco, CA",
];

const origins = [
  "International gateway · Shenzhen",
  "International gateway · Shanghai",
  "Origin facility · Guangzhou",
  "Export hub · Hong Kong",
  "Origin sort center · Yiwu",
];

const statuses: ShipmentStatus[] = [
  {
    label: "In Transit",
    badge: "badge-transit",
    eta: "Estimated delivery in 1–2 business days",
    build(h) {
      const hub = pick(hubs, h);
      const origin = pick(origins, h >>> 3);
      return [
        {
          title: `Arrived at regional sorting hub`,
          detail: `${hub} · ${formatWhen(0, 8 + (h % 10), 10 + (h % 40))}`,
          active: true,
        },
        {
          title: "Departed origin facility",
          detail: `${origin} · ${formatWhen(1 + (h % 2), 14 + (h % 6), h % 60)}`,
          active: false,
        },
        {
          title: "Shipment information received",
          detail: `Label created · ${formatWhen(3 + (h % 3), 9, 5 + (h % 50))}`,
          active: false,
        },
      ];
    },
  },
  {
    label: "Out for Delivery",
    badge: "badge-ofd",
    eta: "Expected today by 10:00 PM local time",
    build(h) {
      const hub = pick(hubs, h);
      return [
        {
          title: "Out for delivery",
          detail: `${hub} local route · ${formatWhen(0, 7 + (h % 5), 20 + (h % 30))}`,
          active: true,
        },
        {
          title: "Arrived at local delivery station",
          detail: `${hub} · ${formatWhen(0, 5, 45)}`,
          active: false,
        },
        {
          title: "Departed regional sorting hub",
          detail: `${pick(hubs, h + 1)} · ${formatWhen(1, 16, h % 60)}`,
          active: false,
        },
        {
          title: "Shipment information received",
          detail: `Label created · ${formatWhen(4 + (h % 2), 11, 12)}`,
          active: false,
        },
      ];
    },
  },
  {
    label: "Delivered",
    badge: "badge-delivered",
    eta: "Package marked delivered — check porch, lobby, or mailbox",
    build(h) {
      const hub = pick(hubs, h);
      return [
        {
          title: "Delivered",
          detail: `${hub} · ${formatWhen(0, 11 + (h % 8), 5 + (h % 50))} · POD on file`,
          active: true,
        },
        {
          title: "Out for delivery",
          detail: `${hub} · ${formatWhen(0, 8, 15)}`,
          active: false,
        },
        {
          title: "Arrived at local delivery station",
          detail: `${hub} · ${formatWhen(1, 19, 40)}`,
          active: false,
        },
        {
          title: "Shipment information received",
          detail: `Label created · ${formatWhen(5 + (h % 3), 10, 0)}`,
          active: false,
        },
      ];
    },
  },
  {
    label: "Pending",
    badge: "badge-pending",
    eta: "Waiting for first carrier scan — usually updates within 24–48 hours",
    build(h) {
      return [
        {
          title: "Shipment information received",
          detail: `Label created · ${formatWhen(0, 10 + (h % 8), h % 60)}`,
          active: true,
        },
        {
          title: "Awaiting package handoff",
          detail: `Seller / origin facility · Pending pickup`,
          active: false,
        },
      ];
    },
  },
  {
    label: "Exception",
    badge: "badge-exception",
    eta: "Delivery issue — contact the seller with this tracking number",
    build(h) {
      const hub = pick(hubs, h);
      const reasons = [
        "Address incomplete or access code needed",
        "Recipient unavailable — reattempt scheduled",
        "Weather delay at regional hub",
        "Customs documentation under review",
      ];
      return [
        {
          title: "Delivery exception",
          detail: `${pick(reasons, h)} · ${hub} · ${formatWhen(0, 13, 30)}`,
          active: true,
        },
        {
          title: "Out for delivery (attempted)",
          detail: `${hub} · ${formatWhen(0, 9, 10)}`,
          active: false,
        },
        {
          title: "Arrived at local delivery station",
          detail: `${hub} · ${formatWhen(1, 18, 22)}`,
          active: false,
        },
        {
          title: "Shipment information received",
          detail: `Label created · ${formatWhen(4, 8, 40)}`,
          active: false,
        },
      ];
    },
  },
  {
    label: "Customs Hold",
    badge: "badge-customs",
    eta: "Common on international orders — often clears within a few days",
    build(h) {
      return [
        {
          title: "Held for customs clearance",
          detail: `U.S. entry gateway · ${formatWhen(0, 12 + (h % 6), 15)}`,
          active: true,
        },
        {
          title: "Arrived at international gateway",
          detail: `Inbound freight · ${formatWhen(1, 6, 50)}`,
          active: false,
        },
        {
          title: "Departed origin country",
          detail: `${pick(origins, h)} · ${formatWhen(2 + (h % 2), 21, 5)}`,
          active: false,
        },
        {
          title: "Shipment information received",
          detail: `Label created · ${formatWhen(5, 9, 20)}`,
          active: false,
        },
      ];
    },
  },
];

export function buildShipment(tn: string): Shipment {
  const h = hashTn(tn.toUpperCase());
  const status = statuses[h % statuses.length];
  return {
    tn: tn.toUpperCase(),
    label: status.label,
    badge: status.badge,
    eta: status.eta,
    events: status.build(h),
  };
}
