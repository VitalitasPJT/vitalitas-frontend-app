import NavbarLandingPage from "../components/NavbarLandingPage";
import { Link } from "react-router-dom";
{/*import gymMan from "../assets/imgs/main_img_landingPage.png";*/}

export default function LandingPage() {
  return (
    <div className="bg-white text-dark min-vh-100 overflow-hidden position-relative">
      <NavbarLandingPage />

      {/* Container principal */}
      <div
        className="container-fluid position-relative"
        style={{ paddingTop: "100px" }}
      >
        <div className="row">
          {/* Coluna Esquerda */}
          <div
            className="col-md-6 d-flex flex-column align-items-start gap-4"
            style={{
              marginLeft: "400px",
              maxWidth: "650px",
              position: "relative",
            }}
          >
            <h1
              className="font-title fw-bolder"
              style={{
                fontSize: "4rem",
                color: 'black',
                lineHeight: "1.1",
              }}
            >
              A EVOLUÇÃO QUE <br /> SUA ACADEMIA <br /> PRECISA
            </h1>

            <p className="font-text text-secondary lh-base"
            style={{fontSize:'24px'}}>
              O Vitalitas transforma a gestão da sua academia, conectando
              treinos, matrículas, pagamentos e comunicação em uma experiência
              única, ágil e descomplicada.
            </p>

            <p className="font-text text-secondary lh-base"
            style={{fontSize:'24px'}}>
              Torne-se nosso parceiro e se junte às academias que já estão
              simplificando a gestão com o Vitalitas.
            </p>

            <Link
              to="/cadastro"
              className="btn_redColor"
            >
              JUNTE-SE AGORA
            </Link>
          </div>
        </div>

        {/* Máscara e imagem — fora do fluxo da row */}
        <div
          className="position-absolute top-0 end-0 h-100 d-flex align-items-center justify-content-end"
          style={{ width: "55%", zIndex: 1 }}
        >
          {/*
          <div
            className="position-absolute top-0 end-0"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#000",
              clipPath: "polygon(5% 0%, 100% 0%, 100% 100%, 0% 100%)",
              zIndex: 1,
            }}
          ></div>

          {/* Imagem do homem com profundidade *
          <img
            src={gymMan}
            alt="Homem musculoso"
            className="position-relative"
            style={{
              zIndex: 2,
              maxHeight: "450px",
              objectFit: "contain",
              transform: "translate(25%, 5%) scale(1.15)",
              filter: "drop-shadow(-30px 0 40px rgba(0,0,0,0.6))",
            }}
          />
          */}
        </div>
      </div>
    </div>
  );
}
