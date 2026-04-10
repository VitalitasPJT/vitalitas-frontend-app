import { useNavigate } from "react-router-dom";

export default function AlunoDashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>🎓 Página do Aluno</h1>
      <p>
        Você está logado como <strong>Aluno</strong>.
      </p>

      <button
        onClick={() => navigate("/vitalitas/user/resetpassword")}
        className="btn btn-outline-danger mt-3"
      >
        Alterar senha
      </button>
    </div>
  );
}
