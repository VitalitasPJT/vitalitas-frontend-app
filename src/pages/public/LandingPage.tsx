
import { Header } from "../../components/landing/Header";
import { Footer } from "../../components/landing/Footer";
import { HeroSection } from "../../components/landing/HeroSection";
import { ManagerSection } from "../../components/landing/ManagerSection";
import { StudentSection } from "../../components/landing/StudentSection";
import { PricingSection } from "../../components/landing/PricingSection";
import { WhyChooseSection } from "../../components/landing/WhyChooseSection";
import { KnowYourStudentsSection } from "../../components/landing/KnowYourStudentsSection";
import { GetStartedSection } from "../../components/landing/GetStartedSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ManagerSection />
      <StudentSection />
      <PricingSection />
      <WhyChooseSection />
      <KnowYourStudentsSection />
      <GetStartedSection />
      <Footer />
    </div>
  );
}