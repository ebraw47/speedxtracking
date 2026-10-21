import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Ship With Us",
  description:
    "Last-mile solutions for retailers, logistics providers, and cross-border shippers.",
};

export default function ShipPage() {
  return (
    <main className="page-main">
      <PageHero
        title="Ship with SpeedX for retailers, 3PLs, and cross-border"
        lead="Last-mile solutions for retailers, logistics providers, and cross-border shippers. Read our in-depth guides below."
      />
      <div className="container">
        <div className="feature-grid">
          <article className="feature-card">
            <div className="icon-pill">R</div>
            <h3>For retailers, marketplaces &amp; DTC</h3>
            <p>
              From order to doorstep — online retailers, marketplaces, and DTC
              brands can target ~95% on-time delivery with scalable next-day and
              two-day options, clear pricing, carrier diversification, live
              tracking, SMS updates, and POD.
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
              airport hubs, secure retrieval &amp; sortation, injection into the
              last-mile network, transparent rates, and end-to-end visibility
              with POD photos.
            </p>
            <p className="card-link">
              <Link href="/posts/cross-border-shipping">
                Read cross-border guide →
              </Link>
            </p>
          </article>
        </div>

        <div className="section-head" style={{ marginTop: "2rem" }}>
          <h2>Cross-border: how it works</h2>
          <p>
            From inbound freight to U.S. doorstep. Full walkthrough in the{" "}
            <Link href="/posts/cross-border-shipping">cross-border post</Link>.
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
          Pricing philosophy: transparent parcel rates vs. traditional net rates
          plus rising surcharges — see discovery call for live quotes.
        </p>
      </div>
    </main>
  );
}
