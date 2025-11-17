import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import { RoleRoute } from "../components/RoleRoute.tsx";

export default function AppRoutes() {
    return (
        <Routes>

            <Route path="/" element={<LandingPage/>}  />
            <Route path="/login" element={<LoginPage/>} />

            <Route
                path="/user/aluno"
                element = {
                    <RoleRoute allowedRoles={["Aluno"]}>
                        // rota
                    </RoleRoute>
                }
            />

        </Routes>
    );
}