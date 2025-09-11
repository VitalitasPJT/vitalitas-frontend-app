import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage.tsx";
import LoginPage from "../pages/LoginPage.tsx";

export default function AppRoutes() {
    return (
        <Routes>

            <Route path="/" element={<LandingPage/>}  />
            <Route path="/login" element={<LoginPage/>} />

        </Routes>
    );
}