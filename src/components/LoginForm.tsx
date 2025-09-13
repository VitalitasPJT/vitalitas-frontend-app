import { useState } from "react";
import "./LoginForm.css";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="d-flex flex-column w-100">
      {/* Email */}
      <div className="form-group mb-3">
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-person"></i>
          </span>
          <input
            type="email"
            className="form-control"
            placeholder="Digite seu e-mail..."
          />
        </div>
      </div>

      {/* Senha */}
      <div className="form-group mb-3">
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-key"></i>
          </span>
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            placeholder="Digite sua senha..."
          />
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => setShowPassword(!showPassword)}
          >
            <i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
          </button>
        </div>
      </div>

      {/* Botão Acessar */}
      <div className="d-grid mb-3 font-button">
        <button type="submit" className="btn btn-danger btn-lg">
          ACESSAR
        </button>
      </div>

      {/* Esqueceu a senha */}
      <div className="text-center">
        <button type="button" className="w-100 btn btn-secondary btn-sm">
          Esqueceu a senha?
        </button>
      </div>
    </form>
  );
}
