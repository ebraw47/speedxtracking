import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "How We Deliver",
  description:
    "How SpeedX delivery works from order to doorstep — powered by AI-driven tracking and proprietary software.",
};

export default function HowWeDeliverPage() {
  return (
    <main className="page-main">
      <PageHero
        title="How SpeedX delivery works from order to doorstep"
        lead="Powered by AI-driven tracking and proprietary software for real-time visibility and on-time performance."
      />
      <div className="container">
        <div className="steps">
          <article className="step">
            <div>
              <h3>01 · Customer’s order is fulfilled</h3>
              <p>The customer places an order with one of SpeedX’s shippers.</p>
            </div>
          </article>
          <article className="step">
            <div>
              <h3>02 · Tracking begins &amp; label printed</h3>
              <p>
                Data is sent to the SpeedX system; a shipping label is generated
                in real time and tracking is hosted on the tracking page.
              </p>
            </div>
          </article>
          <article className="step">
            <div>
              <h3>03 · Drop-off or SpeedX pick-up</h3>
              <p>
                Drop packages at a sorting center, or have SpeedX pick them up.
              </p>
            </div>
          </article>
          <article className="step">
            <div>
              <h3>04 · Sorted to optimal routes</h3>
              <p>
                At the sorting center, warehouse automation routes shipments
                optimally before they go out for delivery.
              </p>
            </div>
          </article>
          <article className="step">
            <div>
              <h3>05 · Customer receives the package</h3>
              <p>
                Delivered with proof-of-delivery photos every time — at no
                additional cost.
              </p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
