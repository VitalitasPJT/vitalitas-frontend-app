import imgImg from "@/shared/assets/imgs/academia.png";
import WelcomeSection from "./WelcomeSection";

function BackgroundImage() {
  return (
    <div className="absolute inset-0 opacity-60">
      <img
        alt=""
        src={imgImg}
        className="h-full w-full object-cover pointer-events-none"
      />
    </div>
  );
}

function GradientOverlay() {
  return (
    <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] via-transparent to-transparent" />
  );
}

function ContentContainer() {
  return (
    // left-content-4k: padding e gap maiores em 4K via LoginPage.css
    <div className="left-content-4k absolute inset-0 flex flex-col justify-end gap-8 px-12 pb-12">
      <WelcomeSection />
    </div>
  );
}

export default function LeftPanel() {
  return (
    <div className="left-panel-visible relative h-full flex-1 overflow-hidden bg-[#18181b]">
      <BackgroundImage />
      <GradientOverlay />
      <ContentContainer />
    </div>
  );
}
