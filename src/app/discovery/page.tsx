import type { Metadata } from "next";
import DiscoveryForm from "@/components/DiscoveryForm";

export const metadata: Metadata = {
  title: "Book Discovery",
  description:
    "Book a SpeedX discovery call and see how last-mile delivery can become a competitive differentiator.",
};

export default function DiscoveryPage() {
  return (
    <main className="page-main">
      <section className="discovery">
        <div className="container discovery-grid">
          <div className="discovery-copy">
            <h1>Do you dare to deliver differently?</h1>
            <p>
              At SpeedX, we aim to be your long-term partners in success. We’re
              dedicated to making your last-mile delivery a genuine competitive
              differentiator that guarantees happy customers, time and again.
            </p>
            <p>
              Book a discovery call today and see how SpeedX can transform your
              delivery experience.
            </p>
          </div>
          <DiscoveryForm />
        </div>
      </section>
    </main>
  );
}
