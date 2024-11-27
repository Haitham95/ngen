import HomepageHero from "@/components/Hero/HomepageHero";
import HomepageAboutSection from "@/components/Sections/HomepageAboutSection";
import HomepageNgenForSection from "@/components/Sections/HomepageNgenForSection";

export default function Home() {
  return (
    <main>
      <HomepageHero />
      <HomepageAboutSection />
      <HomepageNgenForSection />
    </main>
  );
}
