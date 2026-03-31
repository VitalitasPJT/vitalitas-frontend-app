import imgImg1 from "../../assets/icons/letter.png";
import imgImg2 from "../../assets/icons/lock.png";
import imgImg3 from "../../assets/icons/eye.png";

export function EmailField() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="div">
      <div className="absolute bg-white h-[60px] left-0 rounded-[14px] top-0 w-[448px]" data-name="input">
        <div className="content-stretch flex items-center overflow-clip pb-[12px] pl-[48px] pr-[16px] pt-[20px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(24,24,27,0.5)] whitespace-nowrap">{` `}</p>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      </div>
      <div className="absolute content-stretch flex h-[60px] items-center left-0 pl-[16px] top-0 w-[36px]" data-name="Container">
        <div className="opacity-40 relative shrink-0 size-[20px]" data-name="img">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg1} />
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex h-[20px] items-start left-[40px] px-[8px] top-[20px] w-[55.906px]" data-name="label">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#71717b] text-[14px] whitespace-nowrap">E-mail</p>
      </div>
    </div>
  );
}

export function PasswordField() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="div">
      <div className="absolute bg-white h-[60px] left-0 rounded-[14px] top-0 w-[448px]" data-name="input">
        <div className="content-stretch flex items-center overflow-clip pb-[12px] pt-[20px] px-[48px] relative rounded-[inherit] size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(24,24,27,0.5)] whitespace-nowrap">{` `}</p>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#e4e4e7] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      </div>
      <div className="absolute content-stretch flex h-[60px] items-center left-0 pl-[16px] top-0 w-[36px]" data-name="Container">
        <div className="opacity-40 relative shrink-0 size-[20px]" data-name="img">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg2} />
        </div>
      </div>
      <div className="absolute content-stretch flex h-[60px] items-center left-[412px] rounded-br-[14px] rounded-tr-[14px] top-0 w-[36px]" data-name="button">
        <div className="opacity-70 relative shrink-0 size-[20px]" data-name="img">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg3} />
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex h-[20px] items-start left-[40px] px-[8px] top-[20px] w-[54.688px]" data-name="label">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#71717b] text-[14px] whitespace-nowrap">Senha</p>
      </div>
    </div>
  );
}
