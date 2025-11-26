import ContatoForm from "./ContatoForm";
import contatoImg from "../assets/imgs/contatoImg.jpg";
import './ContatoSection.css'

export default function ContatoSection() {
    return (
        <section className="container-fluid contato-section py-5">
            <div className="row align-items-center justify-content-center">

                {/* IMAGEM */}
                <div className="col-lg-6 col-12 mb-4 mb-lg-0 px-5">
                    <img
                        src={contatoImg}
                        alt="Contato Vitalitas"
                        className="img-fluid contato-img"
                    />
                </div>

                {/* TEXTOS + FORM */}
                <div className="col-lg-5 col-12">
                    <h2 className="fw-bold display-6">
                        Mostre que sua academia também precisa o Vitalitas
                    </h2>

                    <p className="mt-3 text-secondary">
                        Alunos e professores de todo o Brasil já estão pedindo o Vitalitas.
                        Envie seu recado e ajude a trazer a evolução para a sua academia também.
                    </p>

                    <ContatoForm />
                </div>
            </div>
        </section>
    );
}