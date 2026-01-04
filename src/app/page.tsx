import AboutUsSection from "@/components/sections/home/about-section";
import HeroSection from "@/components/sections/home/hero-section";
import PortfolioSection from "@/components/sections/home/portfolio-section";
import ExperienceSection from "@/components/sections/home/services-2";
import StatsSection from "@/components/sections/home/stats";
import ReferencesSection from "@/components/testimonials";
import FooterSection from "@/components/footer";
import ContactSection from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutUsSection />
      <ExperienceSection />
      <PortfolioSection />
      <StatsSection />
      <ReferencesSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
