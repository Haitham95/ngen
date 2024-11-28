import HomepageHero from "@/components/pages/Home/Hero";
import HomepageAboutSection from "@/components/pages/Home/AboutSection";
import HomepageNgenForSection from "@/components/pages/Home/NgenForSection";
import HomepageTracksSection from "@/components/pages/Home/TracksSection";

export default function Home() {
  return (
    <main>
      <HomepageHero />
      <HomepageAboutSection />
      <HomepageNgenForSection />
      <HomepageTracksSection />
    </main>
  );
}
