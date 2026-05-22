import { Routes, Route } from "react-router-dom";

// Páginas públicas
import LandingPage from "../../pages/public/LandingPage";
import LoginPage from "../../pages/public/LoginPage";

// Dashboards
import AlunoDashboard from "../../pages/private/AlunoDashboard";
import InstrutorDashboard from "../../pages/private/InstrutorDashboard";

// Páginas Gestor
import GestorDashboard from "../../pages/private/DashboardGestor";
import CriarUsuario from "../../pages/private/CriarUsuario";

// Outras páginas
import FirstAcess from "../../pages/private/PasswordResetPage";
import ErrorPage from "../../pages/public/ErrorPage";

import { PasswordResetRoute } from "./PasswordResetRoute";

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
          <PasswordResetRoute>
            <FirstAcess />
          </PasswordResetRoute>
        }
      />

      {/* ======================
         DASHBOARDS POR ROLE
      ====================== */}
      <Route
        path="/user/aluno"
        element={
          <PrivateRoute>
            <RoleRoute allowedRoles={[2]}>
              <AlunoDashboard />
            </RoleRoute>
          </PrivateRoute>
        }
      />

      <Route
        path="/user/instrutor"
        element={
          <PrivateRoute>
            <RoleRoute allowedRoles={[1]}>
              <InstrutorDashboard />
            </RoleRoute>
          </PrivateRoute>
        }
      />

      <Route
        path="/user/gestor"
        element={
          <PrivateRoute>
            <RoleRoute allowedRoles={[3]}>
              <GestorDashboard />
            </RoleRoute>
          </PrivateRoute>
        }
      />

      <Route
        path="/user/gestor/logs"
        element={<LogsPageGestor />}
      />

      <Route
        path="/criar-usuario"
        element={<CriarUsuario />}
      />

      {/* ======================
         ERROS
      ====================== 
      <Route path="/erro/:code" element={<ErrorPage />} />*/}
      <Route path="*" element={<ErrorPage />} />
      

    </Routes>
  );
}