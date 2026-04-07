import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Modal } from "./Modal";
import { PasswordResetContent } from "./PasswordResetContent";

// ---- Ícones SVG inline (substitui Bootstrap Icons) ----

function EnvelopeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

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

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// -------------------------------------------------------

export default function LoginForm() {
  const [showModal, setShowModal] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Digite um e-mail com formato válido.");
      return;
    }

    try {
      const user = await login(email, password);

      if (user.Flag === true) {
        navigate("/vitalitas/user/resetpassword");
        return;
      }

      const roleRoutes: Record<number, string> = {
        1: "/user/instrutor",
        2: "/user/aluno",
        3: "/user/gestor",
        4: "/user/admin",
      };

      navigate(roleRoutes[user.Tipo]);
    } catch (err) {
      setPasswordError("Email ou senha inválidos.");
    }
  }

  return (
    <>
      {/* form-wrapper-4k: max-width, gap e padding maiores em 4K via LoginPage.css */}
      <div className="form-wrapper-4k relative z-10 flex w-full max-w-[448px] flex-col gap-10 px-10 py-6">

        {/* Header */}
        <div className="flex flex-col gap-4">
          <h1 className="login-title w-full text-center font-extrabold tracking-[-1.2px] text-[#18181b]">
            Conecte-se
          </h1>
          <p className="login-subtitle-4k w-full text-center text-lg font-light text-[#71717b]">
            Faça login com seu e-mail para continuar
          </p>
        </div>

        {/* Formulário */}
        <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-6">

          {/* Campo Email */}
          <div className="flex flex-col gap-1">
            <div className={`field-4k relative flex h-[60px] w-full items-center rounded-[14px] border-2 bg-white shadow-sm transition-colors focus-within:border-[#18181b] ${emailError ? "border-[#ee2b47]" : "border-[#e4e4e7]"}`}>
              {/* Ícone envelope — SVG inline, sem Bootstrap */}
              <span className="field-icon-4k pointer-events-none absolute left-4 text-[#18181b] opacity-40">
                <EnvelopeIcon />
              </span>
              <input
                type="email"
                id="inputEmail"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="field-input-4k peer h-full w-full rounded-[14px] border-none bg-transparent pb-3 pl-12 pr-4 pt-5 text-base text-[#18181b] outline-none"
              />
              <label
                htmlFor="inputEmail"
                className="field-label-4k pointer-events-none absolute left-12 top-1/2 -translate-y-1/2 bg-white px-1 text-base font-medium text-[#18181b]/50 transition-all
                  peer-focus:top-0 peer-focus:text-[13px] peer-focus:text-[#71717b]
                  peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[13px] peer-[:not(:placeholder-shown)]:text-[#71717b]"
              >
                E-mail
              </label>
            </div>
            {emailError && <p className="pl-1 text-[13px] text-[#ee2b47]">{emailError}</p>}
          </div>

          {/* Campo Senha */}
          <div className="flex flex-col gap-1">
            <div className={`field-4k relative flex h-[60px] w-full items-center rounded-[14px] border-2 bg-white shadow-sm transition-colors focus-within:border-[#18181b] ${passwordError ? "border-[#ee2b47]" : "border-[#e4e4e7]"}`}>
              {/* Ícone cadeado — SVG inline, sem Bootstrap */}
              <span className="field-icon-4k pointer-events-none absolute left-4 text-[#18181b] opacity-40">
                <LockIcon />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                id="inputSenha"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="field-input-4k peer h-full w-full rounded-[14px] border-none bg-transparent pb-3 pl-12 pr-12 pt-5 text-base text-[#18181b] outline-none"
              />
              <label
                htmlFor="inputSenha"
                className="field-label-4k pointer-events-none absolute left-12 top-1/2 -translate-y-1/2 bg-white px-1 text-base font-medium text-[#18181b]/50 transition-all
                  peer-focus:top-0 peer-focus:text-[13px] peer-focus:text-[#71717b]
                  peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[13px] peer-[:not(:placeholder-shown)]:text-[#71717b]"
              >
                Senha
              </label>
              {/* Ícone olho — SVG inline, sem Bootstrap */}
              <button
                type="button"
                tabIndex={-1}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                onClick={() => setShowPassword(!showPassword)}
                className="field-eye-4k absolute right-3 flex items-center p-1 text-[#18181b]/70 transition-opacity hover:text-[#18181b]"
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
            {passwordError && <p className="pl-1 text-[13px] text-[#ee2b47]">{passwordError}</p>}
          </div>

          {/* Lembrar-me + Esqueceu a senha */}
          <div className="field-options-4k flex items-center justify-between">
            <div
              role="checkbox"
              aria-checked={rememberMe}
              tabIndex={0}
              onClick={() => setRememberMe(!rememberMe)}
              onKeyDown={(e) => e.key === " " && setRememberMe(!rememberMe)}
              className="flex cursor-pointer select-none items-center gap-2"
            >
              {/* Checkbox com ícone SVG inline */}
              <span className={`checkbox-4k flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${rememberMe ? "border-[#18181b] bg-[#18181b] text-white" : "border-[#d4d4d8] bg-white"}`}>
                {rememberMe && <CheckIcon />}
              </span>
              <span className="font-medium text-[#52525c]">Lembrar-me</span>
            </div>

            {/*
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="font-medium text-[#52525c] transition-colors hover:text-[#18181b]"
            >
              Esqueceu sua senha?
            </button>
            */}
          </div>
          {/* Botão Login */}

          <button
            type="submit"
            className="login-btn-4k h-[60px] w-full rounded-[14px] bg-[#ee2b47] text-lg font-bold tracking-wide text-white
              shadow-[0px_10px_15px_0px_rgba(238,43,71,0.3),0px_4px_6px_0px_rgba(238,43,71,0.3)]
              transition-all hover:-translate-y-px hover:opacity-90 active:translate-y-0 active:opacity-100"
          >
            LOGIN
          </button>
        </form>
      </div>

      {/* Modal de Alteração de Senha */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <PasswordResetContent onClose={() => setShowModal(false)} />
      </Modal>
    </>
  );
}
