import NavbarLandingPage from "../components/NavbarLandingPage";
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <div style={{ backgroundColor: '#000', color: '#fff' }} className="min-vh-100">
            <NavbarLandingPage />

            <div className="container d-flex flex-column align-items-center justify-content-center text-start py-5">
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
                            <Link to="/" className="btn btn-danger btn-lg">
                                SEJA PARCEIRO
                            </Link>
                            <Link to="/login" className="btn btn-outline-light btn-lg">
                                ENTRE AGORA
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <img src="./src/assets/imgs/main_img_landingPage.png" className="img-fluid d-none d-md-block" alt="gym_img" style={{ maxHeight: '1000px', width: '100%', objectFit: 'cover' }} />
                    </div>

                </div>

            </div>
        </div>
    );
}
