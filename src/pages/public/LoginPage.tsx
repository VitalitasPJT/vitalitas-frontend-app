import LoginForm from "../../components/LoginForm";
import bgImage from "../../assets/imgs/img_gym_login.png";
import logo from "../../assets/imgs/logo_loginPage.png";

export default function LoginPage() {
    return (
        <div className="d-flex vh-100">
            {/* Esquerda - Imagem */}
            <div
                className="col-0 col-md-6 col-xxl-7 d-none d-sm-block bg-login-image"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            ></div>

            {/* Direita - Formulário */}
            <div className="col-12 col-md-6 col-xxl-5 align-content-center p-4">
                <div className="d-flex flex-column">
                    <div className="text-center m-2">
                        <img src={logo} alt="Logo" width={150} />
                        <h2 className="fw-bold fs-1 font-title">
                            Conecte-se agora
                        </h2>
                        <p className="m-0 fs-5 font-text">
                            Faça login com seu e-mail
                        </p>
                    </div>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}
