import LoginForm from "../components/LoginForm";
import bgImage from "../assets/imgs/img_gym_login.png";

export default function LoginPage() {
    return (
        <div className="d-flex vh-100">
            {/* Esquerda - Imagem */}
            <div
                className="col-0 col-md-6 d-none d-sm-block bg-login-image"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            ></div>

            {/* Direita - Formulário */}
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <div className="d-flex flex-column">
                    <div className="text-center">
                        <img
                            src="./src/assets/imgs/logo_loginPage.png"
                            alt="Logo"
                            width={150}
                            className=""
                        />
                        <h2 className="fw-bold fs-1 font-title">
                            Conecte-se agora
                        </h2>
                        <p className="m-0">
                            Faça login com seu e-mail
                        </p>
                    </div>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}
