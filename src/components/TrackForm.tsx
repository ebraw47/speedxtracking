"use client";

import { FormEvent, useState } from "react";
import { buildShipment, validTn, type Shipment } from "@/lib/tracking";
import ShipmentTracker from "@/components/ShipmentTracker";

/** Standalone track form for pages outside the home hero. */
export default function TrackForm() {
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
    setShipment(buildShipment(value));
  }

  return (
    <div className="standalone-track">
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

      {shipment && (
        <div className="track-result-section standalone" aria-live="polite">
          <ShipmentTracker shipment={shipment} />
        </div>
      )}
    </div>
  );
}
