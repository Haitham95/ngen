import HomepageHero from "@/components/pages/Home/Hero";
import HomepageAboutSection from "@/components/pages/Home/AboutSection";
import HomepageNgenWhySection from "@/components/pages/Home/NgenWhySection";
import HomepageTracksSection from "@/components/pages/Home/TracksSection";
import HomepageNgenForSection from "@/components/pages/Home/NgenForSection";

export default function Home() {
  return (
    <main>
      <HomepageHero />
      <HomepageAboutSection />
      <HomepageNgenWhySection />
      <HomepageTracksSection />
      <HomepageNgenForSection />
    </main>
  );
}
