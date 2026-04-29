import { Link, useParams } from "react-router-dom";
import logo from "../../assets/imgs/logo_loginPage.png";
import errorImage from "../../assets/imgs/errorImage.png";

type ErrorType = "404" | "500" | "401" | "403";

const messages: Record<ErrorType, { title: string; desc: string; button: string }> = {
    "404": { title: "Oops! Erro 404...", desc: "Esta página não pode ser encontrada.", button: "Ir para Tela Inicial" },
    "500": { title: "Oops! Erro 500", desc: "Erro interno no servidor. Tente novamente mais tarde.", button: "Tentar Novamente" },
    "401": { title: "Oops! Erro 401", desc: "Você não está autorizado. Faça login para continuar.", button: "Ir para Login" },
    "403": { title: "Oops! Erro 403", desc: "Acesso proibido. Você não tem permissão para acessar esta página.", button: "Voltar" },
};

export default function ErrorPage() {
    const { code } = useParams<{ code?: string }>();

    const errorCode: ErrorType =
        code && ["404", "500", "401", "403"].includes(code)
            ? (code as ErrorType)
            : "404";

    const info = messages[errorCode];

    const renderButton = () => {
        switch (errorCode) {
            case "401":
                return (
                    <Link to="/vitalitas/user/login" className="text-decoration-none">
                        <button className="btn btn-danger btn-lg px-4">{info.button}</button>
                    </Link>
                );

            case "500":
                return (
                    <button
                        className="btn btn-danger btn-lg px-4"
                        onClick={() => window.location.reload()}
                    >
                        {info.button}
                    </button>
                );

            default:
                return (
                    <Link to="/" className="text-decoration-none">
                        <button className="btn btn-danger btn-lg px-4">{info.button}</button>
                    </Link>
                );
        }
    };

    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-white">
            <div className="row w-100">
                <div className="col-12 col-md-8 d-flex flex-column align-items-center justify-content-center text-center p-4">
                    <img src={logo} alt="Logo" className="mb-3" style={{ width: 130 }} />

                    <h2 className="fw-bold mt-2 font-title">{info.title}</h2>
                    <p className="text-muted mb-4 font-text">{info.desc}</p>

                    {renderButton()}
                </div>

                <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
                    <img
                        src={errorImage}
                        alt="Error Illustration"
                        className="img-fluid" 
                    />
                </div>
            </div>
        </div>
    );
}
