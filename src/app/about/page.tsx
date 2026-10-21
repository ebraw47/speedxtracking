import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SpeedX last-mile delivery — founded in 2022 to connect ecommerce brands with fast, reliable package delivery across the U.S.",
};

export default function AboutPage() {
  return (
    <main className="page-main">
      <PageHero
        title="About SpeedX"
        lead="Learn about SpeedX last-mile delivery — founded in 2022 to connect ecommerce brands with fast, reliable package delivery across the U.S."
      />
      <div className="container">
        <div className="prose-block">
          <p>
            Founded in <strong>2022</strong>, SpeedX built a next-level last-mile
            experience as ecommerce surged. Starting in select New York
            neighborhoods, the network expanded across the U.S. — including Los
            Angeles, Miami, Dallas, Chicago, and beyond.
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
            <strong>Mission:</strong> deliver agile, innovative, and transparent
            last-mile solutions that empower clients, streamline operations, and
            drive exceptional customer satisfaction — while challenging
            traditional industry norms.
          </p>
        </div>

        <div className="section-head" style={{ marginTop: "1.75rem" }}>
          <h2>Trusted across leading industries</h2>
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
          <h2>Our values</h2>
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

        <div className="section-head" style={{ marginTop: "2.5rem" }}>
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
              No complex guides or hidden fees — simple, competitive pricing that
              delivers.
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
              Pioneering technology that keeps you ahead of tomorrow’s delivery
              demands.
            </p>
          </article>
          <article className="feature-card">
            <div className="icon-pill">5</div>
            <h3>Superior service</h3>
            <p>
              Real-time tracking, SMS updates, and proof-of-delivery — every step
              fully visible.
            </p>
          </article>
          <article className="feature-card">
            <div className="icon-pill">6</div>
            <h3>End-to-end solutions</h3>
            <p>
              From first mile to last — global freight connected with precision
              last-mile delivery.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
