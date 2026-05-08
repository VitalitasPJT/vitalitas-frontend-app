import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../services/userService";
import { useAuth } from "../../hooks/useAuth";

import { InputField } from "../../components/inputs/CampoInput.tsx";

interface Requirement {
    met: boolean;
    text: string;
}

function getRequirements(password: string): Requirement[] {
    return [
        { met: password.length >= 8, text: "No mínimo 8 caracteres" },
        { met: /[a-z]/.test(password) && /[A-Z]/.test(password), text: "Uma letra maiúscula e uma minúscula" },
        { met: /[#$%&@!*?]/.test(password), text: "Um caractere especial (ex.: #,$,%,&,@)" },
        { met: /\d/.test(password), text: "Um número (ex.: 1,2,3)" },
    ];
}

function getStrength(reqs: Requirement[]) {
    const count = reqs.filter((r) => r.met).length;
    if (count === 0) return { label: "", color: "", bar: "w-0 bg-transparent" };
    if (count === 1) return { label: "Fraca", color: "text-red-500", bar: "w-1/4 bg-red-500" };
    if (count === 2) return { label: "Média", color: "text-yellow-500", bar: "w-2/4 bg-yellow-400" };
    if (count === 3) return { label: "Boa", color: "text-green-500", bar: "w-3/4 bg-green-400" };
    return { label: "Forte", color: "text-green-600", bar: "w-full bg-green-500" };
}

const roleRoutes: Record<number, string> = {
    1: "/user/instrutor",
    2: "/user/aluno",
    3: "/user/gestor",
    4: "/user/admin",
};

export default function PasswordResetPage() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const [newPass, setNewPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [showPass1, setShowPass1] = useState(false);
    const [showPass2, setShowPass2] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [reqs, setReqs] = useState<Requirement[]>(getRequirements(""));

    useEffect(() => {
        if (user && user.Flag === false) {
            navigate(roleRoutes[user.Tipo] ?? "/");
        }
    }, [user]);

    if (!user) return null;

    const strength = getStrength(reqs);
    const allMet = reqs.every((r) => r.met);
    const passwordsMatch = confirmPass.length > 0 && newPass === confirmPass;
    const mismatch = confirmPass.length > 0 && !passwordsMatch;
    const canSave = allMet && passwordsMatch && !loading;

    function handleNewPass(value: string) {
        setNewPass(value);
        setReqs(getRequirements(value));
    }

    async function handleSubmit() {
        setError("");
        if (!allMet) return setError("A senha não atende aos requisitos mínimos.");
        if (!passwordsMatch) return setError("As senhas não coincidem.");
        if (!user?.Id) return setError("Usuário inválido.");

        setLoading(true);
        try {
            await resetPassword(user.Id, newPass);
            setSuccess(true);

            setTimeout(() => {
                logout();
                navigate("/vitalitas/user/login");
            }, 3000);

        } catch {
            setError("Erro ao atualizar a senha. Tente novamente.");
        } finally {
            setLoading(false);
        }
    }

    function handleCancel() {
        logout();
        navigate("/vitalitas/user/login");
    }

    const EyeIcon = ({ open }: { open: boolean }) =>
        open ? (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22" />
            </svg>
        ) : (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
            </svg>
        );

    return (
        <div className="bg-white w-full max-w-[560px] rounded-3xl shadow-2xl p-10">

            {/* Ícone */}
            <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-b from-red-500 to-red-700 flex items-center justify-center shadow-lg shadow-red-200">
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 14v2m-4 4h8a2 2 0 002-2v-6a2 2 0 00-2-2H8a2 2 0 00-2 2v6a2 2 0 002 2zm6-10V7a4 4 0 10-8 0v3h8z" />
                    </svg>
                </div>
            </div>

            {/* Título */}
            <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-3 tracking-tight">
                Primeiro Acesso
            </h1>
            <p className="text-sm text-gray-500 text-center mb-8 leading-relaxed px-4">
                Este é seu <strong className="text-gray-800">primeiro acesso</strong>. Digite uma{" "}
                <strong className="text-gray-800">nova senha</strong>, ela não pode ser igual à senha temporária.
            </p>

            {/* Requisitos */}
            <div className="bg-gray-50 rounded-2xl p-5 mb-7">
                <p className="text-sm font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <svg width="16" height="16" fill="none" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="9" stroke="#EE2B47" strokeWidth="1.5" />
                        <path d="M10 6v4M10 13.5h.01" stroke="#EE2B47" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    A senha deve ter:
                </p>
                <div className="flex flex-col gap-3">
                    {reqs.map((req, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${req.met ? "bg-green-500" : "bg-red-100"}`}>
                                {req.met ? (
                                    <svg width="11" height="11" fill="none" viewBox="0 0 12 12">
                                        <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ) : (
                                    <svg width="11" height="11" fill="none" viewBox="0 0 12 12">
                                        <path d="M9 3L3 9M3 3l6 6" stroke="#FB2C36" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </div>
                            <span className={`text-sm transition-colors duration-200 ${req.met ? "text-green-700 font-medium" : "text-red-500"}`}>
                                {req.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Nova senha */}
            <div className="mb-5">
                <InputField
                    id="newPassword"
                    label="Nova senha"
                    type="password"
                    value={newPass}
                    onChange={(e) => handleNewPass(e.target.value)}
                    icon={
                        <svg
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="3" y="11" width="18" height="11" rx="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                    }
                    isPassword
                />

                {/* Barra de força */}
                {newPass.length > 0 && (
                    <div className="mt-3">
                        <div className="flex justify-between mb-1.5">
                            <span className="text-xs font-medium text-gray-500">Força da senha</span>
                            <span className={`text-xs font-bold transition-colors ${strength.color}`}>{strength.label}</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full transition-all duration-300 ${strength.bar}`} />
                        </div>
                    </div>
                )}
            </div>

            {/* Confirmar senha */}
            <div className="mb-2">
                <InputField
                    id="confirmPassword"
                    label="Confirme a nova senha"
                    type="password"
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    icon={
                        <svg
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="3" y="11" width="18" height="11" rx="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                    }
                    isPassword
                    error={mismatch ? "As senhas não coincidem" : ""}
                />
            </div>

            {/* Erro geral */}
            {error && (
                <p className="text-xs text-red-500 mt-2 flex items-center gap-1.5">
                    <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
                        <path d="M9 3L3 9M3 3l6 6" stroke="#EF4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {error}
                </p>
            )}

            {/* Toast de sucesso */}
            {success && (
                <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm font-medium rounded-2xl px-4 py-3 mt-6">
                    <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="7" stroke="#16a34a" strokeWidth="1.5" />
                        <path d="M5 8l2 2 4-4" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Senha alterada com sucesso! Redirecionando...
                </div>
            )}

            {/* Botões */}
            <div className="flex flex-col gap-3 mt-8">
                <button
                    onClick={handleSubmit}
                    disabled={!canSave}
                    className={`w-full py-4 rounded-2xl font-bold text-white text-sm tracking-widest transition-all duration-200
            bg-gradient-to-r from-red-500 to-red-700
            ${canSave ? "opacity-100 hover:opacity-90 cursor-pointer shadow-lg shadow-red-200 hover:shadow-red-300" : "opacity-50 cursor-not-allowed"}`}
                >
                    {loading ? "Salvando..." : "SALVAR"}
                </button>
                <button
                    onClick={handleCancel}
                    className="w-full cursor-pointer py-4 rounded-2xl font-bold text-gray-500 text-sm tracking-widest bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                    CANCELAR
                </button>
            </div>

        </div>
    );
}
