import { useState } from "react";

interface Props {
  show: boolean;
  onClose: () => void;
}

export default function ModalRecuperarSenha({ show, onClose }: Props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  if (!show) return null;

  function handleConfirm() {
    setError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Digite um e-mail válido.");
      return;
    }

    // 🔥 Aqui futuramente você chama a API de recuperação
    // await recoverPassword(email)

    setSuccess(true);

    // fecha o modal após 2s
    setTimeout(() => {
      setSuccess(false);
      setEmail("");
      onClose();
    }, 2000);
  }

  return (
    <>
      <div className="modal fade show d-block" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">Recuperar senha</h5>
              <button className="btn-close" onClick={onClose} />
            </div>

            <div className="modal-body">
              {!success ? (
                <>
                  <label className="form-label fw-semibold">
                    E-mail cadastrado
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  {error && (
                    <p className="text-danger small mt-2">{error}</p>
                  )}
                </>
              ) : (
                <p className="text-success fw-semibold text-center">
                  📩 Email de recuperação enviado com sucesso!
                </p>
              )}
            </div>

            {!success && (
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  Cancelar
                </button>

                <button
                  className="btn btn-danger"
                  onClick={handleConfirm}
                >
                  Enviar
                </button>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div className="modal-backdrop fade show"></div>
    </>
  );
}