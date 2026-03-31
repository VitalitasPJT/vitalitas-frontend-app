import svgPaths from "../../imports/svg-59b1zfc4li";
import { imgGroup } from "../../imports/svg-bn8zi";

function InstagramIcon() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center left-0 p-px rounded-[33554400px] size-[56px] top-0" data-name="a">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <div className="relative shrink-0 size-[25px]" data-name="mdi:instagram">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.8333 20.8333">
              <path d={svgPaths.p1d9ad980} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TwitterIcon() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center left-[72px] p-px rounded-[33554400px] size-[56px] top-0" data-name="a">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <div className="relative shrink-0 size-[25px]" data-name="prime:twitter">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <div className="absolute contents inset-0" data-name="Group">
            <div className="absolute contents inset-0" data-name="Clip path group">
              <div className="absolute inset-[4.69%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-1.171px] mask-size-[25px_25px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 22.6571">
                  <g id="Group">
                    <path d={svgPaths.p3116e900} fill="var(--fill-0, white)" id="Vector" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GmailIcon() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center left-[144px] p-px rounded-[33554400px] size-[56px] top-0" data-name="a">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <div className="relative shrink-0 size-[25px]" data-name="mdi:gmail">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.8333 16.6667">
              <path d={svgPaths.p20ce2600} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SocialMediaLinks() {
  return (
    <div className="absolute h-[56px] left-[50px] top-[974px] w-[678px]" data-name="motion.div">
      <InstagramIcon />
      <TwitterIcon />
      <GmailIcon />
    </div>
  );
}
