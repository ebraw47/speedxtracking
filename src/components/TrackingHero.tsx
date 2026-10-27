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
