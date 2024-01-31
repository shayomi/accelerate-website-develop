import HomeHero from "@/components/custom/home/HomeHero";
import HomeStatsCard from "@/components/custom/home/HomeStatsCard";
import HomeOverview from "@/components/custom/home/HomeOverview";
import HomeAbout from "@/components/custom/home/HomeAbout";
import HomeBenefits from "@/components/custom/home/HomeBenefits";
import HomeTeam from "@/components/custom/home/HomeTeam";
import HomeNewsInsight from "@/components/custom/home/HomeNewsInsight";
import HomePartners from "@/components/custom/home/HomePartners";
import HomeContact from "@/components/custom/home/HomeContact";
import HomeFounders from "@/components/custom/home/HomeFounders";
import HomeTimeline from "@/components/custom/home/HomeTimeline";

const SECTIONS = [
  { Component: HomeHero, className: "z-10 relative" },
  { Component: HomeStatsCard, className: "-mt-24 z-50 relative" },
  { Component: HomeOverview, className: "mt-24 xl:mt-28" },
  { Component: HomeAbout, className: "mt-10" },
  { Component: HomeBenefits, className: "mt-20 sm:mt-28" },
  { Component: HomeTeam, className: "sm:mt-10" },
  { Component: HomeFounders, className: "mt-28" },
  { Component: HomeTimeline, className: "mt-28" },
  { Component: HomeNewsInsight, className: "sm:mt-10 xl:mt-16" },
  { Component: HomePartners, className: "mt-28" },
  { Component: HomeContact, className: "mt-28" },
];

export default function Home() {
  return (
    <main className="pb-20">
      {SECTIONS.map(({ Component, className }, index) => (
        <section key={index} className={className}>
          <Component />
        </section>
      ))}
    </main>
  );
}
