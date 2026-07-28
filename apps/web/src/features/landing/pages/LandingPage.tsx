import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { ManagerSection } from "../components/ManagerSection";
import { StudentSection } from "../components/StudentSection";
import { WhyChooseSection } from "../components/WhyChooseSection";
import { GetStartedSection } from "../components/GetStartedSection";
import { AboutSection } from "../components/AboutSection";
import { ProductShowcaseSection } from "../components/ProductShowcaseSection";
import { ContactSection } from "../components/ContactSection";
import { ThemeToggle } from "@/shared/components/ui/TemasToggle";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] transition-colors duration-300">
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

      {/* Botão flutuante de tema */}
      <ThemeToggle variant="float" />
    </div>
  );
}
