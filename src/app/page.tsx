import type { Metadata } from "next";
import TrackingHero from "@/components/TrackingHero";
import HomeSections from "@/components/sections/HomeSections";

export const metadata: Metadata = {
  title: "Track Your Package Online",
  description:
    "Track your SpeedX package online. Check delivery status, coverage, and delivery progress for domestic and international parcels.",
};

export default function HomePage() {
  return (
    <main id="top">
      <TrackingHero>
        <HomeSections />
      </TrackingHero>
    </main>
  );
}
