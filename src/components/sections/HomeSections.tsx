import Image from "next/image";
import Link from "next/link";
import DiscoveryForm from "@/components/DiscoveryForm";
import FaqContent from "@/components/sections/FaqContent";

export default function HomeSections() {
  return (
    <>
      <section id="overview">
        <div className="container">
          <div className="section-head">
            <h2>SpeedX tracking overview</h2>
            <p>
              Quick facts for SpeedX package tracking, coverage, and how to
              check your shipment status.
            </p>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Service Name</td>
                  <td>SpeedX Tracking</td>
                </tr>
                <tr>
                  <td>Purpose</td>
                  <td>Check shipment status and delivery progress</td>
                </tr>
                <tr>
                  <td>Required Info</td>
                  <td>Valid SpeedX tracking number</td>
                </tr>
                <tr>
                  <td>Coverage</td>
                  <td>Domestic &amp; International (Global Tracking)</td>
                </tr>
                <tr>
                  <td>Popular Use</td>
                  <td>SpeedX tracking Shein orders</td>
                </tr>
                <tr>
                  <td>Access Type</td>
                  <td>Online tracking via tracking page</td>
                </tr>
                <tr>
                  <td>Device Support</td>
                  <td>Mobile, Tablet, Desktop</td>
                </tr>
                <tr>
                  <td>Official company site</td>
                  <td>
                    <a
                      href="https://speedx.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://speedx.io/
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="section-head about-head">
            <h2 className="about-title">About SpeedX</h2>
            <p>
              Learn about SpeedX last-mile delivery — founded in 2022 to connect
              ecommerce brands with fast, reliable package delivery across the
              U.S.
            </p>
          </div>
          <div className="prose-block">
            <p>
              Founded in <strong>2022</strong>, SpeedX built a next-level
              last-mile experience as ecommerce surged. Starting in select New
              York neighborhoods, the network expanded across the U.S. —
              including Los Angeles, Miami, Dallas, Chicago, and beyond.
            </p>
            <p>
              In just a few years, SpeedX has grown to serve <strong>30+</strong>{" "}
              major online marketplaces, 3PLs, and direct retailers, with{" "}
              <strong>100M+ parcels delivered</strong> and capacity for{" "}
              <strong>1,000,000+ packages daily</strong> — plus coverage across{" "}
              <strong>12,000+</strong> U.S. zip codes and reach to roughly{" "}
              <strong>175M</strong> customers.
            </p>
            <p>
              <strong>Mission:</strong> deliver agile, innovative, and
              transparent last-mile solutions that empower clients, streamline
              operations, and drive exceptional customer satisfaction — while
              challenging traditional industry norms.
            </p>
          </div>

          <div className="section-head" style={{ marginTop: "1.75rem" }}>
            <h3>Trusted across leading industries</h3>
          </div>
          <div className="feature-grid">
            <article className="feature-card">
              <h3>Online marketplaces &amp; retailers</h3>
              <p>
                Reliable, scalable delivery that keeps customers happy, costs
                competitive, and carrier options diversified for peak demand.
              </p>
            </article>
            <article className="feature-card">
              <h3>3PLs &amp; fulfillment centers</h3>
              <p>
                Tech integration, zone-skipping, and competitive last-mile
                solutions that streamline operations for client brands.
              </p>
            </article>
            <article className="feature-card">
              <h3>DTC brands</h3>
              <p>
                Cost-effective shipping, live tracking, and strong customer
                support that elevate the delivery experience.
              </p>
            </article>
          </div>

          <div className="section-head" style={{ marginTop: "1.75rem" }}>
            <h3>Our values</h3>
            <p>Who SpeedX is — for teams and customers.</p>
          </div>
          <div className="feature-grid feature-grid-2">
            <article className="feature-card">
              <h3>Relentlessly driven</h3>
              <p>Best work, day in and day out.</p>
            </article>
            <article className="feature-card">
              <h3>Championing collaboration</h3>
              <p>Thrive on connection and shared wins.</p>
            </article>
            <article className="feature-card">
              <h3>Always reliable</h3>
              <p>Count on each other no matter the challenge.</p>
            </article>
            <article className="feature-card">
              <h3>Pioneering spirit</h3>
              <p>Innovation energizes every delivery.</p>
            </article>
            <article className="feature-card">
              <h3>Customer obsessed</h3>
              <p>Everything with the customer in mind.</p>
            </article>
            <article className="feature-card">
              <h3>Self-improving</h3>
              <p>Continuously evolving — that’s the SpeedX way.</p>
            </article>
          </div>
          <div className="prose-block" style={{ marginTop: "1.5rem" }}>
            <p>
              <strong>Team culture:</strong> collaboration and creativity,
              everyone’s ideas welcomed, customer-obsessed delivery, and shared
              wins — “That’s the SpeedX way.”
            </p>
          </div>
        </div>
      </section>

      <section id="why">
        <div className="container">
          <div className="section-head">
            <h2>Why brands trust SpeedX last-mile delivery</h2>
            <p>
              More than a delivery company — a last-mile partner connecting
              ecommerce shippers to customers through speed, flexibility, and
              technology.
            </p>
          </div>
          <div className="feature-grid feature-grid-2">
            <article className="feature-card">
              <div className="icon-pill">1</div>
              <h3>Clear, transparent pricing</h3>
              <p>
                No complex guides or hidden fees — simple, competitive pricing
                that delivers.
              </p>
            </article>
            <article className="feature-card">
              <div className="icon-pill">2</div>
              <h3>Seamless integration</h3>
              <p>
                Effortless integration that works with your systems — because
                simplicity drives success.
              </p>
            </article>
            <article className="feature-card">
              <div className="icon-pill">3</div>
              <h3>Cross-border expertise</h3>
              <p>
                Expert customs brokerage that simplifies compliance — faster
                clearance, fewer delays.
              </p>
            </article>
            <article className="feature-card">
              <div className="icon-pill">4</div>
              <h3>Technical innovation</h3>
              <p>
                Pioneering technology that keeps you ahead of tomorrow’s
                delivery demands.
              </p>
            </article>
            <article className="feature-card">
              <div className="icon-pill">5</div>
              <h3>Superior service</h3>
              <p>
                Real-time tracking, SMS updates, and proof-of-delivery — every
                step fully visible.
              </p>
            </article>
            <article className="feature-card">
              <div className="icon-pill">6</div>
              <h3>End-to-end solutions</h3>
              <p>
                From first mile to last — global freight connected with
                precision last-mile delivery.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <div className="section-head">
            <h2>SpeedX delivery services</h2>
            <p>
              Next-day, second-day, customs clearance, and handling services for
              ecommerce shipping.
            </p>
          </div>
          <div className="feature-grid feature-grid-4">
            <article className="feature-card">
              <h3>Next-day delivery</h3>
              <p>
                Super fast, reliable service designed to exceed customer
                expectations.
              </p>
            </article>
            <article className="feature-card">
              <h3>2nd-day delivery</h3>
              <p>
                Affordable shipping without sacrificing speed or precision.
              </p>
            </article>
            <article className="feature-card">
              <h3>Customs clearance</h3>
              <p>
                Expert compliance that moves shipments faster — no delays, no
                shortcuts.
              </p>
            </article>
            <article className="feature-card">
              <h3>Handling &amp; injection</h3>
              <p>
                Optimized handling from sortation to final mile for efficient
                network injection.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="delivery-flow">
        <div className="container">
          <div className="section-head">
            <h2>How SpeedX delivery works from order to doorstep</h2>
            <p>
              Powered by AI-driven tracking and proprietary software for
              real-time visibility and on-time performance.
            </p>
          </div>
          <div className="steps">
            <article className="step">
              <div>
                <h3>01 · Customer’s order is fulfilled</h3>
                <p>
                  The customer places an order with one of SpeedX’s shippers.
                </p>
              </div>
            </article>
            <article className="step">
              <div>
                <h3>02 · Tracking begins &amp; label printed</h3>
                <p>
                  Data is sent to the SpeedX system; a shipping label is
                  generated in real time and tracking is hosted on the tracking
                  page.
                </p>
              </div>
            </article>
            <article className="step">
              <div>
                <h3>03 · Drop-off or SpeedX pick-up</h3>
                <p>
                  Drop packages at a sorting center, or have SpeedX pick them
                  up.
                </p>
              </div>
            </article>
            <article className="step">
              <div>
                <h3>04 · Sorted to optimal routes</h3>
                <p>
                  At the sorting center, warehouse automation routes shipments
                  optimally before they go out for delivery.
                </p>
              </div>
            </article>
            <article className="step">
              <div>
                <h3>05 · Customer receives the package</h3>
                <p>
                  Delivered with proof-of-delivery photos every time — at no
                  additional cost.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="tech">
        <div className="container">
          <div className="section-head">
            <h2>SpeedX tracking technology and delivery innovation</h2>
            <p>
              Where speed meets tech-fueled innovation for the future of
              ecommerce delivery.
            </p>
          </div>
          <ul className="tech-list">
            <li>Pioneering AI technology for proof of delivery</li>
            <li>Geolocation verification for quality control</li>
            <li>Real-time smart POD photo detection</li>
            <li>
              Driver application and management system for full operational
              control
            </li>
            <li>
              Fast, seamless plug-and-play integration through open APIs
            </li>
            <li>
              ML model trained on 50M+ POD photos — detecting unqualified POD
              in real time with over 90% accuracy
            </li>
          </ul>
        </div>
      </section>

      <section id="ship">
        <div className="container">
          <div className="section-head">
            <h2>Ship with SpeedX for retailers, 3PLs, and cross-border</h2>
            <p>
              Last-mile solutions for retailers, logistics providers, and
              cross-border shippers. Read our in-depth guides below.
            </p>
          </div>
          <div className="feature-grid">
            <article className="feature-card">
              <div className="icon-pill">R</div>
              <h3>For retailers, marketplaces &amp; DTC</h3>
              <p>
                From order to doorstep — online retailers, marketplaces, and DTC
                brands can target ~95% on-time delivery with scalable next-day
                and two-day options, clear pricing, carrier diversification,
                live tracking, SMS updates, and POD.
              </p>
              <p className="card-link">
                <Link href="/posts/for-retailers">Read retailers guide →</Link>
              </p>
            </article>
            <article className="feature-card">
              <div className="icon-pill">L</div>
              <h3>For logistics providers &amp; 3PLs</h3>
              <p>
                Expand into major U.S. markets with seamless tech / API
                integration, zone-skipping efficiency, next-day and second-day
                services, scalable peak support, and real-time tracking for your
                clients.
              </p>
              <p className="card-link">
                <Link href="/posts/for-logistics-providers">
                  Read logistics guide →
                </Link>
              </p>
            </article>
            <article className="feature-card">
              <div className="icon-pill">X</div>
              <h3>Cross-border shippers</h3>
              <p>
                Frictionless customs brokerage (Type 01 &amp; T11), strategic
                airport hubs, secure retrieval &amp; sortation, injection into
                the last-mile network, transparent rates, and end-to-end
                visibility with POD photos.
              </p>
              <p className="card-link">
                <Link href="/posts/cross-border-shipping">
                  Read cross-border guide →
                </Link>
              </p>
            </article>
          </div>

          <div className="section-head" style={{ marginTop: "2rem" }}>
            <h3>Cross-border: how it works</h3>
            <p>
              From inbound freight to U.S. doorstep. Full walkthrough in the{" "}
              <Link href="/posts/cross-border-shipping">cross-border post</Link>
              .
            </p>
          </div>
          <div className="steps">
            <article className="step">
              <div>
                <h3>Freight arrival &amp; customs clearance</h3>
                <p>
                  Major airport hubs manage inbound volume efficiently and clear
                  shipments quickly.
                </p>
              </div>
            </article>
            <article className="step">
              <div>
                <h3>Secure transport &amp; sortation</h3>
                <p>
                  Parcels are retrieved, sorted, and injected into the SpeedX
                  last-mile network.
                </p>
              </div>
            </article>
            <article className="step">
              <div>
                <h3>Next-day &amp; two-day delivery</h3>
                <p>
                  Optimized routing targets 95%+ on-time performance to meet and
                  exceed customer expectations.
                </p>
              </div>
            </article>
          </div>
          <p className="note" style={{ marginTop: "1.25rem" }}>
            Pricing philosophy: transparent parcel rates vs. traditional net
            rates plus rising surcharges — see discovery call for live quotes.
          </p>
        </div>
      </section>

      <section id="guide">
        <div className="container">
          <div className="section-head">
            <h2>How to track a SpeedX package</h2>
            <p>
              Enter your SpeedX tracking number and follow these steps to check
              live delivery status.
            </p>
          </div>
          <div className="steps">
            <article className="step">
              <div>
                <h3>Find your SpeedX tracking number</h3>
                <p>
                  Check your seller email, Shein / Temu / TikTok Shop order page,
                  or shipping notification after dispatch.
                </p>
              </div>
            </article>
            <article className="step">
              <div>
                <h3>Enter the tracking number</h3>
                <p>
                  Copy the ID exactly and paste it into the tracking box at the{" "}
                  <a href="#top">top of this page</a> — no spaces or missing
                  characters.
                </p>
              </div>
            </article>
            <article className="step">
              <div>
                <h3>Click Track</h3>
                <p>
                  Open the latest status, location updates, and estimated
                  delivery progress for your parcel.
                </p>
              </div>
            </article>
            <article className="step">
              <div>
                <h3>Read the status timeline</h3>
                <p>
                  In Transit, Out for Delivery, Delivered, Pending, or Exception
                  — know what each scan usually means. See{" "}
                  <a href="#status">status meanings</a>.
                </p>
              </div>
            </article>
          </div>
          <p className="card-link" style={{ marginTop: "1.5rem" }}>
            <a href="#top">Track a package now →</a>
          </p>
        </div>
      </section>

      <section id="status">
        <div className="container">
          <div className="section-head">
            <h2>SpeedX tracking status meanings explained</h2>
            <p>
              What In Transit, Out for Delivery, Delivered, Pending, Exception,
              and Customs hold mean.
            </p>
          </div>
          <div className="status-grid">
            <div className="status-item">
              <strong>● In Transit</strong>
              <p>Package is moving between hubs in the delivery network.</p>
            </div>
            <div className="status-item">
              <strong>● Out for Delivery</strong>
              <p>On a local vehicle — usually arrives the same day.</p>
            </div>
            <div className="status-item">
              <strong>● Delivered</strong>
              <p>Marked delivered. Check porch, lobby, mailbox, neighbors.</p>
            </div>
            <div className="status-item">
              <strong>● Pending</strong>
              <p>Label created / info received, not fully processed yet.</p>
            </div>
            <div className="status-item">
              <strong>● Exception</strong>
              <p>Delay or delivery issue — contact the seller with the TN.</p>
            </div>
            <div className="status-item">
              <strong>● Customs hold</strong>
              <p>
                Common on China→US marketplace orders; often clears in days.
              </p>
            </div>
          </div>
          <p className="note">
            Tip: Marketplace shoppers (Shein, Temu, TikTok Shop) should contact
            the store first for claims, reroutes, or missing parcels — they hold
            the shipping contract with the carrier.
          </p>
        </div>
      </section>

      <section id="coverage" className="coverage">
        <div className="container">
          <div className="section-head">
            <h2>SpeedX U.S. delivery coverage and network</h2>
            <p>
              SpeedX covers 43 states in the United States, along with
              Washington, D.C. and Puerto Rico — powered by eight primary entry
              gateways.
            </p>
          </div>
          <div className="coverage-stats">
            <article className="coverage-stat">
              <strong>43</strong>
              <span>U.S. states covered</span>
            </article>
            <article className="coverage-stat">
              <strong>D.C. + PR</strong>
              <span>Washington, D.C. &amp; Puerto Rico</span>
            </article>
            <article className="coverage-stat">
              <strong>12,000+</strong>
              <span>ZIP codes (11,775–12,000+)</span>
            </article>
            <article className="coverage-stat">
              <strong>~175M</strong>
              <span>Customer reach · ~50% N.A. ecommerce</span>
            </article>
          </div>

          <figure className="coverage-map">
            <Image
              src="/images/us-coverage.svg"
              alt="SpeedX United States coverage map showing ATL, DFW, EWR, IAH, LAX, MIA, ORD, and SFO gateways"
              width={980}
              height={620}
            />
            <figcaption>
              Coverage map — glowing pins mark SpeedX primary entry gateways.
            </figcaption>
          </figure>

          <div className="gateway-board">
            <h3>Major gateways / hubs</h3>
            <div className="gateway-grid">
              <article className="gateway-card">
                <span>ATL</span>
                <p>Atlanta</p>
              </article>
              <article className="gateway-card">
                <span>DFW</span>
                <p>Dallas–Fort Worth</p>
              </article>
              <article className="gateway-card">
                <span>EWR</span>
                <p>Newark</p>
              </article>
              <article className="gateway-card">
                <span>IAH</span>
                <p>Houston</p>
              </article>
              <article className="gateway-card">
                <span>LAX</span>
                <p>Los Angeles</p>
              </article>
              <article className="gateway-card">
                <span>MIA</span>
                <p>Miami</p>
              </article>
              <article className="gateway-card">
                <span>ORD</span>
                <p>Chicago</p>
              </article>
              <article className="gateway-card">
                <span>SFO</span>
                <p>San Francisco</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="drive">
        <div className="container">
          <div className="section-head">
            <h2>Drive with SpeedX — delivery contractor opportunities</h2>
            <p>Choose your routes, hours, and earning potential.</p>
          </div>
          <div className="feature-grid feature-grid-2">
            <article className="feature-card">
              <h3>Competitive rates &amp; bonuses</h3>
              <p>
                Control how much you earn and when — plus growth opportunities
                across a 12,000+ zip network with millions of packages to move.
              </p>
            </article>
            <article className="feature-card">
              <h3>Use your own vehicle</h3>
              <p>
                Manage deliveries from your own car or van with hassle-free
                warehouse pickups.
              </p>
            </article>
            <article className="feature-card">
              <h3>Set your own schedule</h3>
              <p>
                Not a 9–5? Choose when you work and how often. Simple, fast
                registration via the official apply form.
              </p>
            </article>
            <article className="feature-card">
              <h3>Live delivery support</h3>
              <p>
                Support and regular updates from day one — teamwork is core to
                the SpeedX driver experience.
              </p>
            </article>
          </div>
          <div
            className="feature-grid feature-grid-2"
            style={{ marginTop: "1rem" }}
          >
            <article className="feature-card">
              <h3>What you’ll do</h3>
              <ul className="inline-list">
                <li>Pick up packages from a local warehouse</li>
                <li>Deliver on a route you choose in your area</li>
                <li>
                  Ensure timely, accurate deliveries with the SpeedX driver app
                </li>
              </ul>
            </article>
            <article className="feature-card">
              <h3>Requirements</h3>
              <ul className="inline-list">
                <li>Reliable vehicle + registration documents</li>
                <li>Age 21+</li>
                <li>Valid driver’s license</li>
                <li>Proof of insurance</li>
                <li>A smartphone</li>
                <li>Service-first attitude</li>
              </ul>
              <p className="card-link">
                <a href="#discovery">Book a discovery call →</a>
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="section-head">
            <h2>SpeedX customer service and contact information</h2>
            <p>
              Official SpeedX details for shoppers who need carrier support.
              Prefer the seller for marketplace order claims when possible.
            </p>
          </div>
          <div className="table-wrap" style={{ marginBottom: "1rem" }}>
            <table>
              <thead>
                <tr>
                  <th>Detail</th>
                  <th>Information</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Headquarters / Ops Facility</td>
                  <td>
                    147-03 182nd St, Springfield Gardens (Queens), NY 11413 (near
                    JFK Airport), United States
                  </td>
                </tr>
                <tr>
                  <td>Official Website</td>
                  <td>
                    <a
                      href="https://speedx.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://speedx.io/
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Customer Service Hotline</td>
                  <td>
                    <a href="tel:+19496676769">+1-949-667-6769</a> (Mon–Fri 9 AM
                    – 9 PM, Sat–Sun 11 AM – 8 PM EST)
                    <br />
                    or <a href="tel:+18006584192">+1-800-658-4192</a>
                  </td>
                </tr>
                <tr>
                  <td>Support Email</td>
                  <td>
                    <a href="mailto:speedxops@speedx.io">speedxops@speedx.io</a>
                    {" · "}
                    <a href="mailto:help@speedx.io">help@speedx.io</a>
                  </td>
                </tr>
                <tr>
                  <td>AI Chatbot</td>
                  <td>Miles (8 AM – 8 PM ET via the official website)</td>
                </tr>
                <tr>
                  <td>Mailing Address</td>
                  <td>
                    3333 New Hyde Park Rd, Suite 316, New Hyde Park, NY 11042
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="status-grid">
            <div className="status-item">
              <strong>Facility pickups</strong>
              <p>
                SpeedX does <strong>not</strong> allow public walk-ins or
                facility pickups at their sorting centers.
              </p>
            </div>
            <div className="status-item">
              <strong>Before you call</strong>
              <p>
                Have your <strong>SPX</strong> tracking number ready. Street /
                apartment changes: Miles chatbot. City / state / ZIP or
                lost-damaged claims: contact the merchant first.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqContent headingLevel="h2" />

      <section id="discovery" className="discovery">
        <div className="container discovery-grid">
          <div className="discovery-copy">
            <h2>Do you dare to deliver differently?</h2>
            <p>
              At SpeedX, we aim to be your long-term partners in success. We’re
              dedicated to making your last-mile delivery a genuine competitive
              differentiator that guarantees happy customers, time and again.
            </p>
            <p>
              Book a discovery call today and see how SpeedX can transform your
              delivery experience.
            </p>
          </div>
          <DiscoveryForm />
        </div>
      </section>
    </>
  );
}
