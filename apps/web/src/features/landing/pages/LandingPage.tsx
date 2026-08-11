import "./LandingPage.css";
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
import { ThemeToggle } from "@/shared/components/ui/ThemeToggle";

export default function LandingPage() {
  return (
    // overflow-x-hidden: rede de segurança contra estouro horizontal.
    // Só no eixo X — diferente do login (overflow-hidden nos dois eixos),
    // a landing precisa rolar verticalmente.
    <div className="min-h-screen w-full overflow-x-hidden bg-surface transition-colors duration-300">
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
