import { useState } from "react";
import type { FormEvent } from "react";
import "./LoginForm.css";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState<{ email?: string; senha?: string; servidor?: string }>({});
  const [loading, setLoading] = useState(false);

  function validarEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  async function validarSenha(senha: string): Promise<string[]> {
    const response = await fetch("https://sua-api.com/validar-senha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ senha })
    });

    const data = await response.json();
    return response.ok ? [] : data.erros || ["Erro ao validar a senha."];
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    let errosTemp: { email?: string; senha?: string; servidor?: string } = {};

    if (!email) errosTemp.email = "O e-mail é obrigatório.";
    else if (!validarEmail(email)) errosTemp.email = "Formato de e-mail inválido.";

    if (!senha) errosTemp.senha = "A senha é obrigatória.";
    else {
      const falhasSenha = await validarSenha(senha);
      if (falhasSenha.length > 0) errosTemp.senha = falhasSenha.join(" ");
    }

    if (Object.keys(errosTemp).length > 0) {
      setErros(errosTemp);
      return;
    }

    setErros({});
    setLoading(true);

    try {
      const resposta = await fetch("https://sua-api.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha })
      });

      const data = await resposta.json();

      if (!resposta.ok) {
        setErros({ servidor: data.mensagem || "Erro ao fazer login." });
      } else {
        console.log("Logado:", data);
        alert("Login realizado com sucesso!");
      }
    } catch (erro) {
      setErros({ servidor: "Erro ao conectar ao servidor." });
    }

    setLoading(false);
  }

  return (
    <form className="m-2 d-flex flex-column justify-contents-between w-75 mx-auto"
          onSubmit={handleSubmit}>

      {/* Email */}
      <div className="form-group m-2 pt-2">
        <label htmlFor="inputEmail">Email</label>

        <div className="input-group border border-black rounded-2">
          <span className="input-group-text bg-white p-2">
            <i className="bi bi-envelope"></i>
          </span>

          <input
            type="email"
            className="form-control border-0 p-2"
            id="inputEmail"
            name="email"
            placeholder="Digite seu e-mail..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              outline: "none",
              border: "none",
              boxShadow: "0 1px 6px 0 rgba(0,0,0,0.5)",
            }}
          />
        </div>

        {erros.email && (
          <small className="text-danger">{erros.email}</small>
        )}
      </div>

      {/* Senha */}
      <div className="form-group m-2">
        <label htmlFor="inputSenha">Senha</label>

        <div className="input-group border border-dark rounded-2">
          <span className="input-group-text bg-white p-2">
            <i className="bi bi-key"></i>
          </span>

          <input
            type={showPassword ? "text" : "password"}
            className="form-control p-2"
            id="inputSenha"
            placeholder="Digite sua senha..."
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            style={{
              outline: "none",
              border: "none",
              boxShadow: "0 1px 6px 0 rgba(0,0,0,0.5)",
            }}
          />

          <button
            type="button"
            className="btn btn-sm"
            onClick={() => setShowPassword(!showPassword)}
          >
            <i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
          </button>
        </div>

        {erros.senha && (
          <small className="text-danger">{erros.senha}</small>
        )}
      </div>

      {/* Erro do servidor */}
      {erros.servidor && (
        <div className="m-2">
          <small className="text-danger">{erros.servidor}</small>
        </div>
      )}

      {/* Esqueceu a senha */}
      <div className="d-flex justify-content-end m-2">
        <button type="button" className="btn btn-sm text-muted">
          Esqueceu a senha?
        </button>
      </div>

      {/* Botão Login */}
      <div className="form-check m-2 p-0 d-flex justify-content-center">
        <button
          type="submit"
          className="btn btn-danger m-2 p-2 w-50"
          disabled={loading}
        >
          {loading ? "Aguarde..." : "Login"}
        </button>
      </div>

    </form>
  );
}