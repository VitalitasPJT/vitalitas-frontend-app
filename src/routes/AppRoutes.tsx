import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import Sobre from "../pages/sobreNos.tsx";
import AlunoDashboard from "../pages/AlunoDashboard.tsx";
import ProfessorDashboard from "../pages/ProfessorDashboard.tsx";
import AdminDashboard from "../pages/AdminDashboard.tsx";
import { RoleRoute } from "../components/RoleRoute.tsx";
import ErrorPage from "../pages/ErrorPage";

export default function AppRoutes() {
    return (
        <Routes>

            <Route path="/" element={<LandingPage />} />
            <Route path="/sobre" element={<Sobre />} />


            <Route path="/vitalitas/user/login" element={<LoginPage />} />

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

            {/* Rotas p/ página de erro */}
            <Route path="/erro/:code" element={<ErrorPage />} />
 
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}