import LoginForm from "../components/LoginForm";
import bgImage from "../assets/imgs/img_gym_login.png";

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
                        <img
                            src="./src/assets/imgs/logo_loginPage.png"
                            alt="Logo"
                            width={150}
                            className=""
                        />
                        <h2 className="fw-bold fs-1 font-title">
                            Conecte-se agora
                        </h2>
                        <p className="m-0 fs-5 font-text">
                            Faça login com seu e-mail
                        </p>
                    </div>
                    <LoginForm />

                    <div className="text-center my-3 d-flex align-items-center justify-content-center">
                        <div className="flex-grow-1 border-bottom border-dark mx-3"></div>
                        <span className="text-uppercase small fw-bold text-dark">ou logue com</span>
                        <div className="flex-grow-1 border-bottom border-dark mx-3"></div>
                    </div>

                    <div className="text-center">
                        <button className="btn btn-sm bg-black rounded-circle">
                            <i className="bi bi-google text-white"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
