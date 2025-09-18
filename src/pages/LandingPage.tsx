import NavbarLandingPage from "../components/NavbarLandingPage";
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <div style={{ backgroundColor: '#000', color: '#fff' }} className="min-vh-100">
            <NavbarLandingPage />

            <div className="container d-flex flex-column align-items-center justify-content-center text-start" style={{paddingTop: '10%'}}>
                <div className="row">
                    <div className="col-md-6 px-5">
                        <h1 className="display-4 font-title mb-5" style={{ fontWeight: "bolder" }}>
                            A EVOLUÇÃO QUE SUA ACADEMIA PRECISA
                        </h1>

                        <p className="lead font-text mb-4">
                            O Vitalitas transforma a gestão da sua academia, conectando treinos, matrículas, pagamentos e comunicação em uma experiência única, ágil e descomplicada.
                        </p>

                        <p className="lead font-text mb-4">
                            Criado para academias de bairro, nosso sistema permite que você economize tempo, melhore o engajamento e ofereça um serviço de excelência sem complicação.
                        </p>

                        <div className="d-flex gap-3 font-button flex-wrap justify-content-start">
                            <Link to="/" className="btn_redColor">
                                SEJA PARCEIRO
                            </Link>
                            <Link to="/login" className="btn_greyColor">
                                ENTRE AGORA
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <img src="./src/assets/imgs/main_img_landingPage.png" className="img-fluid d-none d-md-block" alt="gym_img" style={{ maxHeight: '1000px', width: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
            </div>

            {/* Seção com gradiente fora da container */}
            <section
                className="text-white py-5"
                style={{
                    background: 'linear-gradient(180deg, #000000ff, #2c2c2c)',
                    width: '100%',
                }}
            >
                <div className="container text-center">
                    <h2 className="mb-5 display-5 font-title">TUDO EM UM SÓ LUGAR</h2>

                    <div className="row g-5">

                        <div className="col-md-6">
                            <div className="p-4 bg-dark rounded-4 h-100">
                                <i className="bi bi-calendar-check-fill text-danger fs-1 mb-3"></i>
                                <p>Agendar avaliações e treinos com professores.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="p-4 bg-dark rounded-4 h-100">
                                <i className="bi bi-people-fill text-danger fs-1 mb-3"></i>
                                <p>Centralizar dados de alunos e professores.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="p-4 bg-dark rounded-4 h-100">
                                <i className="bi bi-file-earmark-text-fill text-danger fs-1 mb-3"></i>
                                <p>Consultar mensalidades e contrato.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="p-4 bg-dark rounded-4 h-100">
                                <i className="bi bi-calendar3 text-danger fs-1 mb-3"></i>
                                <p>Acompanhar treinos e progresso.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
