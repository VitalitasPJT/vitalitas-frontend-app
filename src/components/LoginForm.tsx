import { useState } from "react";
import "./LoginForm.css";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="d-flex flex-column">

      {/* Email */}
      <div className="form-group m-2">
        <label htmlFor="inputEmail" className="">Email</label>
        <div className="input-group border border-black border-opacity-75 rounded-2">
          <span className="input-group-text bg-white">
            <i className="bi bi-person"></i>
          </span>

          <input
            type="email"
            className="form-control border-start-0 border-end-0"
            id="inputEmail"
            aria-describedby="emailHelp"
            placeholder="Digite seu e-mail..."
          />
        </div>
      </div>

      {/* Senha */}
      <div className="form-group m-2">
        <label htmlFor="inputSenha" className="">Senha</label>
        <div className="input-group border border-dark border-opacity-75 rounded-2">
          <span className="input-group-text bg-white">
            <i className="bi bi-key"></i>
          </span>

          <input
            type={showPassword ? "text" : "password"}
            className="form-control border-start-0 border-end-0"
            id="inputSenha"
            placeholder="Digite sua senha..."
          />
          <button
            type="button"
            className="btn btn-sm"
            onClick={() => setShowPassword(!showPassword)}
          >
            <i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
          </button>
        </div>
      </div>

      {/* Esqueceu a senha */}
      <div className="form-group d-flex justify-content-end m-2 p-1">
        <button type="button" className="w-100 btn btn-sm text-end">
          Esqueceu a senha?
        </button>
      </div>

      {/* Botão Acessar */}
      <div className="form-check d-flex justify-content-center p-2 font-button">
        <button type="submit" className="btn btn-danger m-2 p-2 w-50">
          Login
        </button>
      </div>

    </form>
  );
}
