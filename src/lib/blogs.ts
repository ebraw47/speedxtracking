export type BlogSection =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | {
      type: "table";
      headers: string[];
      rows: string[][];
    };

export type Blog = {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateLabel: string;
  author: string;
  h1: string;
  lead: string;
  crumbLabel: string;
  sections: BlogSection[];
};

/**
 * Add new blogs here. Newest first.
 * Each post is available at /blogs/<slug>
 */
export const blogs: Blog[] = [
  {
    slug: "what-time-does-speedx-stop-delivering",
    title: "What Time Does SpeedX Stop Delivering? Latest Delivery Hours Guide",
    description:
      "What time does SpeedX stop delivering? Learn weekend hours (until 8 PM), weekday tracking tips, Out for Delivery meaning, and how to check your latest delivery time.",
    date: "2026-08-25",
    dateLabel: "August 25, 2026",
    author: "SpeedX Tracking",
    h1: "What Time Does SpeedX Stop Delivering? Latest Delivery Hours Guide",
    lead: "Wondering what time does SpeedX stop delivering? If your package is still showing “Out for Delivery,” it is natural to wonder whether the driver may arrive later in the day or whether delivery has already ended.",
    crumbLabel: "Delivery hours",
    sections: [
      {
        type: "paragraph",
        text: "The important point is that SpeedX does not publish one universal weekday cutoff time that applies to every delivery route. For your individual package, SpeedX recommends checking the tracking number because the tracking system provides the most up-to-date delivery notifications.",
      },
      {
        type: "paragraph",
        text: "For weekends, SpeedX provides a specific schedule: Saturday deliveries are available from 8:00 AM to 8:00 PM local time at all locations, while Sunday deliveries are available from 8:00 AM to 8:00 PM local time in select service areas.",
      },
      {
        type: "heading",
        text: "What Time Does SpeedX Stop Delivering?",
      },
      {
        type: "paragraph",
        text: "If you are searching for the latest SpeedX delivery time, there is not a single nationwide weekday cutoff published by SpeedX.",
      },
      {
        type: "paragraph",
        text: "SpeedX’s official support information does not give customers a fixed Monday-to-Friday time at which all delivery routes stop. Instead, SpeedX tells customers to use their tracking number to get the latest notification about when their parcel will be delivered.",
      },
      {
        type: "paragraph",
        text: "For weekends, the official schedule is clearer:",
      },
      {
        type: "list",
        items: [
          "Saturday: 8:00 AM to 8:00 PM local time",
          "Sunday: 8:00 AM to 8:00 PM local time in select service areas",
        ],
      },
      {
        type: "paragraph",
        text: "Therefore, 8:00 PM is the official weekend delivery end time listed by SpeedX, but it should not be treated as a universal weekday cutoff for every shipment.",
      },
      {
        type: "heading",
        text: "How Late Does SpeedX Deliver?",
      },
      {
        type: "paragraph",
        text: "Many customers ask, “How late does SpeedX deliver?” The answer depends on the specific delivery day and shipment.",
      },
      {
        type: "paragraph",
        text: "SpeedX officially lists weekend delivery through 8:00 PM local time. Saturday service is available at all locations, while Sunday service is limited to select service areas.",
      },
      {
        type: "paragraph",
        text: "For weekdays, SpeedX does not publish a single guaranteed end time on its customer support page. A package may therefore have a delivery event at a different time depending on the route and local circumstances.",
      },
      {
        type: "paragraph",
        text: "Official SpeedX tracking records demonstrate this variation. For example, one SpeedX shipment was marked Out for Delivery at 6:25 AM and delivered at 7:23 PM on the same day. Another shipment was marked Out for Delivery at 9:27 AM and delivered at 5:05 PM.",
      },
      {
        type: "paragraph",
        text: "That is why it is better to use your tracking status instead of assuming that every SpeedX route follows the same delivery cutoff.",
      },
      {
        type: "heading",
        text: "When Does SpeedX Stop Delivering?",
      },
      {
        type: "paragraph",
        text: "The answer to when does SpeedX stop delivering depends on whether you are talking about a weekday or a weekend.",
      },
      {
        type: "paragraph",
        text: "SpeedX explicitly states that weekend deliveries continue until 8:00 PM local time. For Sunday, this applies only in select service areas.",
      },
      {
        type: "paragraph",
        text: "For weekdays, SpeedX does not publish a universal “stop delivering at X PM” rule. If your tracking status is still active or shows Out for Delivery, the best source for your shipment is the SpeedX tracking page.",
      },
      {
        type: "heading",
        text: "What Time Does SpeedX Deliver Until?",
      },
      {
        type: "paragraph",
        text: "If your question is “What time does SpeedX deliver until?”, the official answer is easiest to determine for weekend deliveries.",
      },
      {
        type: "heading",
        text: "Saturday",
      },
      {
        type: "paragraph",
        text: "SpeedX says it delivers on Saturdays from 8:00 AM to 8:00 PM local time at all locations.",
      },
      {
        type: "heading",
        text: "Sunday",
      },
      {
        type: "paragraph",
        text: "SpeedX says Sunday delivery is available from 8:00 AM to 8:00 PM local time in select service areas.",
      },
      {
        type: "heading",
        text: "Weekdays",
      },
      {
        type: "paragraph",
        text: "SpeedX does not publish one fixed weekday delivery cutoff on its customer support page. Instead, customers are directed to tracking for the latest delivery information.",
      },
      {
        type: "heading",
        text: "What Time Does SpeedX Start Delivering?",
      },
      {
        type: "paragraph",
        text: "SpeedX does not list one universal weekday start time for every delivery route.",
      },
      {
        type: "paragraph",
        text: "For weekend service, the company’s published delivery window begins at 8:00 AM local time:",
      },
      {
        type: "list",
        items: [
          "Saturday: 8:00 AM–8:00 PM",
          "Sunday: 8:00 AM–8:00 PM in select areas",
        ],
      },
      {
        type: "paragraph",
        text: "This means you should not assume that every SpeedX package will start moving toward the customer at exactly the same hour on a weekday. Your tracking events can give you a much better indication of when the final delivery stage has started.",
      },
      {
        type: "heading",
        text: "What Time Do SpeedX Packages Arrive?",
      },
      {
        type: "paragraph",
        text: "There is no single arrival time that applies to every SpeedX package.",
      },
      {
        type: "paragraph",
        text: "Official SpeedX tracking records show deliveries taking place at different times of day. For example:",
      },
      {
        type: "list",
        items: [
          "A package in Miami was marked Out for Delivery at 6:25 AM and delivered at 7:23 PM.",
          "A Seattle-area shipment was marked Out for Delivery at 9:27 AM and delivered at 5:05 PM.",
          "Another shipment in New York was marked Out for Delivery at 8:05 AM and delivered at 1:36 PM.",
        ],
      },
      {
        type: "paragraph",
        text: "These official tracking examples show why an exact arrival hour cannot be predicted from a general delivery schedule.",
      },
      {
        type: "heading",
        text: "What Does “Out for Delivery” Mean?",
      },
      {
        type: "paragraph",
        text: "When SpeedX shows Out for Delivery, its official definition is that a delivery driver has your package and it is on its way to be delivered.",
      },
      {
        type: "paragraph",
        text: "However, the status does not provide a guaranteed delivery hour.",
      },
      {
        type: "paragraph",
        text: "An Out for Delivery package can remain on the driver’s route for several hours before the final delivery scan appears. Official SpeedX tracking records show Out for Delivery scans occurring in the morning, followed by delivery later in the day.",
      },
      {
        type: "paragraph",
        text: "So, if your package is already Out for Delivery, it is generally more useful to monitor the tracking page than to assume that the carrier has stopped delivering simply because your package has not arrived yet.",
      },
      {
        type: "heading",
        text: "Does SpeedX Deliver at Night?",
      },
      {
        type: "paragraph",
        text: "SpeedX’s official support page gives a weekend delivery window that ends at 8:00 PM local time. It does not publish a separate universal “night delivery” schedule for weekdays.",
      },
      {
        type: "paragraph",
        text: "Official tracking records do show some deliveries occurring in the evening. For example, a Miami shipment was delivered at 7:23 PM EDT.",
      },
      {
        type: "paragraph",
        text: "Therefore, an evening delivery is possible, but customers should not interpret a specific hour as a guaranteed nationwide SpeedX cutoff for every day.",
      },
      {
        type: "heading",
        text: "Does SpeedX Deliver on Weekends?",
      },
      {
        type: "paragraph",
        text: "Yes. SpeedX officially states that it delivers on weekends:",
      },
      {
        type: "table",
        headers: ["Day", "Official SpeedX delivery window"],
        rows: [
          ["Saturday", "8:00 AM–8:00 PM local time"],
          [
            "Sunday",
            "8:00 AM–8:00 PM local time in select service areas",
          ],
        ],
      },
      {
        type: "paragraph",
        text: "This is particularly important if your package remains Out for Delivery over the weekend. A Sunday delivery is possible in participating service areas.",
      },
      {
        type: "heading",
        text: "Does SpeedX Deliver on Saturday?",
      },
      {
        type: "paragraph",
        text: "Yes. According to SpeedX’s official support information, Saturday delivery is available from 8:00 AM to 8:00 PM local time at all locations.",
      },
      {
        type: "paragraph",
        text: "If you are waiting for a Saturday delivery, use the tracking information for your package rather than relying only on the general schedule.",
      },
      {
        type: "heading",
        text: "Does SpeedX Deliver on Sunday?",
      },
      {
        type: "paragraph",
        text: "Yes, but Sunday service is limited to select service areas.",
      },
      {
        type: "paragraph",
        text: "SpeedX lists Sunday delivery hours as 8:00 AM to 8:00 PM local time in those areas.",
      },
      {
        type: "paragraph",
        text: "This means a package can be delivered on Sunday, but you should not assume that every SpeedX shipment is eligible for Sunday delivery.",
      },
      {
        type: "heading",
        text: "Why Is My SpeedX Package Still Out for Delivery?",
      },
      {
        type: "paragraph",
        text: "An Out for Delivery status does not guarantee that the package will arrive immediately.",
      },
      {
        type: "paragraph",
        text: "SpeedX’s official tracking records show that delivery attempts can be affected by circumstances such as:",
      },
      {
        type: "list",
        items: [
          "No access to the delivery location",
          "Invalid or incomplete address information",
          "A business being closed",
          "Vehicle problems",
          "Delivery instructions or address changes",
        ],
      },
      {
        type: "paragraph",
        text: "SpeedX also says that if tracking has not changed for three business days, customers should contact the retailer for further assistance.",
      },
      {
        type: "heading",
        text: "How Can I Find the Latest SpeedX Delivery Time for My Package?",
      },
      {
        type: "paragraph",
        text: "The best way to find out when your package is likely to arrive is to track the shipment directly.",
      },
      {
        type: "paragraph",
        text: "SpeedX recommends entering your tracking number into its tracking system for the most up-to-date delivery notifications. The company also allows customers to sign up for SMS updates, including alerts when a parcel is out for delivery.",
      },
      {
        type: "paragraph",
        text: "Your SpeedX tracking number normally starts with “SPX.”",
      },
      {
        type: "paragraph",
        text: "Look for the latest event, especially:",
      },
      {
        type: "list",
        items: [
          "Out for Delivery — the driver has your package and it is on its way to be delivered.",
          "Delivered — the final delivery event has been recorded.",
        ],
      },
      {
        type: "heading",
        text: "Can I Choose a SpeedX Delivery Time?",
      },
      {
        type: "paragraph",
        text: "No. SpeedX currently says that customers cannot choose or change their delivery time slot. The company also says it does not currently offer a notification when the driver is nearby.",
      },
      {
        type: "paragraph",
        text: "That makes the tracking page particularly important when you are trying to determine the latest delivery time for a package.",
      },
      {
        type: "heading",
        text: "Frequently Asked Questions",
      },
      {
        type: "heading",
        text: "What time does SpeedX stop delivering?",
      },
      {
        type: "paragraph",
        text: "SpeedX does not publish one universal weekday cutoff. For weekends, its official schedule runs until 8:00 PM local time on Saturday and, in select areas, Sunday.",
      },
      {
        type: "heading",
        text: "What is the latest time SpeedX delivers?",
      },
      {
        type: "paragraph",
        text: "The clearest official cutoff is 8:00 PM local time for Saturday deliveries and 8:00 PM local time for Sunday deliveries in select service areas. SpeedX does not publish one universal weekday cutoff.",
      },
      {
        type: "heading",
        text: "When does SpeedX stop delivering for the day?",
      },
      {
        type: "paragraph",
        text: "There is no single published weekday cutoff that applies to every SpeedX route. For weekend delivery, SpeedX lists 8:00 PM local time as the end of its published window.",
      },
      {
        type: "heading",
        text: "What time does SpeedX deliver?",
      },
      {
        type: "paragraph",
        text: "SpeedX does not provide one universal delivery hour for all packages. For the most accurate information, check the tracking number associated with your shipment.",
      },
      {
        type: "heading",
        text: "What time does SpeedX deliver until on Sunday?",
      },
      {
        type: "paragraph",
        text: "In select service areas, SpeedX lists Sunday delivery from 8:00 AM to 8:00 PM local time.",
      },
      {
        type: "heading",
        text: "Does SpeedX deliver at night?",
      },
      {
        type: "paragraph",
        text: "SpeedX does not publish a separate nationwide night-delivery schedule. Its official weekend delivery window ends at 8:00 PM local time, and official tracking records show some deliveries occurring during the evening.",
      },
      {
        type: "heading",
        text: "How late can SpeedX deliver when my package is Out for Delivery?",
      },
      {
        type: "paragraph",
        text: "There is no guaranteed arrival hour. The package remains on the driver’s route until the delivery attempt is completed, and the tracking page provides the best information for that shipment.",
      },
      {
        type: "heading",
        text: "Bottom Line",
      },
      {
        type: "paragraph",
        text: "So, what time does SpeedX stop delivering?",
      },
      {
        type: "paragraph",
        text: "For Saturday, SpeedX officially lists deliveries through 8:00 PM local time. For Sunday, deliveries can also run until 8:00 PM local time in select service areas. For weekdays, SpeedX does not publish one universal cutoff time that applies to every route.",
      },
      {
        type: "paragraph",
        text: "If your package is still showing Out for Delivery, do not assume that delivery has stopped simply because it has not arrived yet. SpeedX’s own tracking records show that delivery times can vary significantly during the day. The most reliable way to find the latest delivery information is to check your SpeedX tracking number directly.",
      },
    ],
  },
];

export function getBlog(slug: string): Blog | undefined {
  return blogs.find((b) => b.slug === slug);
}

export function getBlogSlugs(): string[] {
  return blogs.map((b) => b.slug);
}

export function getBlogsSorted(): Blog[] {
  return [...blogs].sort((a, b) => (a.date < b.date ? 1 : -1));
}
