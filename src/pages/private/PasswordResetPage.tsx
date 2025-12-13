import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../services/userService";
import { useAuth } from "../../hooks/useAuth";

/* =======================
   VALIDADOR DE SENHA
======================= */
function isPasswordStrong(password: string) {
    return (
        password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /\d/.test(password) &&
        /[#@$!%*?&]/.test(password)
    );
}

export default function FirstAcess() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const [newPass, setNewPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [showPass1, setShowPass1] = useState(false);
    const [showPass2, setShowPass2] = useState(false);

    if (!user) return null;

    const isFirstAccess = user.SenhaFlag === false;

    const passwordsDontMatch =
        confirmPass.length > 0 && newPass !== confirmPass;

    /* =======================
       SUBMIT
    ======================= */
    async function handleSubmit() {
        setError("");

        if (!isPasswordStrong(newPass)) {
            setError("A senha não atende aos requisitos mínimos.");
            return;
        }

        setLoading(true);

        try {
            
            if (!user?.Id) {
                setError("Usuário inválido.");
                return;
            }

            await resetPassword(user.Id, newPass);

            logout();

            navigate("/vitalitas/user/login");
        } catch {
            setError("Erro ao atualizar a senha.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">

                    <h1 className="text-center mb-4 font-title">
                        {isFirstAccess ? "Primeiro Acesso" : "Redefinição de Senha"}
                    </h1>

                    {/* TEXTO CONDICIONAL */}
                    {isFirstAccess ? (
                        <>
                            <p className="font-text">
                                Este é seu <strong>primeiro acesso</strong>.<br />
                                Crie uma <strong>nova senha</strong>.
                            </p>

                            <p className="font-text">A senha deve ter:</p>
                            <ol className="font-text">
                                <li>No mínimo 8 caracteres</li>
                                <li>Uma letra maiúscula e uma minúscula</li>
                                <li>Um caractere especial (ex.: #,$,%,&,@)</li>
                                <li>Um número</li>
                            </ol>
                        </>
                    ) : (
                        <p className="font-text">
                            A senha deve conter no mínimo 8 caracteres, letra maiúscula,
                            letra minúscula, número e caractere especial.
                        </p>
                    )}

                    {/* NOVA SENHA */}
                    <div className="form-group mb-4 font-text">
                        <label className="fw-semibold mb-1">Nova senha</label>

                        <div className="input-group border rounded-0">
                            <input
                                type={showPass1 ? "text" : "password"}
                                className="form-control border-0"
                                value={newPass}
                                onChange={(e) => setNewPass(e.target.value)}
                            />
                            <button
                                type="button"
                                className="btn bg-white border-0"
                                onClick={() => setShowPass1(!showPass1)}
                            >
                                <i className={showPass1 ? "bi bi-eye-slash" : "bi bi-eye"} />
                            </button>
                        </div>
                    </div>

                    {/* CONFIRMAR SENHA */}
                    <div className="form-group mb-1 font-text">
                        <label className="fw-semibold mb-1">Confirmar senha</label>

                        <div className="input-group border rounded-0">
                            <input
                                type={showPass2 ? "text" : "password"}
                                className="form-control border-0"
                                value={confirmPass}
                                onChange={(e) => setConfirmPass(e.target.value)}
                            />
                            <button
                                type="button"
                                className="btn bg-white border-0"
                                onClick={() => setShowPass2(!showPass2)}
                            >
                                <i className={showPass2 ? "bi bi-eye-slash" : "bi bi-eye"} />
                            </button>
                        </div>
                    </div>

                    {/* ERROS */}
                    {passwordsDontMatch && (
                        <p className="text-danger small mt-1">
                            ❌ As senhas não coincidem
                        </p>
                    )}

                    {error && (
                        <p className="text-danger small mt-1">{error}</p>
                    )}

                    {/* BOTÃO */}
                    <button
                        className="btn btn-danger w-100 mt-3 fw-bold"
                        disabled={
                            loading ||
                            passwordsDontMatch ||
                            !newPass ||
                            !confirmPass
                        }
                        onClick={handleSubmit}
                    >
                        {loading ? "Salvando..." : "Salvar"}
                    </button>

                </div>
            </div>
        </div>
    );
}
