import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Tracking Status Meanings",
  description:
    "What In Transit, Out for Delivery, Delivered, Pending, Exception, and Customs hold mean for SpeedX tracking.",
};

export default function StatusPage() {
  return (
    <main className="page-main">
      <PageHero
        title="SpeedX tracking status meanings explained"
        lead="What In Transit, Out for Delivery, Delivered, Pending, Exception, and Customs hold mean."
      />
      <div className="container">
        <div className="status-grid">
          <div className="status-item">
            <strong>● In Transit</strong>
            <p>Package is moving between hubs in the delivery network.</p>
          </div>
          <div className="status-item">
            <strong>● Out for Delivery</strong>
            <p>On a local vehicle — usually arrives the same day.</p>
          </div>
          <div className="status-item">
            <strong>● Delivered</strong>
            <p>Marked delivered. Check porch, lobby, mailbox, neighbors.</p>
          </div>
          <div className="status-item">
            <strong>● Pending</strong>
            <p>Label created / info received, not fully processed yet.</p>
          </div>
          <div className="status-item">
            <strong>● Exception</strong>
            <p>Delay or delivery issue — contact the seller with the TN.</p>
          </div>
          <div className="status-item">
            <strong>● Customs hold</strong>
            <p>Common on China→US marketplace orders; often clears in days.</p>
          </div>
        </div>
        <p className="note">
          Tip: Marketplace shoppers (Shein, Temu, TikTok Shop) should contact the
          store first for claims, reroutes, or missing parcels — they hold the
          shipping contract with the carrier.
        </p>
      </div>
    </main>
  );
}
