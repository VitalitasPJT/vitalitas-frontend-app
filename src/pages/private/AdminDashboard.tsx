import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>🎓 Página do Admin</h1>
      <p>
        Você está logado como <strong>Admin</strong>.
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
