export type TrackerStep = {
  key: "origin" | "transit" | "facility" | "destination";
  title: string;
  city?: string;
  subtitle?: string;
  done: boolean;
};

export type TrackerEvent = {
  time: string;
  city: string;
  status: string;
  note?: string;
  pod?: boolean;
};

export type TrackerDay = {
  dateLabel: string;
  events: TrackerEvent[];
};

export type Shipment = {
  tn: string;
  label: string;
  progress: number; // 0–100 along the tracker path
  steps: TrackerStep[];
  recent: {
    title: string;
    note?: string;
    datetime: string;
    city: string;
  };
  days: TrackerDay[];
  details: {
    pickupDate: string;
    deliveryDate: string;
    pickupLocation: string;
    dropoffLocation: string;
  };
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

const facilities = [
  { city: "Montebello, CA", short: "Montebello, CA" },
  { city: "Los Angeles, CA", short: "Los Angeles, CA" },
  { city: "Dallas, TX", short: "Dallas, TX" },
  { city: "Chicago, IL", short: "Chicago, IL" },
  { city: "Newark, NJ", short: "Newark, NJ" },
  { city: "Miami, FL", short: "Miami, FL" },
  { city: "Atlanta, GA", short: "Atlanta, GA" },
  { city: "Houston, TX", short: "Houston, TX" },
];

const destinations = [
  { city: "VAN NUYS, CA", region: "US" },
  { city: "LOS ANGELES, CA", region: "US" },
  { city: "IRVINE, CA", region: "US" },
  { city: "DALLAS, TX", region: "US" },
  { city: "HOUSTON, TX", region: "US" },
  { city: "CHICAGO, IL", region: "US" },
  { city: "MIAMI, FL", region: "US" },
  { city: "SEATTLE, WA", region: "US" },
];

const statuses = [
  "Delivered",
  "Out for Delivery",
  "In Transit",
  "Pending",
  "Exception",
  "Customs Hold",
] as const;

type StatusLabel = (typeof statuses)[number];

function weekdayLabel(daysAgo: number): string {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

function clock(hour: number, minute: number): string {
  const h12 = ((hour + 11) % 12) + 1;
  const ampm = hour >= 12 ? "PM" : "AM";
  return `${String(h12).padStart(2, "0")}:${String(minute).padStart(2, "0")} ${ampm} PDT`;
}

function fullDateTime(daysAgo: number, hour: number, minute: number): string {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  const month = d.toLocaleDateString("en-US", { month: "short" });
  const day = d.getDate();
  const year = d.getFullYear();
  return `${month} ${day} ${year} at ${clock(hour, minute)}`;
}

function buildSteps(
  status: StatusLabel,
  facility: (typeof facilities)[number],
  dest: (typeof destinations)[number],
): { steps: TrackerStep[]; progress: number } {
  const base: TrackerStep[] = [
    { key: "origin", title: "Origin", done: false },
    { key: "transit", title: "In Transit", done: false },
    {
      key: "facility",
      title: "SpeedX Facility",
      city: facility.short,
      subtitle: "SpeedX Facility",
      done: false,
    },
    {
      key: "destination",
      title: dest.region,
      city: dest.city,
      subtitle: dest.region,
      done: false,
    },
  ];

  if (status === "Pending") {
    return { steps: base, progress: 8 };
  }
  if (status === "Customs Hold") {
    base[0].done = true;
    return { steps: base, progress: 28 };
  }
  if (status === "In Transit") {
    base[0].done = true;
    base[1].done = true;
    return { steps: base, progress: 48 };
  }
  if (status === "Out for Delivery" || status === "Exception") {
    base[0].done = true;
    base[1].done = true;
    base[2].done = true;
    return { steps: base, progress: 78 };
  }
  // Delivered
  base.forEach((s) => {
    s.done = true;
  });
  return { steps: base, progress: 100 };
}

function buildDays(
  status: StatusLabel,
  h: number,
  facility: (typeof facilities)[number],
  dest: (typeof destinations)[number],
): TrackerDay[] {
  const f = facility.city;
  const d = dest.city;

  if (status === "Pending") {
    return [
      {
        dateLabel: weekdayLabel(0),
        events: [
          {
            time: clock(10 + (h % 6), h % 60),
            city: "Origin facility",
            status: "Shipping Label Created",
          },
        ],
      },
    ];
  }

  if (status === "Customs Hold") {
    return [
      {
        dateLabel: weekdayLabel(0),
        events: [
          {
            time: clock(12 + (h % 5), 15),
            city: "U.S. entry gateway",
            status: "Held for customs clearance",
          },
        ],
      },
      {
        dateLabel: weekdayLabel(2),
        events: [
          {
            time: clock(6, 50),
            city: "International gateway",
            status: "Arrived at international gateway",
          },
          {
            time: clock(21, 5),
            city: "Origin country",
            status: "Departed origin country",
          },
        ],
      },
      {
        dateLabel: weekdayLabel(5),
        events: [
          {
            time: clock(9, 20),
            city: "Origin facility",
            status: "Shipping Label Created",
          },
        ],
      },
    ];
  }

  if (status === "In Transit") {
    return [
      {
        dateLabel: weekdayLabel(0),
        events: [
          {
            time: clock(8 + (h % 8), 10 + (h % 40)),
            city: f,
            status: "In transit to destination facility",
          },
          {
            time: clock(3, 45),
            city: f,
            status: "Processing at Designated Facility",
          },
        ],
      },
      {
        dateLabel: weekdayLabel(1),
        events: [
          {
            time: clock(17, 45),
            city: f,
            status: "Processing at Designated Facility",
          },
        ],
      },
      {
        dateLabel: weekdayLabel(4),
        events: [
          {
            time: clock(19, 20),
            city: f,
            status: "Shipping Label Created",
          },
        ],
      },
    ];
  }

  if (status === "Out for Delivery") {
    return [
      {
        dateLabel: weekdayLabel(0),
        events: [
          {
            time: clock(7 + (h % 4), 20 + (h % 30)),
            city: d,
            status: "Out for Delivery",
          },
        ],
      },
      {
        dateLabel: weekdayLabel(1),
        events: [
          {
            time: clock(2, 52),
            city: f,
            status: "In transit to destination facility",
          },
        ],
      },
      {
        dateLabel: weekdayLabel(2),
        events: [
          {
            time: clock(13, 52),
            city: f,
            status: "Processing at Designated Facility",
          },
          {
            time: clock(3, 45),
            city: f,
            status: "In transit to destination facility",
          },
        ],
      },
      {
        dateLabel: weekdayLabel(5),
        events: [
          {
            time: clock(19, 20),
            city: f,
            status: "Shipping Label Created",
          },
        ],
      },
    ];
  }

  if (status === "Exception") {
    return [
      {
        dateLabel: weekdayLabel(0),
        events: [
          {
            time: clock(13, 30),
            city: d,
            status: "Delivery exception",
            note: pick(
              [
                "Address incomplete or access code needed",
                "Recipient unavailable — reattempt scheduled",
                "No access to delivery location",
              ],
              h,
            ),
          },
          {
            time: clock(9, 10),
            city: d,
            status: "Out for Delivery",
          },
        ],
      },
      {
        dateLabel: weekdayLabel(1),
        events: [
          {
            time: clock(18, 22),
            city: f,
            status: "Arrived at local delivery station",
          },
        ],
      },
      {
        dateLabel: weekdayLabel(4),
        events: [
          {
            time: clock(8, 40),
            city: f,
            status: "Shipping Label Created",
          },
        ],
      },
    ];
  }

  // Delivered — matches official tracker layout
  const deliverHour = 11 + (h % 8);
  const deliverMin = 5 + (h % 50);
  return [
    {
      dateLabel: weekdayLabel(0),
      events: [
        {
          time: clock(deliverHour, deliverMin),
          city: d,
          status: "Delivered",
          note: "Position: Front door",
          pod: true,
        },
        {
          time: clock(10, 13),
          city: d,
          status: "Out for Delivery",
        },
      ],
    },
    {
      dateLabel: weekdayLabel(1),
      events: [
        {
          time: clock(2, 52),
          city: f,
          status: "In transit to destination facility",
        },
      ],
    },
    {
      dateLabel: weekdayLabel(2),
      events: [
        {
          time: clock(13, 52),
          city: f,
          status: "Processing at Designated Facility",
        },
        {
          time: clock(3, 45),
          city: f,
          status: "In transit to destination facility",
        },
      ],
    },
    {
      dateLabel: weekdayLabel(3),
      events: [
        {
          time: clock(17, 45),
          city: f,
          status: "Processing at Designated Facility",
        },
      ],
    },
    {
      dateLabel: weekdayLabel(6),
      events: [
        {
          time: clock(19, 20),
          city: f,
          status: "Shipping Label Created",
        },
      ],
    },
  ];
}

function buildRecent(
  status: StatusLabel,
  h: number,
  days: TrackerDay[],
  dest: (typeof destinations)[number],
): Shipment["recent"] {
  const first = days[0]?.events[0];
  if (status === "Delivered") {
    return {
      title: "Last Mile Delivered",
      note: first?.note ?? "Position: Front door",
      datetime: fullDateTime(0, 11 + (h % 8), 5 + (h % 50)),
      city: dest.city,
    };
  }
  if (status === "Out for Delivery") {
    return {
      title: "Out for Delivery",
      note: "A delivery driver has your package and it is on its way.",
      datetime: fullDateTime(0, 7 + (h % 4), 20 + (h % 30)),
      city: dest.city,
    };
  }
  if (status === "Exception") {
    return {
      title: "Delivery Exception",
      note: first?.note,
      datetime: fullDateTime(0, 13, 30),
      city: dest.city,
    };
  }
  if (status === "Customs Hold") {
    return {
      title: "Customs Hold",
      note: "Held for customs clearance",
      datetime: fullDateTime(0, 12 + (h % 5), 15),
      city: "U.S. entry gateway",
    };
  }
  if (status === "Pending") {
    return {
      title: "Shipping Label Created",
      note: "Label created — awaiting package handoff",
      datetime: fullDateTime(0, 10 + (h % 6), h % 60),
      city: "Origin facility",
    };
  }
  return {
    title: first?.status ?? "In Transit",
    note: first?.note,
    datetime: fullDateTime(0, 8 + (h % 8), 10 + (h % 40)),
    city: first?.city ?? dest.city,
  };
}

export function buildShipment(tn: string): Shipment {
  const h = hashTn(tn.toUpperCase());
  const status = statuses[h % statuses.length];
  const facility = pick(facilities, h);
  const dest = pick(destinations, h >>> 2);
  const { steps, progress } = buildSteps(status, facility, dest);
  const days = buildDays(status, h, facility, dest);
  const recent = buildRecent(status, h, days, dest);

  const pickupStamp = (() => {
    const d = new Date();
    d.setDate(d.getDate() - 2);
    const month = d.toLocaleDateString("en-US", { month: "short" });
    return `13:52:14 ${month} ${d.getDate()} ${d.getFullYear()} PDT`;
  })();

  return {
    tn: tn.toUpperCase(),
    label: status,
    progress,
    steps,
    recent,
    days,
    details: {
      pickupDate: status === "Pending" ? "—" : pickupStamp,
      deliveryDate:
        status === "Delivered"
          ? recent.datetime
          : status === "Out for Delivery"
            ? "Expected today"
            : "Pending",
      pickupLocation: facility.city,
      dropoffLocation: dest.city,
    },
  };
}
