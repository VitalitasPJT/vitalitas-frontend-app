import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Check, Loader2 } from "lucide-react";
import { useAuth } from "@/shared/hooks/useAuth";
import { InputField } from "@/shared/components/inputs/InputField";
import { RoleRoutes } from "@/shared/constants/Roles";
import { PasswordRecoverModal } from "./PasswordRecoverModal";

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isRecoverModalOpen, setIsRecoverModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canSubmit = email.trim() !== "" && password.trim() !== "" && !isSubmitting;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Digite um e-mail com formato válido.");
      return;
    }

    setIsSubmitting(true);
    try {
      const user = await login(email, password, rememberMe);

      if (user.Flag === true) {
        navigate("/vitalitas/user/resetpassword");
        return;
      }

      const destination = RoleRoutes[user.TipoUsuario];
      if (!destination) {
        setPasswordError(`Perfil "${user.TipoUsuario}" não tem rota configurada.`);
        return;
      }

      navigate(destination);
    } catch {
      setPasswordError("Email ou senha inválidos.");
    } finally {
      setIsSubmitting(false);
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
          icon={<Mail/>}
          error={emailError}
          autoComplete="off"
        />

        <InputField
          id="inputSenha"
          label="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={<Lock/>}
          error={passwordError}
          isPassword
          autoComplete="off"
        />

        {/* Lembrar-me / Esqueceu a senha */}
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
              {rememberMe && <Check/>}
            </span>
            <span className="font-semibold text-[#52525c] dark:text-[#a1a1aa]">
              Lembrar-me
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsRecoverModalOpen(true)}
            className="font-semibold text-brand hover:text-brand-hover transition-colors cursor-pointer"
          >
            Esqueceu a senha?
          </button>
        </div>

        <button
          type="submit"
          disabled={!canSubmit}
          className={`login-btn-4k h-[60px] w-full rounded-[14px] bg-[#ee2b47] text-lg font-bold tracking-wide text-white
            shadow-[0px_10px_15px_0px_rgba(238,43,71,0.3),0px_4px_6px_0px_rgba(238,43,71,0.3)]
            transition-all hover:-translate-y-px hover:opacity-90 active:translate-y-0 active:opacity-100
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0
            flex items-center justify-center gap-2
            ${canSubmit ? "cursor-pointer" : ""}`}
        >
          {isSubmitting && <Loader2 size={20} className="animate-spin" />}
          {isSubmitting ? "ENTRANDO..." : "LOGIN"}
        </button>
      </form>

      <PasswordRecoverModal isOpen={isRecoverModalOpen} onClose={() => setIsRecoverModalOpen(false)} />
    </div>
  );
}
