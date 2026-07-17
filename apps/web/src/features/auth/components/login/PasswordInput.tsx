import { useState } from 'react';

interface PasswordInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: boolean;
}

function EyeOffIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#99A1AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#99A1AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function PasswordInput({ label, value, onChange, placeholder, error }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-2 w-full">
      <p className="modal-label-4k font-['Inter'] font-semibold text-[#364153] text-sm leading-5">
        {label}
      </p>

      <div className="modal-field-4k h-14 relative w-full">
        <div className={`h-full rounded-[14px] w-full ${error ? 'bg-white' : 'bg-transparent'}`}>
          <div className="flex items-center pl-4 pr-12 py-3.5 size-full">
            <input
              type={showPassword ? 'text' : 'password'}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              className="modal-input-4k font-['Inter'] font-normal w-full bg-transparent outline-none text-base text-[#101828] placeholder:text-[rgba(16,24,40,0.5)]"
            />
          </div>
          <div
            aria-hidden="true"
            className={`absolute border-2 inset-0 pointer-events-none rounded-[14px] ${
              error ? 'border-[#fb2c36]' : 'border-[#e5a4a7]'
            }`}
          />
        </div>

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute flex items-center justify-center right-4 top-1/2 -translate-y-1/2 cursor-pointer"
          aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
        >
          {showPassword ? <EyeIcon /> : <EyeOffIcon />}
        </button>
      </div>
    </div>
  );
}
