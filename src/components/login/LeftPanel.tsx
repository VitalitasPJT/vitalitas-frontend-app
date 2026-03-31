import imgImg from "../../assets/imgs/academia.png";
import WelcomeSection from "./WelcomeSection";
import SocialMediaLinks from "./SocialMediaLinks";

function BackgroundImage() {
  return (
    <div className="absolute h-[1080px] left-0 opacity-60 top-0 w-[960px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg} />
    </div>
  );
}

function GradientOverlay() {
  return <div className="absolute bg-gradient-to-t from-[#18181b] h-[1080px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0)] w-[960px]" data-name="Container" />;
}

function ContentContainer() {
  return (
    <div className="absolute h-[1080px] left-0 top-0 w-[960px]" data-name="Container">
      <WelcomeSection />
      <SocialMediaLinks />
    </div>
  );
}

export default function LeftPanel() {
  return (
    <div className="absolute bg-[#18181b] h-[1080px] left-0 overflow-clip top-0 w-[960px]" data-name="Container">
      <BackgroundImage />
      <GradientOverlay />
      <ContentContainer />
    </div>
  );
}
