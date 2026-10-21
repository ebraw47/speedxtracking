import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Coverage",
  description:
    "SpeedX covers 43 states, Washington D.C., and Puerto Rico — powered by eight primary entry gateways.",
};

export default function CoveragePage() {
  return (
    <main className="page-main">
      <section className="coverage">
        <PageHero
          title="SpeedX U.S. delivery coverage and network"
          lead="SpeedX covers 43 states in the United States, along with Washington, D.C. and Puerto Rico — powered by eight primary entry gateways."
        />
        <div className="container">
          <div className="coverage-stats">
            <article className="coverage-stat">
              <strong>43</strong>
              <span>U.S. states covered</span>
            </article>
            <article className="coverage-stat">
              <strong>D.C. + PR</strong>
              <span>Washington, D.C. &amp; Puerto Rico</span>
            </article>
            <article className="coverage-stat">
              <strong>12,000+</strong>
              <span>ZIP codes (11,775–12,000+)</span>
            </article>
            <article className="coverage-stat">
              <strong>~175M</strong>
              <span>Customer reach · ~50% N.A. ecommerce</span>
            </article>
          </div>

          <figure className="coverage-map">
            <Image
              src="/images/us-coverage.svg"
              alt="SpeedX United States coverage map showing ATL, DFW, EWR, IAH, LAX, MIA, ORD, and SFO gateways"
              width={980}
              height={620}
            />
            <figcaption>
              Coverage map — glowing pins mark SpeedX primary entry gateways.
            </figcaption>
          </figure>

          <div className="gateway-board">
            <h3>Major gateways / hubs</h3>
            <div className="gateway-grid">
              <article className="gateway-card">
                <span>ATL</span>
                <p>Atlanta</p>
              </article>
              <article className="gateway-card">
                <span>DFW</span>
                <p>Dallas–Fort Worth</p>
              </article>
              <article className="gateway-card">
                <span>EWR</span>
                <p>Newark</p>
              </article>
              <article className="gateway-card">
                <span>IAH</span>
                <p>Houston</p>
              </article>
              <article className="gateway-card">
                <span>LAX</span>
                <p>Los Angeles</p>
              </article>
              <article className="gateway-card">
                <span>MIA</span>
                <p>Miami</p>
              </article>
              <article className="gateway-card">
                <span>ORD</span>
                <p>Chicago</p>
              </article>
              <article className="gateway-card">
                <span>SFO</span>
                <p>San Francisco</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
