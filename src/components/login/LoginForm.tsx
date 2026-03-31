import { EmailField, PasswordField } from "./FormFields";

function FormHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[92px] items-start relative shrink-0 w-full" data-name="div">
      <div className="h-[48px] relative shrink-0 w-full" data-name="h1">
        <p className="-translate-x-1/2 absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[48px] left-[224.56px] not-italic text-[#18181b] text-[48px] text-center top-[-3px] tracking-[-1.2px] whitespace-nowrap">Conecte-se</p>
      </div>
      <div className="h-[28px] relative shrink-0 w-full" data-name="p">
        <p className="-translate-x-1/2 absolute font-['Inter:Light',sans-serif] font-light leading-[28px] left-[223.75px] not-italic text-[#71717b] text-[18px] text-center top-[-1px] whitespace-nowrap">Faça login com seu e-mail para continuar</p>
      </div>
    </div>
  );
}

function RememberMeCheckbox() {
  return (
    <div className="h-[20px] relative shrink-0 w-[105.453px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <div className="bg-white relative rounded-[4px] shrink-0 size-[20px]" data-name="button">
          <div aria-hidden="true" className="absolute border border-[#d4d4d8] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
        <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="label">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#52525c] text-[14px] whitespace-nowrap">Lembrar-me</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ForgotPasswordLink() {
  return (
    <div className="h-[20px] relative shrink-0 w-[132.047px]" data-name="a">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#52525c] text-[14px] whitespace-nowrap">Esqueceu sua senha?</p>
      </div>
    </div>
  );
}

function FormOptions() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="div">
      <RememberMeCheckbox />
      <ForgotPasswordLink />
    </div>
  );
}

function LoginButton() {
  return (
    <div className="bg-[#ee2b47] h-[60px] relative rounded-[14px] shadow-[0px_10px_15px_0px_rgba(238,43,71,0.3),0px_4px_6px_0px_rgba(238,43,71,0.3)] shrink-0 w-full" data-name="motion.button">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-[224.44px] not-italic text-[18px] text-center text-white top-[15px] whitespace-nowrap">LOGIN</p>
    </div>
  );
}

function FormFields() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[272px] items-start relative shrink-0 w-full" data-name="form">
      <EmailField />
      <PasswordField />
      <FormOptions />
      <LoginButton />
    </div>
  );
}

function SignUpPrompt() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="p">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[#71717b] text-[0px] text-center">
        <span className="leading-[20px] text-[14px]">{`Ainda não tem uma conta? `}</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] text-[#18181b] text-[14px]">Cadastre-se</span>
      </p>
    </div>
  );
}

export default function LoginForm() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] h-[464px] items-start left-1/2 top-1/2 w-[448px]" data-name="motion.div">
      <FormHeader />
      <FormFields />
      <SignUpPrompt />
    </div>
  );
}
