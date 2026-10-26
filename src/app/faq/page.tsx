import type { Metadata } from "next";
import FaqContent from "@/components/sections/FaqContent";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common SpeedX tracking questions — delivery timelines, contact methods, weekends, and package delays.",
};

export default function FaqPage() {
  return (
    <main className="page-main">
      <FaqContent headingLevel="h1" />
    </main>
  );
}
