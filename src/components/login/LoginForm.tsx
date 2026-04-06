import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import ModalRecuperarSenha from "../ModalRecuperarSenha";

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

      if (user.SenhaFlag === false) {
        navigate("/vitalitas/user/resetpassword");
        return;
      }

      const roleRoutes: Record<string, string> = {
        Aluno: "/user/aluno",
        Administrador: "/user/admin",
        Professor: "/user/professor",
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
          {/* login-subtitle-4k: font-size maior em 4K */}
          <p className="login-subtitle-4k w-full text-center text-lg font-light text-[#71717b]">
            Faça login com seu e-mail para continuar
          </p>
        </div>

        {/* Formulário */}
        <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-6">

          {/* Campo Email */}
          <div className="flex flex-col gap-1">
            {/* field-4k: altura e border-radius maiores em 4K */}
            <div className={`field-4k relative flex h-[60px] w-full items-center rounded-[14px] border-2 bg-white shadow-sm transition-colors focus-within:border-[#18181b] ${emailError ? "border-[#ee2b47]" : "border-[#e4e4e7]"}`}>
              {/* field-icon-4k: tamanho e posição maiores em 4K */}
              <span className="field-icon-4k pointer-events-none absolute left-4 opacity-40">
                <i className="bi bi-envelope text-base text-[#18181b]" />
              </span>
              {/* field-input-4k: font-size e padding maiores em 4K */}
              <input
                type="email"
                id="inputEmail"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="field-input-4k peer h-full w-full rounded-[14px] border-none bg-transparent pb-3 pl-12 pr-4 pt-5 text-base text-[#18181b] outline-none"
              />
              {/* field-label-4k: font-size e posição maiores em 4K */}
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
              <span className="field-icon-4k pointer-events-none absolute left-4 opacity-40">
                <i className="bi bi-lock text-base text-[#18181b]" />
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
              {/* field-eye-4k: botão olho maior e reposicionado em 4K */}
              <button
                type="button"
                tabIndex={-1}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                onClick={() => setShowPassword(!showPassword)}
                className="field-eye-4k absolute right-3 p-1 text-lg text-[#18181b]/70 transition-opacity hover:text-[#18181b]"
              >
                <i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"} />
              </button>
            </div>
            {passwordError && <p className="pl-1 text-[13px] text-[#ee2b47]">{passwordError}</p>}
          </div>

          {/* Lembrar-me + Esqueceu a senha — field-options-4k: textos e checkbox maiores em 4K */}
          <div className="field-options-4k flex items-center justify-between">
            <div
              role="checkbox"
              aria-checked={rememberMe}
              tabIndex={0}
              onClick={() => setRememberMe(!rememberMe)}
              onKeyDown={(e) => e.key === " " && setRememberMe(!rememberMe)}
              className="flex cursor-pointer select-none items-center gap-2"
            >
              {/* checkbox-4k: dimensão maior em 4K */}
              <span className={`checkbox-4k flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${rememberMe ? "border-[#18181b] bg-[#18181b] text-white" : "border-[#d4d4d8] bg-white"}`}>
                {rememberMe && <i className="bi bi-check text-xs" />}
              </span>
              <span className="font-medium text-[#52525c]">Lembrar-me</span>
            </div>

            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="font-medium text-[#52525c] transition-colors hover:text-[#18181b]"
            >
              Esqueceu sua senha?
            </button>
          </div>

          {/* Botão Login — login-btn-4k: altura, font e border-radius maiores em 4K */}
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

      {showModal && (
        <ModalRecuperarSenha show={showModal} onClose={() => setShowModal(false)} />
      )}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet"></link>
    </>
  );
}
