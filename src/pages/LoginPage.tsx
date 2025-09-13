import LoginForm from "../components/LoginForm";
import bgImage from "../assets/imgs/img_gym_login.png";

export default function LoginPage() {
    return (
        <div className="d-flex vh-100">
            {/* Esquerda - Imagem */}
            <div
                className="col-6 d-none d-md-block bg-login-image"
                style={{
                    backgroundImage: `url(${bgImage})`,
                }}
            ></div>

            {/* Direita - Formulário */}
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center background-grey-color">
                <div className="d-flex flex-column align-items-center">
                    <div className="text-center mb-4">
                        <img
                            src="./src/assets/imgs/logo_loginPage.png"
                            alt="Logo"
                            width={150}
                            className="mb-3"
                        />
                        <h2 className="fw-bold fs-1 text-white font-title">
                            ACESSE SUA CONTA
                        </h2>
                    </div>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}
