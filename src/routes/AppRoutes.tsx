import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import AlunoDashboard from "../pages/AlunoDashboard";
import ProfessorDashboard from "../pages/ProfessorDashboard";
import AdminDashboard from "../pages/AdminDashboard";

import { RoleRoute } from "../components/RoleRoute.tsx";

export default function AppRoutes() {
    return (
        <Routes>

            <Route path="/" element={<LandingPage />} />
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
        </Routes>
    );
}