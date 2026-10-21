import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "SpeedX tracking technology and delivery innovation — AI POD, geolocation, driver apps, and open APIs.",
};

export default function TechnologyPage() {
  return (
    <main className="page-main">
      <PageHero
        title="SpeedX tracking technology and delivery innovation"
        lead="Where speed meets tech-fueled innovation for the future of ecommerce delivery."
      />
      <div className="container">
        <ul className="tech-list">
          <li>Pioneering AI technology for proof of delivery</li>
          <li>Geolocation verification for quality control</li>
          <li>Real-time smart POD photo detection</li>
          <li>
            Driver application and management system for full operational
            control
          </li>
          <li>Fast, seamless plug-and-play integration through open APIs</li>
          <li>
            ML model trained on 50M+ POD photos — detecting unqualified POD in
            real time with over 90% accuracy
          </li>
        </ul>
      </div>
    </main>
  );
}
