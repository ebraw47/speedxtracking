"use client";

import { FormEvent, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { buildShipment, validTn, type Shipment } from "@/lib/tracking";
import ShipmentTracker from "@/components/ShipmentTracker";

export default function TrackingHero({ children }: { children: ReactNode }) {
  const [error, setError] = useState("");
  const [shipment, setShipment] = useState<Shipment | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const value = (
      form.elements.namedItem("tracking-number") as HTMLInputElement
    ).value.trim();

    if (!validTn(value)) {
      setError("Please enter a valid tracking number (8+ characters).");
      setShipment(null);
      return;
    }

    setError("");
    const next = buildShipment(value);
    setShipment(next);
    requestAnimationFrame(() => {
      document.getElementById("track-result")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  return (
    <>
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

          <div className="hero-panel track-panel" id="track">
            <div className="track-panel-head">
              <h2>Track SpeedX Package</h2>
              <span className="track-live">Live</span>
            </div>
            <form className="track-form" id="track-form" onSubmit={onSubmit}>
              <label className="sr-only" htmlFor="tracking-number">
                Tracking number
              </label>
              <input
                id="tracking-number"
                name="tracking-number"
                type="text"
                placeholder="Enter tracking number"
                autoComplete="off"
                required
              />
              <button type="submit">Track Now</button>
            </form>
            <p className={`form-error${error ? " show" : ""}`} role="alert">
              {error}
            </p>
          </div>

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

          <div className="hero-cta-row">
            <Link
              href="/discovery"
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
            </Link>
            <a
              className="btn-app-store"
              href="https://apps.apple.com/vn/app/speedx-tracking/id6762048489"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download SpeedX Tracking on the App Store"
            >
              <svg
                className="btn-app-store-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M16.365 1.43c0 1.14-.415 2.21-1.207 3.01-.85.87-2.26 1.54-3.44 1.45-.15-1.1.43-2.26 1.2-3.05.86-.9 2.34-1.55 3.447-1.41zM20.69 17.4c-.54 1.2-.8 1.73-1.5 2.79-.97 1.45-2.34 3.26-4.04 3.28-1.51.02-1.9-.98-3.96-.97-2.05.01-2.48.99-3.99.97-1.7-.02-3-1.65-3.97-3.1C1.57 17.3.3 12.7 2.4 9.6c1.05-1.55 2.72-2.53 4.3-2.53 1.7 0 2.77 1 4.17 1 1.35 0 2.17-1 4.2-1 1.42 0 2.92.77 3.98 2.1-3.5 1.92-2.93 6.93 1.64 8.23z"
                />
              </svg>
              <span className="btn-app-store-copy">
                <span className="btn-app-store-eyebrow">Download on the</span>
                <span className="btn-app-store-name">App Store</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {shipment && (
        <section
          className="track-result-section"
          id="track-result"
          aria-live="polite"
        >
          <div className="container">
            <ShipmentTracker shipment={shipment} />
          </div>
        </section>
      )}

      {children}
    </>
  );
}
