import { useState } from "react";

export default function ContatoForm() {
    const [form, setForm] = useState({
        nome: "",
        email: "",
        estado: "",
        academia: "",
        mensagem: "",
        tipo: "", // aluno / professor
    });

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log("FORM ENVIADO:", form);
    }

    return (
        <form className="contato-form" onSubmit={handleSubmit}>
            <div className="row g-3">

                {/* Nome */}
                <div className="col-md-6">
                    <input
                        type="text"
                        name="nome"
                        placeholder="Digite seu nome"
                        className="form-input"
                        value={form.nome}
                        onChange={handleChange}
                    />
                </div>

                {/* Estado */}
                <div className="col-md-6">
                    <input
                        type="text"
                        name="estado"
                        placeholder="Estado (UF)"
                        className="form-input"
                        value={form.estado}
                        onChange={handleChange}
                    />
                </div>

                {/* Select: Aluno / Professor */}
                <div className="col-md-6">
                    <select
                        name="tipo"
                        className="form-input"
                        value={form.tipo}
                        onChange={handleChange}
                    >
                        <option value="" disabled>
                            Você é...
                        </option>

                        <option value="Aluno">Aluno</option>
                        <option value="Professor">Professor</option>
                    </select>
                </div>

                {/* Mensagem */}
                <div className="col-md-6">
                    <textarea
                        name="mensagem"
                        placeholder="Mensagem (opcional)"
                        className="form-input"
                        value={form.mensagem}
                        onChange={handleChange}
                    />
                </div>

                {/* Nome da academia */}
                <div className="col-12">
                    <input
                        type="text"
                        name="academia"
                        placeholder="Nome da academia"
                        className="form-input"
                        value={form.academia}
                        onChange={handleChange}
                    />
                </div>

                {/* Botão */}
                <div className="col-12">
                    <button className="btn btn-danger w-100 py-2 fw-semibold submit-btn">
                        Quero o Vitalitas para minha academia!
                    </button>
                </div>
            </div>
        </form>
    );
}
