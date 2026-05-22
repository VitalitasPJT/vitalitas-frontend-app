import { Routes, Route } from "react-router-dom";

// Páginas públicas
import LandingPage from "../../pages/public/LandingPage";
import LoginPage from "../../pages/public/LoginPage";

// Dashboards
import InstrutorDashboard from "../../pages/private/DashboardInstrutor";

// Páginas Gestor
import GestorDashboard from "../../pages/private/DashboardGestor";
import CriarUsuario from "../../pages/private/CriarUsuario";
// import LogsPageGestor from "../../pages/private/LogsPageGestor";

// Outras páginas
import FirstAcess from "../../pages/private/PasswordResetPage";
import ErrorPage from "../../pages/public/ErrorPage";

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
         INSTRUTOR
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
              <InstrutorDashboard /> {/* substituir pela página de Alunos quando criar */}
            </RoleRoute>
          </PrivateRoute>
        }
      />
      <Route
        path="/user/instrutor/avaliacoes"
        element={
          <PrivateRoute>
            <RoleRoute allowedRoles={["Instrutor"]}>
              <InstrutorDashboard /> {/* substituir pela página de Avaliações quando criar */}
            </RoleRoute>
          </PrivateRoute>
        }
      />

      {/* ======================
         GESTOR
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
              /* precisa melhorar página LogsPageGestor  */
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
      <Route path="*" element={<ErrorPage />} />

    </Routes>
  );
}