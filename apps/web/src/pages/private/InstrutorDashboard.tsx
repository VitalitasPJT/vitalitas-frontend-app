import { useNavigate } from "react-router-dom";

export default function ProfessorDashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>🎓 Página do Professor</h1>
      <p>
        Você está logado como <strong>Professor</strong>.
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
