import "./LoginForm.css";
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
      <div className="login-form-wrapper">
        {/* Header */}
        <div className="login-form-header">
          <h1 className="login-title">Conecte-se</h1>
          <p className="login-subtitle">Faça login com seu e-mail para continuar</p>
        </div>

        {/* Form */}
        <form noValidate onSubmit={handleSubmit} className="login-fields">

          {/* Email */}
          <div className="field-wrapper">
            <div className={`field-input-group ${emailError ? "field-error" : ""}`}>
              <span className="field-icon">
                <i className="bi bi-envelope"></i>
              </span>
              <input
                type="email"
                id="inputEmail"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="field-input"
                autoComplete="email"
              />
              <label htmlFor="inputEmail" className="field-label">E-mail</label>
            </div>
            {emailError && <p className="errorMessage">{emailError}</p>}
          </div>

          {/* Senha */}
          <div className="field-wrapper">
            <div className={`field-input-group ${passwordError ? "field-error" : ""}`}>
              <span className="field-icon">
                <i className="bi bi-lock"></i>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                id="inputSenha"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="field-input"
                autoComplete="current-password"
              />
              <label htmlFor="inputSenha" className="field-label">Senha</label>
              <button
                type="button"
                className="field-eye-btn"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                <i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
              </button>
            </div>
            {passwordError && <p className="errorMessage">{passwordError}</p>}
          </div>

          {/* Options row */}
          <div className="login-options">
            <label className="remember-me">
              <div
                className={`remember-checkbox ${rememberMe ? "checked" : ""}`}
                onClick={() => setRememberMe(!rememberMe)}
                role="checkbox"
                aria-checked={rememberMe}
                tabIndex={0}
                onKeyDown={(e) => e.key === " " && setRememberMe(!rememberMe)}
              >
                {rememberMe && <i className="bi bi-check"></i>}
              </div>
              <span>Lembrar-me</span>
            </label>

            <button
              type="button"
              className="forgot-password-btn"
              onClick={() => setShowModal(true)}
            >
              Esqueceu sua senha?
            </button>
          </div>

          {/* Submit */}
          <button type="submit" className="login-btn">
            LOGIN
          </button>
        </form>

        {/* Sign up prompt */}
        <p className="signup-prompt">
          Ainda não tem uma conta?{" "}
          <span className="signup-link">Cadastre-se</span>
        </p>
      </div>

      {showModal && (
        <ModalRecuperarSenha
          show={showModal}
          onClose={() => setShowModal(false)}
        />
      )}

    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet"></link>
    </>
  );
}
