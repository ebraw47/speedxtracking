import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "How to Track",
  description:
    "How to track a SpeedX package — find your tracking number, enter it, and read the status timeline.",
};

export default function HowToTrackPage() {
  return (
    <main className="page-main">
      <PageHero
        title="How to track a SpeedX package"
        lead="Enter your SpeedX tracking number and follow these steps to check live delivery status."
      />
      <div className="container">
        <div className="steps">
          <article className="step">
            <div>
              <h3>Find your SpeedX tracking number</h3>
              <p>
                Check your seller email, Shein / Temu / TikTok Shop order page,
                or shipping notification after dispatch.
              </p>
            </div>
          </article>
          <article className="step">
            <div>
              <h3>Enter the tracking number</h3>
              <p>
                Copy the ID exactly and paste it into the tracking box on the{" "}
                <Link href="/">home page</Link> — no spaces or missing
                characters.
              </p>
            </div>
          </article>
          <article className="step">
            <div>
              <h3>Click Track</h3>
              <p>
                Open the latest status, location updates, and estimated delivery
                progress for your parcel.
              </p>
            </div>
          </article>
          <article className="step">
            <div>
              <h3>Read the status timeline</h3>
              <p>
                In Transit, Out for Delivery, Delivered, Pending, or Exception —
                know what each scan usually means. See{" "}
                <Link href="/status">status meanings</Link>.
              </p>
            </div>
          </article>
        </div>
        <p className="card-link" style={{ marginTop: "1.5rem" }}>
          <Link href="/">Track a package now →</Link>
        </p>
      </div>
    </main>
  );
}
