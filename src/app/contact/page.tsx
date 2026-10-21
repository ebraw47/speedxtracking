import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact Support",
  description:
    "SpeedX customer service and contact information — hotline, email, chatbot, and mailing address.",
};

export default function ContactPage() {
  return (
    <main className="page-main">
      <PageHero
        title="SpeedX customer service and contact information"
        lead="Official SpeedX details for shoppers who need carrier support. Prefer the seller for marketplace order claims when possible."
      />
      <div className="container">
        <div className="table-wrap" style={{ marginBottom: "1rem" }}>
          <table>
            <thead>
              <tr>
                <th>Detail</th>
                <th>Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Headquarters / Ops Facility</td>
                <td>
                  147-03 182nd St, Springfield Gardens (Queens), NY 11413 (near
                  JFK Airport), United States
                </td>
              </tr>
              <tr>
                <td>Official Website</td>
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
              <tr>
                <td>Customer Service Hotline</td>
                <td>
                  <a href="tel:+19496676769">+1-949-667-6769</a> (Mon–Fri 9 AM –
                  9 PM, Sat–Sun 11 AM – 8 PM EST)
                  <br />
                  or <a href="tel:+18006584192">+1-800-658-4192</a>
                </td>
              </tr>
              <tr>
                <td>Support Email</td>
                <td>
                  <a href="mailto:speedxops@speedx.io">speedxops@speedx.io</a>
                  {" · "}
                  <a href="mailto:help@speedx.io">help@speedx.io</a>
                </td>
              </tr>
              <tr>
                <td>AI Chatbot</td>
                <td>Miles (8 AM – 8 PM ET via the official website)</td>
              </tr>
              <tr>
                <td>Mailing Address</td>
                <td>
                  3333 New Hyde Park Rd, Suite 316, New Hyde Park, NY 11042
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="status-grid">
          <div className="status-item">
            <strong>Facility pickups</strong>
            <p>
              SpeedX does <strong>not</strong> allow public walk-ins or facility
              pickups at their sorting centers.
            </p>
          </div>
          <div className="status-item">
            <strong>Before you call</strong>
            <p>
              Have your <strong>SPX</strong> tracking number ready. Street /
              apartment changes: Miles chatbot. City / state / ZIP or
              lost-damaged claims: contact the merchant first.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
