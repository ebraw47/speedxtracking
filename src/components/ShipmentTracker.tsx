import type { Shipment, TrackerStep } from "@/lib/tracking";

function StepIcon({ step }: { step: TrackerStep }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
    className: "sx-step-icon",
  };

  if (step.key === "origin") {
    return (
      <svg {...common}>
        <path
          d="M3 20V9l9-5 9 5v11H3z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9 20v-6h6v6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (step.key === "transit") {
    return (
      <svg {...common}>
        <path
          d="M3 15h11V8H3v7zm11 0h4l3 3v-5h-7v2z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="7" cy="18" r="1.6" fill="currentColor" />
        <circle cx="17" cy="18" r="1.6" fill="currentColor" />
      </svg>
    );
  }
  if (step.key === "facility") {
    return (
      <svg {...common}>
        <path
          d="M3 20V8l9-4 9 4v12H3z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 14h5M12 11.5v5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path
        d="M6 20V5h8l-1.5 3L18 11H6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ShipmentTracker({ shipment }: { shipment: Shipment }) {
  return (
    <div className="sx-tracker">
      <div className="sx-tracker-card">
        <h3 className="sx-tracker-title">Shipment Tracker</h3>

        <div
          className="sx-progress"
          style={{ ["--sx-progress" as string]: `${shipment.progress}%` }}
        >
          <div className="sx-progress-rail" aria-hidden="true">
            <span className="sx-progress-fill" />
            <span className="sx-progress-plane" />
          </div>
          <ol className="sx-steps">
            {shipment.steps.map((step) => (
              <li
                key={step.key}
                className={`sx-step${step.done ? " is-done" : ""}`}
              >
                <span className="sx-step-bubble">
                  <StepIcon step={step} />
                </span>
                {step.city ? (
                  <span className="sx-step-text">
                    <strong>{step.city}</strong>
                    <span>{step.subtitle ?? step.title}</span>
                  </span>
                ) : (
                  <span className="sx-step-text">
                    <span className="sx-step-plain">{step.title}</span>
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="sx-tracker-card">
        <h3 className="sx-section-title">Most Recent Event</h3>
        <div className="sx-recent">
          <div>
            <p className="sx-recent-label">Status</p>
            <p className="sx-recent-value">{shipment.recent.title}</p>
            {shipment.recent.note && (
              <p className="sx-recent-note">{shipment.recent.note}</p>
            )}
          </div>
          <div>
            <p className="sx-recent-label">Date &amp; Time</p>
            <p className="sx-recent-value">{shipment.recent.datetime}</p>
          </div>
          <div>
            <p className="sx-recent-label">City</p>
            <p className="sx-recent-value">{shipment.recent.city}</p>
          </div>
        </div>
      </div>

      <div className="sx-tracker-card">
        <h3 className="sx-section-title">All SpeedX Events</h3>
        <div className="sx-events">
          {shipment.days.map((day) => (
            <div className="sx-day" key={day.dateLabel}>
              <p className="sx-day-label">{day.dateLabel}</p>
              <ul className="sx-event-list">
                {day.events.map((ev) => (
                  <li key={`${day.dateLabel}-${ev.time}-${ev.status}`}>
                    <div className="sx-event-time">{ev.time}</div>
                    <div className="sx-event-body">
                      <strong>{ev.city}</strong>
                      <span className="sx-event-status">{ev.status}</span>
                      {ev.note && (
                        <span className="sx-event-note">Note: {ev.note}</span>
                      )}
                      {ev.pod && (
                        <span className="sx-pod-badge">POD VIEW</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="sx-tracker-card">
        <h3 className="sx-section-title">Shipment Details</h3>
        <div className="sx-details-grid">
          <div>
            <p className="sx-details-head">Order Information</p>
            <dl className="sx-dl">
              <div>
                <dt>Pick up date</dt>
                <dd>{shipment.details.pickupDate}</dd>
              </div>
              <div>
                <dt>Delivery date</dt>
                <dd>{shipment.details.deliveryDate}</dd>
              </div>
            </dl>
          </div>
          <div>
            <p className="sx-details-head">Location</p>
            <dl className="sx-dl">
              <div>
                <dt>Pick up location</dt>
                <dd>{shipment.details.pickupLocation}</dd>
              </div>
              <div>
                <dt>Drop off location</dt>
                <dd>{shipment.details.dropoffLocation}</dd>
              </div>
            </dl>
          </div>
        </div>
        <p className="sx-tn-foot">
          Tracking · <strong>{shipment.tn}</strong> · {shipment.label}
        </p>
      </div>
    </div>
  );
}
