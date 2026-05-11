import { useState } from "react";

type InputFieldProps = {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
  error?: string;
  isPassword?: boolean;
};

function EyeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

export function InputField({
  id,
  label,
  type = "text",
  value,
  onChange,
  icon,
  error,
  isPassword = false
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = isPassword
    ? (showPassword ? "text" : "password")
    : type;

  return (
    <div className="flex flex-col gap-1">
      <div className={`relative flex h-[60px] w-full items-center rounded-[14px] border-2 bg-white shadow-sm transition-colors focus-within:border-[#18181b] ${error ? "border-[#ee2b47]" : "border-[#e4e4e7]"}`}>

        <span className="absolute left-4 opacity-40">
          {icon}
        </span>

        <input
          type={inputType}
          id={id}
          placeholder=" "
          value={value}
          onChange={onChange}
          className="peer h-full w-full rounded-[14px] bg-transparent pb-3 pl-12 pr-12 pt-5 outline-none"
        />

        <label
          htmlFor={id}
          className="pointer-events-none absolute left-12 top-1/2 -translate-y-1/2 bg-white px-1 text-base text-[#18181b]/50 transition-all
          peer-focus:top-0 peer-focus:text-[13px]
          peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[13px]"
        >
          {label}
        </label>

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3"
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        )}
      </div>

      {error && <p className="text-[13px] text-[#ee2b47] cursor-pointer">{error}</p>}
    </div>
  );
}