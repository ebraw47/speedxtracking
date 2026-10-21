import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common SpeedX tracking questions — delivery timelines, contact methods, weekends, and package delays.",
};

export default function FaqPage() {
  return (
    <main className="page-main">
      <section className="faq">
        <div className="container">
          <div className="section-head faq-head">
            <p className="faq-kicker">FAQ</p>
            <h1>SpeedX tracking FAQ</h1>
            <p>
              Common SpeedX questions shoppers search for — answered for your
              tracking guide.
            </p>
          </div>

          <div className="faq-list">
            <details open>
              <summary>Where is my SpeedX delivery?</summary>
              <div className="faq-answer">
                <p>
                  You can track your package by entering your{" "}
                  <strong>SPX</strong> or <strong>SX</strong> tracking number on
                  the SpeedX Tracking Portal (use the tracking box on the{" "}
                  <Link href="/">home page</Link>).
                </p>
                <p>
                  <strong>How to find your package status</strong>
                </p>
                <ul>
                  <li>
                    <strong>Check your number:</strong> Locate your SPX or SX
                    tracking number from your retailer confirmation email (such
                    as Shein, Temu, Amazon, or TikTok Shop).
                  </li>
                  <li>
                    <strong>Allow initial scanning time:</strong> If your status
                    says “Shipping Label Created,” SpeedX has the label info but
                    has not yet received the physical package. Wait{" "}
                    <strong>24 to 48 hours</strong> for the first scan.
                  </li>
                  <li>
                    <strong>Out for Delivery:</strong> If your status says “Out
                    for Delivery,” the driver has your package and aims to
                    deliver it by <strong>10:00 PM local time</strong>. SpeedX
                    delivers <strong>7 days a week</strong>, including weekends.
                  </li>
                </ul>
                <p>
                  <strong>Contact SpeedX support</strong>
                </p>
                <p>
                  If your package shows no movement for more than{" "}
                  <strong>3 business days</strong> or you need direct help:
                </p>
                <ul>
                  <li>
                    <strong>Phone hotline:</strong>{" "}
                    <a href="tel:+19496676769">1-949-667-6769</a> (Monday–Friday:
                    9:00 AM – 9:00 PM EST, Saturday–Sunday: 11:00 AM – 8:00 PM
                    EST) or <a href="tel:+18006584192">1-800-658-4192</a>
                  </li>
                  <li>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:speedxops@speedx.io">speedxops@speedx.io</a>
                  </li>
                  <li>
                    <strong>Online support:</strong> Use the live chatbot on the{" "}
                    <Link href="/contact">SpeedX Customer Service</Link> page.
                  </li>
                </ul>
              </div>
            </details>

            <details>
              <summary>How do I contact SpeedX?</summary>
              <div className="faq-answer">
                <p>
                  You can contact SpeedX through the official support channels
                  listed on the{" "}
                  <Link href="/contact">SpeedX Customer Service and Support</Link>{" "}
                  page.
                </p>
                <p>
                  <strong>Contact methods</strong>
                </p>
                <ul>
                  <li>
                    <strong>Hotline:</strong>{" "}
                    <a href="tel:+19496676769">1-949-667-6769</a> (Monday–Friday
                    9 AM – 9 PM EST, Saturday–Sunday 11 AM – 8 PM EST) or{" "}
                    <a href="tel:+18006584192">1-800-658-4192</a>
                  </li>
                  <li>
                    <strong>Email support:</strong>{" "}
                    <a href="mailto:speedxops@speedx.io">speedxops@speedx.io</a>{" "}
                    or <a href="mailto:help@speedx.io">help@speedx.io</a>
                  </li>
                  <li>
                    <strong>AI chatbot:</strong> Miles (available 8 AM – 8 PM ET
                    via{" "}
                    <a
                      href="https://speedx.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      speedx.io
                    </a>
                    )
                  </li>
                  <li>
                    <strong>Mailing / postal address:</strong> 3333 New Hyde Park
                    Rd, Suite 316, New Hyde Park, NY 11042
                  </li>
                </ul>
                <p>
                  <strong>Important notes</strong>
                </p>
                <ul>
                  <li>
                    <strong>Tracking info:</strong> Have your tracking number
                    (starting with <strong>SPX</strong>) ready before reaching
                    out.
                  </li>
                  <li>
                    <strong>Address changes:</strong> Street or apartment changes
                    can be handled through the Miles chatbot; city, state, or ZIP
                    code changes must be requested directly through the merchant
                    you purchased from.
                  </li>
                  <li>
                    <strong>Lost or damaged items:</strong> SpeedX policy
                    requires customers to contact the original merchant for lost,
                    damaged, missing, or refunded packages.
                  </li>
                </ul>
              </div>
            </details>

            <details>
              <summary>Which company delivers for SpeedX?</summary>
              <div className="faq-answer">
                <p>
                  SpeedX does not own a traditional fleet of delivery trucks;
                  instead, it relies on independent contractors, gig workers, and
                  regional carriers to handle last-mile package delivery.
                </p>
                <p>
                  <strong>How SpeedX operations work</strong>
                </p>
                <ul>
                  <li>
                    <strong>Independent contractors:</strong> SpeedX contracts
                    local drivers who use personal vehicles and log into the
                    SpeedX Driver App to pick up and drop off packages from local
                    warehouses and sort centers.
                  </li>
                  <li>
                    <strong>Regional &amp; local partners:</strong> For areas
                    outside its core urban coverage, SpeedX partners with local
                    delivery networks, regional providers, and sometimes the U.S.
                    Postal Service (USPS) for rural drop-offs.
                  </li>
                </ul>
                <p>
                  <strong>Companies that use SpeedX for deliveries</strong>
                </p>
                <p>
                  SpeedX itself acts as a third-party last-mile delivery carrier
                  rather than delivering for a single traditional parcel company.
                  Instead, major e-commerce platforms and retailers hire SpeedX to
                  ship their customer orders. These companies include:
                </p>
                <ul>
                  <li>
                    <strong>Shein</strong> (often originating from international
                    airfreight shipments)
                  </li>
                  <li>
                    <strong>Temu</strong>
                  </li>
                  <li>
                    <strong>TikTok Shop</strong>
                  </li>
                  <li>
                    <strong>Amazon</strong> (for specific small or
                    international-origin parcels)
                  </li>
                  <li>
                    <strong>Vinted</strong>
                  </li>
                </ul>
              </div>
            </details>

            <details>
              <summary>How many days does it take for SpeedX to deliver?</summary>
              <div className="faq-answer">
                <p>
                  Most SpeedX deliveries inside the United States take{" "}
                  <strong>2 to 7 business days</strong> once the package is
                  physically scanned at a U.S. facility.
                </p>
                <p>
                  <strong>Delivery breakdown and timelines</strong>
                </p>
                <ul>
                  <li>
                    <strong>U.S. domestic transit:</strong> Generally takes 2 to 7
                    business days, with expedited options like next-day or 2-day
                    delivery available depending on the retailer’s chosen service
                    level.
                  </li>
                  <li>
                    <strong>International orders (e.g., from China):</strong>{" "}
                    Total time often ranges from <strong>10 to 15 days</strong>{" "}
                    (or longer) because this includes overseas transit and customs
                    clearance before SpeedX receives the package locally.
                  </li>
                  <li>
                    <strong>“Shipping Label Created” phase:</strong> If your
                    tracking only shows a label has been created, SpeedX has not
                    yet physically received the package from the seller. This
                    initial handoff can add several days of waiting before
                    movement begins.
                  </li>
                </ul>
                <p>
                  <strong>Delivery schedule and hours</strong>
                </p>
                <ul>
                  <li>
                    <strong>Days of the week:</strong> SpeedX delivers 7 days a
                    week in select areas, operating Monday through Sunday.
                  </li>
                  <li>
                    <strong>Delivery windows:</strong> Deliveries typically happen
                    between <strong>6:00 AM and 10:00 PM</strong> local time
                    (though some weekend or regional routes vary).
                  </li>
                  <li>
                    <strong>Live tracking &amp; updates:</strong> You can monitor
                    real-time scan events and proof-of-delivery photos on{" "}
                    <a
                      href="https://speedx.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      speedx.io
                    </a>{" "}
                    or via the tracking portal on the{" "}
                    <Link href="/">home page</Link>.
                  </li>
                </ul>
              </div>
            </details>

            <details>
              <summary>How many times will SpeedX attempt delivery?</summary>
              <div className="faq-answer">
                <p>
                  SpeedX does not explicitly state a rigid, universal maximum
                  number of delivery attempts in its official policy, though
                  standard procedure typically involves a second attempt or
                  triggers a return-to-sender (RTS) workflow after multiple failed
                  tries or unresolved address issues.
                </p>
                <ul>
                  <li>
                    <strong>First attempt:</strong> SpeedX aims to make the first
                    delivery attempt on the next business day after receiving the
                    package, with windows generally running from{" "}
                    <strong>6:00 AM to 10:00 PM</strong> local time.
                  </li>
                  <li>
                    <strong>Failed attempts / “No Access”:</strong> If a delivery
                    fails due to reasons like gate codes, missing unit numbers, or
                    a closed business, the status often updates to “Attempted
                    Delivery” or “Undeliverable.”
                  </li>
                  <li>
                    <strong>Redelivery &amp; escalation:</strong> Escalate or
                    contact support immediately after the{" "}
                    <strong>second failed attempt</strong> before the package gets
                    sent back to the sorting facility or merchant.
                  </li>
                </ul>
                <p>
                  <strong>How to contact support</strong>
                </p>
                <p>
                  Because SpeedX primarily operates through local independent
                  contractors and an AI chatbot named Miles, you can reach out via{" "}
                  <Link href="/contact">SpeedX Customer Support</Link> (hotline /
                  email) or contact the merchant or marketplace (such as Shein,
                  Temu, or Vinted) directly to request a redelivery or refund.
                </p>
              </div>
            </details>

            <details>
              <summary>Who is the owner of SpeedX delivery?</summary>
              <div className="faq-answer">
                <p>
                  SpeedX is owned and founded by entrepreneur{" "}
                  <strong>Chris Zheng</strong>, who established the last-mile
                  delivery and logistics company in <strong>2022</strong>.
                </p>
                <ul>
                  <li>
                    <strong>Founder and CEO:</strong> Chris Zheng
                  </li>
                  <li>
                    <strong>Key expansion:</strong> In November 2024, Zheng and
                    SpeedX acquired the logistics company Accelerated Global
                    Solutions (AGS) (previously owned by David Lu), with Zheng
                    stepping in as President and CEO of AGS.
                  </li>
                </ul>
              </div>
            </details>

            <details>
              <summary>Does SpeedX work on the weekends?</summary>
              <div className="faq-answer">
                <p>
                  Yes, SpeedX delivers on the weekends, operating{" "}
                  <strong>seven days a week</strong>.
                </p>
                <p>
                  <strong>Weekend delivery hours</strong>
                </p>
                <ul>
                  <li>
                    <strong>Saturdays:</strong> Deliveries occur regularly from{" "}
                    <strong>8:00 AM to 8:00 PM</strong> local time across all
                    service areas.
                  </li>
                  <li>
                    <strong>Sundays:</strong> Deliveries are available from{" "}
                    <strong>8:00 AM to 8:00 PM</strong> local time, though Sunday
                    service is route-dependent and less consistent than Saturday
                    or weekday delivery.
                  </li>
                </ul>
                <p>
                  <strong>What to expect</strong>
                </p>
                <ul>
                  <li>
                    <strong>Tracking scans:</strong> Package tracking updates may
                    lag or pause over the weekend, so a lack of movement on Sunday
                    does not always mean your package is delayed.
                  </li>
                  <li>
                    <strong>Support hours:</strong> While package delivery runs
                    through the weekend, corporate customer support or specific
                    technical help lines may be closed or limited on Saturdays and
                    Sundays. (Hotline hours still list Sat–Sun 11 AM – 8 PM EST
                    when staffed.)
                  </li>
                  <li>
                    <strong>Reliability:</strong> Weekend deliveries can
                    occasionally face local route overflows or unexpected delivery
                    exceptions.
                  </li>
                </ul>
              </div>
            </details>

            <details>
              <summary>Where is SpeedX headquarters?</summary>
              <div className="faq-answer">
                <p>
                  SpeedX (Speed Xpress Inc.) is headquartered in New York, NY,
                  with its primary operational facility located at{" "}
                  <strong>
                    147-03 182nd St, Springfield Gardens (Queens), NY 11413
                  </strong>{" "}
                  near JFK Airport.
                </p>
                <ul>
                  <li>
                    <strong>Corporate / privacy address:</strong> 3333 New Hyde
                    Park Rd, Suite 316, New Hyde Park, NY 11042
                  </li>
                  <li>
                    <strong>CEO:</strong> Chris Zheng
                  </li>
                  <li>
                    <strong>CFO:</strong> Brian Lau
                  </li>
                  <li>
                    <strong>Official website:</strong>{" "}
                    <a
                      href="https://speedx.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      speedx.io
                    </a>
                  </li>
                </ul>
              </div>
            </details>

            <details>
              <summary>How do I complain about SpeedX delivery?</summary>
              <div className="faq-answer">
                <p>
                  To file a complaint against SpeedX (Speed Xpress Inc.), you
                  should contact them directly, report the issue through the
                  merchant you bought the item from, or escalate the matter to
                  consumer protection agencies and your bank.
                </p>
                <p>
                  <strong>1. Contact SpeedX directly</strong>
                </p>
                <ul>
                  <li>
                    <strong>Hotline:</strong>{" "}
                    <a href="tel:+19496676769">1-949-667-6769</a> (Monday–Friday 9
                    AM – 9 PM, Saturday–Sunday 11 AM – 8 PM EST)
                  </li>
                  <li>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:speedxops@speedx.io">speedxops@speedx.io</a>
                  </li>
                  <li>
                    <strong>AI chatbot (Miles):</strong> Use the chat tool on the{" "}
                    <a
                      href="https://speedx.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SpeedX website
                    </a>{" "}
                    (8 AM – 8 PM ET) to modify addresses or check delivery status.
                  </li>
                </ul>
                <p>
                  <strong>2. Contact the merchant (seller)</strong>
                </p>
                <p>
                  SpeedX policy states that claims for lost, damaged, or
                  misdelivered packages must go through the merchant or e-commerce
                  platform (such as Temu, Shein, or Amazon) where you placed the
                  order.
                </p>
                <ul>
                  <li>Go to your order history on the retailer’s app or website.</li>
                  <li>Select “Report an issue” or “Item not received.”</li>
                  <li>
                    Request a refund, replacement, or a driver investigation with
                    GPS / photo proof.
                  </li>
                </ul>
                <p>
                  <strong>3. File a payment dispute / chargeback</strong>
                </p>
                <p>
                  If SpeedX and the retailer fail to respond or resolve your issue
                  within 48 hours to a few days, contact your bank, credit card
                  provider, or PayPal to file a payment dispute or chargeback for
                  undelivered goods.
                </p>
                <p>
                  <strong>4. File external complaints</strong>
                </p>
                <ul>
                  <li>
                    <strong>Better Business Bureau (BBB):</strong> File a formal
                    complaint against SpeedX on the BBB business profile.
                  </li>
                  <li>
                    <strong>State consumer protection:</strong> For fraud, lost
                    packages, or accountability issues, file a complaint with your
                    state’s Office of Consumer Affairs (or local equivalent).
                  </li>
                </ul>
                <p>
                  <strong>Tip:</strong> Many shoppers find that going straight to
                  the merchant or your card issuer is the fastest way to resolve
                  undelivered orders.
                </p>
              </div>
            </details>

            <details>
              <summary>Why hasn&apos;t my SpeedX package arrived?</summary>
              <div className="faq-answer">
                <p>
                  Your SpeedX package may be delayed due to several common
                  carrier issues:
                </p>
                <ul>
                  <li>
                    <strong>Inaccessible addresses or blocked routes:</strong>{" "}
                    Couriers often mark packages as undeliverable or delayed if
                    they cannot access a gate, apartment building, or blocked
                    street.
                  </li>
                  <li>
                    <strong>Infrequent drops or scans:</strong> Some drop-off
                    locations or transit hubs only process and scan packages every
                    4 to 5 days, leaving tracking numbers stuck on “In Transit.”
                  </li>
                  <li>
                    <strong>Driver backlogs or late marking:</strong> Independent
                    drivers operating from regional warehouses may run out of time
                    on their routes and log a delay late at night.
                  </li>
                  <li>
                    <strong>Misdeliveries or incorrect scans:</strong> Packages
                    are occasionally delivered to wrong addresses, left
                    unsecured, or scanned as delivered before they reach the
                    doorstep.
                  </li>
                </ul>
                <p>
                  <strong>What you can do</strong>
                </p>
                <ul>
                  <li>
                    <strong>Check your tracking:</strong> Review your tracking
                    number (starting with <strong>SPX</strong>) on the{" "}
                    <Link href="/">SpeedX tracking portal</Link>.
                  </li>
                  <li>
                    <strong>Contact SpeedX support:</strong> Call{" "}
                    <a href="tel:+19496676769">1-949-667-6769</a> (Mon–Fri 9
                    AM–9 PM, Sat–Sun 11 AM–8 PM EST), email{" "}
                    <a href="mailto:speedxops@speedx.io">speedxops@speedx.io</a>,
                    or chat with Miles on{" "}
                    <a
                      href="https://speedx.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      speedx.io
                    </a>
                    .
                  </li>
                  <li>
                    <strong>Contact the merchant:</strong> If the package is lost,
                    damaged, or severely delayed, file a claim or request a refund
                    or replacement directly through the store or platform you
                    bought it from (such as Temu or TikTok Shop), as SpeedX often
                    directs end-users back to the merchant for resolution.
                  </li>
                </ul>
              </div>
            </details>

            <details>
              <summary>How can I track my SpeedX package?</summary>
              <div className="faq-answer">
                <p>
                  You can track your package by entering your tracking number on
                  SpeedX Tracking — use the tracking box on the{" "}
                  <Link href="/">home page</Link> — or on the official{" "}
                  <a
                    href="https://speedx.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SpeedX website
                  </a>
                  .
                </p>
                <p>
                  <strong>Steps to track your package</strong>
                </p>
                <ul>
                  <li>
                    <strong>Find your tracking number:</strong> Locate the unique
                    tracking or consignment code in your shipping confirmation
                    email, text message, or online store order page.
                  </li>
                  <li>
                    <strong>Visit a tracking tool:</strong> Go to SpeedX Tracking
                    or use third-party aggregators such as 17TRACK or ParcelsApp.
                  </li>
                  <li>
                    <strong>Enter the code:</strong> Paste your tracking number
                    into the search field and submit it to view live transit
                    stages, current location, and estimated delivery dates.
                  </li>
                </ul>
              </div>
            </details>

            <details>
              <summary>Why does SpeedX take long to deliver?</summary>
              <div className="faq-answer">
                <p>
                  Delivery time depends on several transit factors — especially
                  for international marketplace orders and high-volume last-mile
                  networks.
                </p>
                <p>
                  <strong>Common factors that affect SpeedX transit times</strong>
                </p>
                <ul>
                  <li>
                    <strong>Order volume:</strong> SpeedX handles high daily
                    parcel volumes for major ecommerce platforms. Peak periods can
                    add time at regional sorting hubs.
                  </li>
                  <li>
                    <strong>International origin &amp; customs:</strong> Orders
                    shipping from overseas include overseas transit and customs
                    clearance before the package enters the U.S. last-mile
                    network — often the longest part of the journey.
                  </li>
                  <li>
                    <strong>Address access:</strong> Missing unit numbers, locked
                    gates, or incomplete address details can delay or block a
                    delivery attempt until access is resolved.
                  </li>
                  <li>
                    <strong>Handoff and scan cadence:</strong> Some seller drop-off
                    points or transit hubs process packages on a multi-day
                    cadence, so tracking can stay on “In Transit” between scans.
                  </li>
                  <li>
                    <strong>Route capacity:</strong> Independent contractors and
                    regional partners deliver across dense zip coverage; busy
                    routes or weather can push a package to the next delivery
                    window.
                  </li>
                </ul>
                <p>
                  For stuck shipments, check tracking on the{" "}
                  <Link href="/">home page</Link>, then contact{" "}
                  <Link href="/contact">SpeedX support</Link> or your merchant if
                  there has been no movement for several business days.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
