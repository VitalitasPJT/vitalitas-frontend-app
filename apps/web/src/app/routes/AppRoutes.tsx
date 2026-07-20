import { Routes, Route } from "react-router-dom";

// Páginas públicas
import LandingPage from "@/features/landing/pages/LandingPage";
import LoginPage from "@/features/auth/pages/LoginPage";

// Dashboards
//import AlunoDashboard from "@/features/users/gestor/pages/AlunoDashboard";
import InstrutorDashboard from "@/features/users/instrutor/pages/DashboardInstrutor";

// Páginas Gestor
import GestorDashboard from "@/features/users/gestor/pages/DashboardGestor";
import CriarUsuario from "@/features/users/gestor/pages/CreateUserPage";
import LogsPageGestor from "@/features/users/gestor/pages/LogsPage";

// Outras páginas
import FirstAcess from "@/features/first-access/pages/PasswordResetPage";
import ErrorPage from "@/features/redirect-error/pages/ErrorPage";

// Guards
import { PasswordResetRoute } from "./PasswordResetRoute";
import { PrivateRoute } from "./PrivateRoute";
import { RoleRoute } from "./RoleRoute";

export default function AppRoutes() {
  return (
    <Routes>

      {/* ======================
         ROTAS PÚBLICAS
      ====================== */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/vitalitas/user/login" element={<LoginPage />} />

      {/* ======================
         RESET DE SENHA
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
         ALUNO — Tipo 2
      <Route
        path="/user/aluno"
        element={
          <PrivateRoute>
            <RoleRoute allowedRoles={["Aluno"]}>
              <AlunoDashboard />
            </RoleRoute>
          </PrivateRoute>
        }
      />
      ====================== */}

      {/* ======================
         INSTRUTOR — Tipo 1
      ====================== */}
      <Route
        path="/user/instrutor"
        element={
          <PrivateRoute>
            <RoleRoute allowedRoles={["Instrutor"]}>
              <InstrutorDashboard />
            </RoleRoute>
          </PrivateRoute>
        }
      />
      <Route
        path="/user/instrutor/alunos"
        element={
          <PrivateRoute>
            <RoleRoute allowedRoles={["Instrutor"]}>
              <InstrutorDashboard />
            </RoleRoute>
          </PrivateRoute>
        }
      />
      <Route
        path="/user/instrutor/avaliacoes"
        element={
          <PrivateRoute>
            <RoleRoute allowedRoles={["Instrutor"]}>
              <InstrutorDashboard />
            </RoleRoute>
          </PrivateRoute>
        }
      />

      {/* ======================
         GESTOR — Tipo 3
      ====================== */}
      <Route
        path="/user/gestor"
        element={
          <PrivateRoute>
            <RoleRoute allowedRoles={["Gestor"]}>
              <GestorDashboard />
            </RoleRoute>
          </PrivateRoute>
        }
      />
      <Route
        path="/user/gestor/logs"
        element={
          <PrivateRoute>
            <RoleRoute allowedRoles={["Gestor"]}>
              <LogsPageGestor />
            </RoleRoute>
          </PrivateRoute>
        }
      />
      <Route
        path="/criar-usuario"
        element={
          <PrivateRoute>
            <RoleRoute allowedRoles={["Gestor"]}>
              <CriarUsuario />
            </RoleRoute>
          </PrivateRoute>
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
