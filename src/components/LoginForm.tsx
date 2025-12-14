import "./LoginForm.css";
import { useState } from "react";
import "./LoginForm.css";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import ModalRecuperarSenha from "./ModalRecuperarSenha";


export default function LoginForm() {
  const [showModal, setShowModal] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  async function handleSubmit(e: any) {
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

      const roleRoutes: any = {
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
    <form
      noValidate
      className="m-2 d-flex flex-column justify-contents-between w-75 mx-auto"
      onSubmit={handleSubmit}>

      <div className="d-flex flex-column gap-3 mt-4">

        {/* Email */}
        <div className="form-group m-2">
          <label htmlFor="inputEmail" className="fs-5">Email</label>

          <div className="input-group border border-black border-opacity-75 rounded-2">
            <span className="input-group-text bg-white">
              <i className="bi bi-person"></i>
            </span>

            <input
              type="email"
              className="form-control form-control-lg border-start-0 border-end-0"
              id="inputEmail"
              placeholder="Digite seu e-mail..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {emailError && (
            <p className="errorMessage small mt-1">{emailError}</p>
          )}
        </div>

        {/* Senha */}
        <div className="form-group m-2">
          <label htmlFor="inputSenha" className="fs-5">Senha</label>

          <div className="input-group border border-dark border-opacity-75 rounded-2">
            <span className="input-group-text bg-white">
              <i className="bi bi-key"></i>
            </span>

            <input
              type={showPassword ? "text" : "password"}
              className="form-control form-control-lg border-start-0 border-end-0"
              id="inputSenha"
              placeholder="Digite sua senha..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              className="btn btn-sm"
              onClick={() => setShowPassword(!showPassword)}
              >
              <i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
            </button>
          </div>

          {passwordError && (
            <p className="errorMessage small mt-1">{passwordError}</p>
          )}


          {/* Redefinir Senha */}
            <div className="d-flex justify-content-end mt-1 px-2">
              <span className="me-1 fw-semibold">
                Esqueceu sua senha?
              </span>

              <button
                type="button"
                className="btn btn-link p-0 text-info fw-bolder text-decoration-none"
                onClick={() => setShowModal(true)}>
                Recupere aqui
              </button>
            </div>
          </div>
        </div>

      {/* Botão Login*/}
      <div className="form-check m-2 p-0 d-flex justify-content-center">
        <button type="submit" className="btn btn-danger m-2 p-2 w-75 fw-semibold">
          Login
        </button>
      </div>
    </form>

    {/* MODAL FORA DO FORM */}
    {showModal && (
      <ModalRecuperarSenha
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    )}
  </>
);}