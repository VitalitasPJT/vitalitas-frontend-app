import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { InputField } from "../inputs/InputGenericoModerno";

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

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const roleRoutes: Record<string, string> = {
  Instrutor:     "/user/instrutor",
  Aluno:         "/user/aluno",
  Gestor:        "/user/gestor",
  Administrador: "/user/admin",
};

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

      const destination = roleRoutes[user.TipoUsuario];
      if (!destination) {
        setPasswordError(`Perfil "${user.TipoUsuario}" não tem rota configurada.`);
        return;
      }

      navigate(destination);
    } catch {
      setPasswordError("Email ou senha inválidos.");
    }
  }

  return (
    <div className="form-wrapper-4k relative z-10 flex w-full max-w-[448px] flex-col gap-10 px-10 py-6">

      {/* Header */}
      <div className="flex flex-col gap-4">
        <h1 className="login-title w-full text-center font-extrabold tracking-[-1.2px] text-[#18181b] dark:text-[#e4e4e7]">
          Conecte-se
        </h1>
        <p className="login-subtitle-4k w-full text-center text-lg font-light text-[#71717b] dark:text-[#71717a]">
          Faça login com seu e-mail para continuar
        </p>
      </div>

      {/* Formulário */}
      <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-6">

        <InputField
          id="inputEmail"
          label="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={<EnvelopeIcon />}
          error={emailError}
        />

        <InputField
          id="inputSenha"
          label="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={<LockIcon />}
          error={passwordError}
          isPassword
        />

        {/* Lembrar-me */}
        <div className="field-options-4k flex items-center justify-between">
          <div
            role="checkbox"
            aria-checked={rememberMe}
            tabIndex={0}
            onClick={() => setRememberMe(!rememberMe)}
            onKeyDown={(e) => e.key === " " && setRememberMe(!rememberMe)}
            className="flex cursor-pointer select-none items-center gap-2"
          >
            <span className={`
              checkbox-4k flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors
              ${rememberMe
                ? "border-[#18181b] dark:border-[#e4e4e7] bg-[#18181b] dark:bg-[#e4e4e7] text-white dark:text-[#18181b]"
                : "border-[#d4d4d8] dark:border-[rgba(255,255,255,0.2)] bg-white dark:bg-[#2c2c30]"}
            `}>
              {rememberMe && <CheckIcon />}
            </span>
            <span className="font-semibold text-[#52525c] dark:text-[#a1a1aa]">
              Lembrar-me
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="login-btn-4k h-[60px] w-full rounded-[14px] bg-[#ee2b47] text-lg font-bold tracking-wide text-white cursor-pointer
            shadow-[0px_10px_15px_0px_rgba(238,43,71,0.3),0px_4px_6px_0px_rgba(238,43,71,0.3)]
            transition-all hover:-translate-y-px hover:opacity-90 active:translate-y-0 active:opacity-100"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
}
