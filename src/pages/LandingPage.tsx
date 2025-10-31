import NavbarLandingPage from "../components/NavbarLandingPage";
import { Link } from "react-router-dom";
import gymMan from "../assets/imgs/main_img_landingPage.png";

export default function LandingPage() {
  return (
    <div className="bg-white text-dark min-vh-100 position-relative overflow-visible">
      <NavbarLandingPage />

      <div className="container-fluid position-relative" style={{ paddingTop: "100px" }}>
        <div className="row">
          {/* Coluna Esquerda */}
          <div
            className="col-md-6 d-flex flex-column align-items-start gap-4"
            style={{ marginLeft: "400px", maxWidth: "650px", position: "relative", zIndex: 2 }}
          >
            <h1 className="font-title fw-bolder" style={{ fontSize: "4rem", color: 'black', lineHeight: "1.1" }}>
              A EVOLUÇÃO QUE <br /> SUA ACADEMIA <br /> PRECISA
            </h1>

            <p className="font-text text-secondary lh-base" style={{ fontSize: '24px' }}>
              O Vitalitas transforma a gestão da sua academia, conectando
              treinos, matrículas, pagamentos e comunicação em uma experiência
              única, ágil e descomplicada.
            </p>

            <p className="font-text text-secondary lh-base" style={{ fontSize: '24px' }}>
              Torne-se nosso parceiro e se junte às academias que já estão
              simplificando a gestão com o Vitalitas.
            </p>

            <Link to="/cadastro" className="btn_redColor">
              JUNTE-SE AGORA
            </Link>
          </div>
        </div>

        {/* Máscara e imagem — fora do fluxo da row */}
        <div
          className="position-absolute top-0 end-0 h-100 d-flex align-items-center justify-content-end"
          style={{ width: "30%", zIndex: 1 , overflow: "visible"}}
        >
          {/* Máscara preta com formato de escada invertida */}
          <div
            className="position-absolute top-0 end-0"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#000",
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 20% 100%)",
              zIndex: 1,
            }}
          ></div>

          {/* Imagem do homem mais próxima do polígono */}
          <img
            src={gymMan}
            alt="Homem musculoso"
            className="position-relative"
            style={{
              zIndex: 2,
              maxHeight: "500px",
              objectFit: "contain",
              transform: "translateX(-50%) translateY(7.2%) scale(1.25)",
              filter: "drop-shadow(-20px 0 40px rgba(0, 0, 0, 0.7))",
            }}
          />
        </div>
      </div>
    </div>
  );
}
