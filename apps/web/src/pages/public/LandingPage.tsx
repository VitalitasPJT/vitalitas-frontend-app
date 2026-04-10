
import { Header } from "../../components/landing/Header";
import { Footer } from "../../components/landing/Footer";
import { HeroSection } from "../../components/landing/HeroSection";
import { ManagerSection } from "../../components/landing/ManagerSection";
import { StudentSection } from "../../components/landing/StudentSection";
import { WhyChooseSection } from "../../components/landing/WhyChooseSection";
{/*import { KnowYourStudentsSection } from "../../components/landing/KnowYourStudentsSection";*/}
import { GetStartedSection } from "../../components/landing/GetStartedSection";
import { AboutSection } from "../../components/landing/AboutSection";
import { ProductShowcaseSection } from "../../components/landing/ProductShowcaseSection";
import { ContactSection } from "../../components/landing/ContactSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ManagerSection />
      <StudentSection />
      <ProductShowcaseSection />
      <WhyChooseSection />
      <AboutSection />
      {/* <KnowYourStudentsSection /> */}
      <ContactSection />
      <GetStartedSection />
      <Footer />
    </div>
  );
}