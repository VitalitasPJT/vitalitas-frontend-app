import { Routes, Route } from "react-router-dom";

// Páginas públicas
import LandingPage from "../pages/public/LandingPage";
import LoginPage from "../pages/public/LoginPage";
import Sobre from "../pages/public/sobreNos";

// Dashboards
import AlunoDashboard from "../pages/private/AlunoDashboard";
import ProfessorDashboard from "../pages/private/ProfessorDashboard";
import AdminDashboard from "../pages/private/AdminDashboard";

// Outras páginas
import FirstAcess from "../pages/private/PasswordResetPage";
import ErrorPage from "../pages/public/ErrorPage";

// Guards
import { PrivateRoute } from "./PrivateRoute";
import { RoleRoute } from "./RoleRoute";

export default function AppRoutes() {
  return (
    <Routes>

      {/* ======================
         ROTAS PÚBLICAS
      ====================== */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/vitalitas/user/login" element={<LoginPage />} />

      {/* ======================
         ROTAS PRIVADAS (JWT)
      ====================== */}
      <Route
        path="/vitalitas/user/resetpassword"
        element={
          <PrivateRoute>
            <FirstAcess />
          </PrivateRoute>
        }
      />

      {/* ======================
         DASHBOARDS POR ROLE
      ====================== */}
      <Route
        path="/user/aluno"
        element={
          <RoleRoute allowedRoles={["Aluno"]}>
            <AlunoDashboard />
          </RoleRoute>
        }
      />

      <Route
        path="/user/professor"
        element={
          <RoleRoute allowedRoles={["Professor"]}>
            <ProfessorDashboard />
          </RoleRoute>
        }
      />

      <Route
        path="/user/admin"
        element={
          <RoleRoute allowedRoles={["Administrador"]}>
            <AdminDashboard />
          </RoleRoute>
        }
      />

      {/* ======================
         ERROS
      ====================== */}
      <Route path="/erro/:code" element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} />

    </Routes>
  );
}
