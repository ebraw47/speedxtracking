import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Overview",
  description:
    "Quick facts for SpeedX package tracking, coverage, and how to check your shipment status.",
};

export default function OverviewPage() {
  return (
    <main className="page-main">
      <PageHero
        title="SpeedX tracking overview"
        lead="Quick facts for SpeedX package tracking, coverage, and how to check your shipment status."
      />
      <div className="container">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Service Name</td>
                <td>SpeedX Tracking</td>
              </tr>
              <tr>
                <td>Purpose</td>
                <td>Check shipment status and delivery progress</td>
              </tr>
              <tr>
                <td>Required Info</td>
                <td>Valid SpeedX tracking number</td>
              </tr>
              <tr>
                <td>Coverage</td>
                <td>Domestic &amp; International (Global Tracking)</td>
              </tr>
              <tr>
                <td>Popular Use</td>
                <td>SpeedX tracking Shein orders</td>
              </tr>
              <tr>
                <td>Access Type</td>
                <td>Online tracking via tracking page</td>
              </tr>
              <tr>
                <td>Device Support</td>
                <td>Mobile, Tablet, Desktop</td>
              </tr>
              <tr>
                <td>Official company site</td>
                <td>
                  <a
                    href="https://speedx.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://speedx.io/
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
