import { useState } from "react";

export default function FirstAcess() {

    const [newPass, setNewPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const [showPass1, setShowPass1] = useState(false);
    const [showPass2, setShowPass2] = useState(false);

    const passwordsDontMatch =
        confirmPass.length > 0 && newPass !== confirmPass;

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">

                    <h1 className="text-center mb-4 font-title">Primeiro Acesso</h1>

                    <p className="font-text">
                        Este é seu <strong>primeiro acesso</strong>.<br />
                        Digite uma <strong>nova senha</strong>, ela não pode ser igual à senha temporária.
                    </p>

                    <p className="font-text">A senha deve ter:</p>
                    <ol className="font-text">
                        <li>No mínimo 8 caracteres</li>
                        <li>Uma letra maiúscula e uma minúscula</li>
                        <li>Um caractere especial (ex.: #,$,%,&,@)</li>
                        <li>Um número (ex.: 123, 456, 2025)</li>
                    </ol>

                    <div className="form-group mb-4 font-text">
                        <label className="fw-semibold mb-1">Nova senha</label>

                        <div className={`input-group border rounded-0 ${passwordsDontMatch ? "border-danger" : "border-dark"}`}>
                            <input
                                type={showPass1 ? "text" : "password"}
                                className="form-control border-0"
                                placeholder="Digite a nova senha..."
                                value={newPass}
                                onChange={(e) => setNewPass(e.target.value)}
                            />
                            <button
                                type="button"
                                className="btn bg-white border-0"
                                onClick={() => setShowPass1(!showPass1)}
                            >
                                <i className={showPass1 ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                            </button>
                        </div>
                    </div>

                    <div className="form-group mb-1 font-text">
                        <label className="fw-semibold mb-1">Confirme a nova senha</label>

                        <div className={`input-group border rounded-0 ${passwordsDontMatch ? "border-danger" : "border-dark"}`}>
                            <input
                                type={showPass2 ? "text" : "password"}
                                className="form-control border-0"
                                placeholder="Confirme a nova senha..."
                                value={confirmPass}
                                onChange={(e) => setConfirmPass(e.target.value)}
                            />
                            <button
                                type="button"
                                className="btn bg-white border-0"
                                onClick={() => setShowPass2(!showPass2)}
                            >
                                <i className={showPass2 ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                            </button>
                        </div>

                        {passwordsDontMatch && (
                            <p className="text-danger small mt-1">
                                ❌ As senhas não coincidem.
                            </p>
                        )}
                    </div>

                    <div className="text-center mt-4 font-btn">
                        <button
                            className="btn btn-danger w-50 py-2 fw-bold"
                            disabled={passwordsDontMatch || newPass === "" || confirmPass === ""}
                        >
                            SALVAR
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
