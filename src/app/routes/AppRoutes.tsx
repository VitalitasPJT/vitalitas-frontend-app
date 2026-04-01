import { Routes, Route } from "react-router-dom";

// Páginas públicas
import LandingPage from "../../pages/public/LandingPage";
import LoginPage from "../../pages/public/LoginPage";

// Dashboards
import AlunoDashboard from "../../pages/private/AlunoDashboard";
import ProfessorDashboard from "../../pages/private/ProfessorDashboard";
import GestorDashboard from "../../pages/private/DashboardGestor";

// Outras páginas
import FirstAcess from "../../pages/private/PasswordResetPage";
{/*import ErrorPage from "../../pages/public/ErrorPage"; */}

// Guards
import { PrivateRoute } from "./PrivateRoute";
import { RoleRoute } from "./RoleRoute";
import LogsPageGestor from "../../pages/private/LogsPageGestor";

export default function AppRoutes() {
  return (
    <Routes>

      {/* ======================
         ROTAS PÚBLICAS
      ====================== */}
      <Route path="/" element={<LandingPage />} />
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
          <RoleRoute allowedRoles={[2]}>
            <AlunoDashboard />
          </RoleRoute>
        }
      />

      <Route
        path="/user/professor"
        element={
          <RoleRoute allowedRoles={[1]}>
            <ProfessorDashboard />
          </RoleRoute>
        }
      />

      <Route
        path="/user/gestor"
        element={
          <RoleRoute allowedRoles={[3]}>
            <GestorDashboard />
          </RoleRoute>
        }
      />

      <Route
        path="/user/gestor/logs"
        element={<LogsPageGestor />}
      />

      {/* ======================
         ERROS
      ====================== 
      <Route path="/erro/:code" element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} /> */}

    </Routes>
  );
}