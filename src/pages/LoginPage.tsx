import LoginForm from "../components/LoginForm";
import bgImage from "../assets/imgs/img_gym_login.png"; // troque pela sua imagem

export default function LoginPage() {
    return (
        <div className="d-flex vh-100">
            {/* Esquerda - Imagem */}
            <div
                className="col-6 d-none d-md-block"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>

            {/* Direita - Formulário */}
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center bg-dark">
                <div className="w-75">
                    <div className="text-center mb-4">
                        <img src="./src/assets/imgs/logo_loginPage.png" alt="Logo" width={80} className="mb-3" />
                        <h2 className="fw-bold text-white">ACESSE SUA CONTA</h2>
                    </div>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}
