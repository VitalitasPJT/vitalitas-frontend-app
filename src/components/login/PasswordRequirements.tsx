function AlertIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EE2B47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FB2C36" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

interface RequirementItemProps {
  isValid: boolean;
  text: string;
}

function RequirementItem({ isValid, text }: RequirementItemProps) {
  return (
    // h-auto em vez de h-[20px] fixo: permite quebrar linha em telas muito pequenas
    // whitespace-nowrap removido: texto pode quebrar se necessário
    <div className="flex gap-3 items-start w-full">
      <div className={`relative rounded-full shrink-0 size-5 flex items-center justify-center mt-0.5 ${isValid ? 'bg-[#00c950]' : 'bg-[#ffe2e2]'}`}>
        {isValid ? <CheckIcon /> : <XIcon />}
      </div>
      <p className={`modal-req-text-4k font-['Inter'] leading-5 text-sm ${
        isValid ? 'font-medium text-[#008236]' : 'font-normal text-[#e7000b]'
      }`}>
        {text}
      </p>
    </div>
  );
}

interface PasswordRequirementsProps {
  password: string;
}

export function PasswordRequirements({ password }: PasswordRequirementsProps) {
  const hasMinLength = password.length >= 8;
  const hasUpperAndLower = /[A-Z]/.test(password) && /[a-z]/.test(password);
  const hasSpecialChar = /[#$%&@!?^*()_\-+=\[\]{};':"\\|,.<>\/]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  return (
    <div
      className="modal-req-4k rounded-2xl w-full"
      style={{ backgroundImage: "linear-gradient(160.675deg, rgb(249, 250, 251) 0%, rgb(243, 244, 246) 100%)" }}
    >
      <div className="flex flex-col gap-4 p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <AlertIcon />
          <p className="modal-req-title-4k font-['Inter'] font-semibold text-[#101828] text-sm">A senha deve ter:</p>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <RequirementItem isValid={hasMinLength} text="No mínimo 8 caracteres" />
          <RequirementItem isValid={hasUpperAndLower} text="Uma letra maiúscula e uma minúscula" />
          <RequirementItem isValid={hasSpecialChar} text="Um caractere especial (ex.: #,$,%,&,@)" />
          <RequirementItem isValid={hasNumber} text="Um número (ex.: 1,2,3)" />
        </div>
      </div>
    </div>
  );
}
