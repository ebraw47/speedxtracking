import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrackForm from "@/components/TrackForm";

export const metadata: Metadata = {
  title: "Track Your Package Online",
  description:
    "Track your SpeedX package online. Check delivery status, coverage, and delivery progress for domestic and international parcels.",
};

export default function HomePage() {
  return (
    <main id="top">
      <section className="hero">
        <picture className="hero-van-frame">
          <Image
            className="hero-van"
            src="/images/speedx-van.webp"
            alt=""
            width={1024}
            height={405}
            priority
            aria-hidden="true"
          />
        </picture>
        <p className="eyebrow hero-eyebrow">
          <span className="eyebrow-dot" aria-hidden="true" />
          Live package status
        </p>
        <div className="container hero-layout">
          <div className="hero-copy">
            <h1 className="hero-title">
              <span className="title-speed">Speed</span>
              <span className="title-x">X</span>{" "}
              <span className="title-rest">Tracking</span>
            </h1>
            <p className="hero-kicker">Delivery updates in one place</p>
            <p className="hero-lead">
              Enter your SpeedX tracking number to check shipment status, scan
              history, and delivery progress for domestic and international
              parcels, including many Shein and marketplace orders.
            </p>
          </div>

          <TrackForm />

          <div className="hero-stats" aria-label="SpeedX network highlights">
            <div className="hero-stat">
              <strong>12,000+</strong>
              <span>Zip Codes Covered</span>
            </div>
            <div className="hero-stat">
              <strong>100M+</strong>
              <span>Parcels Delivered</span>
            </div>
            <div className="hero-stat">
              <strong>175M</strong>
              <span>Population Reach</span>
            </div>
          </div>
        </div>
      </section>

      <section className="page-main">
        <div className="container">
          <div className="section-head">
            <h2>Explore SpeedX</h2>
            <p>
              Learn about the network, ship with us, check coverage, or browse
              common questions.
            </p>
          </div>
          <div className="feature-grid feature-grid-2">
            <article className="feature-card">
              <h3>About SpeedX</h3>
              <p>
                Founded in 2022 — last-mile delivery across 12,000+ U.S. zip
                codes with 100M+ parcels delivered.
              </p>
              <p className="card-link">
                <Link href="/about">About Us →</Link>
              </p>
            </article>
            <article className="feature-card">
              <h3>Ship With Us</h3>
              <p>
                Solutions for retailers, 3PLs, and cross-border shippers —
                next-day, two-day, and customs clearance.
              </p>
              <p className="card-link">
                <Link href="/ship">Ship With Us →</Link>
              </p>
            </article>
            <article className="feature-card">
              <h3>U.S. Coverage</h3>
              <p>
                43 states, D.C., and Puerto Rico — powered by eight primary
                entry gateways.
              </p>
              <p className="card-link">
                <Link href="/coverage">View coverage →</Link>
              </p>
            </article>
            <article className="feature-card">
              <h3>FAQ</h3>
              <p>
                Tracking tips, delivery timelines, weekend service, and how to
                reach SpeedX support.
              </p>
              <p className="card-link">
                <Link href="/faq">Read FAQ →</Link>
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
