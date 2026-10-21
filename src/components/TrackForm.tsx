"use client";

import { FormEvent, useState } from "react";
import { buildShipment, validTn, type Shipment } from "@/lib/tracking";

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

      <div
        className={`result${shipment ? " show" : ""}`}
        id="track-result"
        aria-live="polite"
      >
        {shipment && (
          <>
            <div className="result-top">
              <span className={`badge ${shipment.badge}`}>{shipment.label}</span>
              <span className="tn">
                TRACKING · <strong>{shipment.tn}</strong>
              </span>
            </div>
            <p className="result-eta">{shipment.eta}</p>
            <p className="note" style={{ marginTop: "0.5rem", fontSize: "0.85rem" }}>
              Demo status for preview
            </p>
            <ul className="timeline">
              {shipment.events.map((ev) => (
                <li key={`${ev.title}-${ev.detail}`}>
                  <span
                    className={`dot${ev.active ? "" : " muted"}`}
                    aria-hidden="true"
                  />
                  <div>
                    <strong>{ev.title}</strong>
                    <span>{ev.detail}</span>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
