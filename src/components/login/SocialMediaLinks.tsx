import svgPaths from "../../imports/svg-59b1zfc4li";
import { imgGroup } from "../../imports/svg-bn8zi";

function SocialIcon({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      // social-circle-4k: width/height maiores em 4K via LoginPage.css
      className="social-circle-4k relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full border border-white/20 shadow-md"
      />
      {/* social-svg-4k: SVG maior em 4K via LoginPage.css */}
      <span className="social-svg-4k relative z-10 flex h-[25px] w-[25px] shrink-0 items-center justify-center">
        {children}
      </span>
    </a>
  );
}

function InstagramIcon() {
  return (
    <SocialIcon label="Instagram">
      <svg fill="none" viewBox="0 0 20.8333 20.8333" width="25" height="25">
        <path d={svgPaths.p1d9ad980} fill="white" />
      </svg>
    </SocialIcon>
  );
}

function TwitterIcon() {
  return (
    <SocialIcon label="Twitter/X">
      <svg fill="none" viewBox="0 0 25 22.6571" width="25" height="25">
        <path d={svgPaths.p3116e900} fill="white" />
      </svg>
    </SocialIcon>
  );
}

function GmailIcon() {
  return (
    <SocialIcon label="Gmail">
      <svg fill="none" viewBox="0 0 20.8333 16.6667" width="25" height="25">
        <path d={svgPaths.p20ce2600} fill="white" />
      </svg>
    </SocialIcon>
  );
}

export default function SocialMediaLinks() {
  return (
    // social-row-4k: gap maior entre os círculos em 4K via LoginPage.css
    <div className="social-row-4k flex shrink-0 items-center gap-4">
      <InstagramIcon />
      <TwitterIcon />
      <GmailIcon />
    </div>
  );
}
