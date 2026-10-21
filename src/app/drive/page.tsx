import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Drive With Us",
  description:
    "Drive with SpeedX — delivery contractor opportunities with competitive rates, your own schedule, and live support.",
};

export default function DrivePage() {
  return (
    <main className="page-main">
      <PageHero
        title="Drive with SpeedX — delivery contractor opportunities"
        lead="Choose your routes, hours, and earning potential."
      />
      <div className="container">
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
              Support and regular updates from day one — teamwork is core to the
              SpeedX driver experience.
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
              <Link href="/discovery">Book a discovery call →</Link>
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
