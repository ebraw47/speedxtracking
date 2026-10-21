import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Delivery Services",
  description:
    "Next-day, second-day, customs clearance, and handling services for ecommerce shipping.",
};

export default function ServicesPage() {
  return (
    <main className="page-main">
      <PageHero
        title="SpeedX delivery services"
        lead="Next-day, second-day, customs clearance, and handling services for ecommerce shipping."
      />
      <div className="container">
        <div className="feature-grid feature-grid-4">
          <article className="feature-card">
            <h3>Next-day delivery</h3>
            <p>
              Super fast, reliable service designed to exceed customer
              expectations.
            </p>
          </article>
          <article className="feature-card">
            <h3>2nd-day delivery</h3>
            <p>Affordable shipping without sacrificing speed or precision.</p>
          </article>
          <article className="feature-card">
            <h3>Customs clearance</h3>
            <p>
              Expert compliance that moves shipments faster — no delays, no
              shortcuts.
            </p>
          </article>
          <article className="feature-card">
            <h3>Handling &amp; injection</h3>
            <p>
              Optimized handling from sortation to final mile for efficient
              network injection.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
