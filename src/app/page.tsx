import type { Metadata } from "next";
import Image from "next/image";
import TrackForm from "@/components/TrackForm";
import HomeSections from "@/components/sections/HomeSections";

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

          <a
            href="#discovery"
            className="btn-discovery btn-discovery-hero hero-discovery-cta"
          >
            Book a discovery call
            <svg
              className="hero-discovery-arrow"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 5v14M5 12l7 7 7-7"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>

      <HomeSections />
    </main>
  );
}
