import NavbarLandingPage from "../components/NavbarLandingPage";
import { Link } from "react-router-dom";
import gymMan from "../assets/imgs/main_img_landingPage.png";

// Imagens dos cards (coloque no /assets/imgs/)
import agendarImg from "../assets/imgs/imagem1.png";
import centralizarImg from "../assets/imgs/imagem2.png";
import contratoImg from "../assets/imgs/imagem3.png";

import yuriImg from "../assets/imgs/yuri.png";
import tutuImg from "../assets/imgs/tutu.png";
import sandersonImg from "../assets/imgs/sand.png";

export default function LandingPage() {
  return (
    <div className="bg-white text-dark min-vh-100 position-relative overflow-visible">
      <NavbarLandingPage />

      {/* --- HERO SECTION --- */}
      <div className="container-fluid position-relative" style={{ paddingTop: "100px" }}>
        <div className="row">
          <div
            className="col-md-6 d-flex flex-column align-items-start gap-4"
            style={{ marginLeft: "400px", maxWidth: "650px", position: "relative", zIndex: 2 }}
          >
            <h1
              className="font-title fw-bolder"
              style={{ fontSize: "4rem", color: "black", lineHeight: "1.1" }}
            >
              A EVOLUÇÃO QUE <br /> SUA ACADEMIA <br /> PRECISA
            </h1>

            <p className="font-text text-secondary lh-base" style={{ fontSize: "24px" }}>
              O Vitalitas transforma a gestão da sua academia, conectando
              treinos, matrículas, pagamentos e comunicação em uma experiência
              única, ágil e descomplicada.
            </p>

            <p className="font-text text-secondary lh-base" style={{ fontSize: "24px" }}>
              Torne-se nosso parceiro e se junte às academias que já estão
              simplificando a gestão com o Vitalitas.
            </p>

            <Link to="/cadastro" className="btn_redColor mb-5">
              JUNTE-SE AGORA
            </Link>
          </div>
        </div>

        <div
          className="position-absolute top-0 end-0 h-100 d-flex align-items-center justify-content-end"
          style={{ width: "30%", zIndex: 1, overflow: "visible" }}
        >
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

          <img
            src={gymMan}
            alt="Homem musculoso"
            className="position-relative"
            style={{
              zIndex: 2,
              maxHeight: "500px",
              objectFit: "contain",
              transform: "translateX(-50%) translateY(12.0%) scale(1.25)",
              filter: "drop-shadow(-20px 0 40px rgba(0, 0, 0, 0.7))",
            }}
          />
        </div>
      </div>

      {/* --- SEÇÃO COM SERVIÇOS + FEEDBACK --- */}
      <section
        className="container-fluid  shadow-section"
        style={{
          boxShadow: "0 -8px 25px rgba(0, 0, 0, 0.1)",
          padding: "60px 20px",
          backgroundColor: "white",
        }}
      >
        {/* --- SERVIÇOS --- */}
        <div className="row text-center mb-5">
          {[
            {
              img: agendarImg,
              title: "Agendar avaliações e treinos com professores.",
            },
            {
              img: centralizarImg,
              title: "Centralizar dados de alunos e professores.",
            },
            {
              img: contratoImg,
              title: "Consultar mensalidades e contrato.",
            },
          ].map((card, i) => (
            <div key={i} className="col-md-4 mb-4">
              <div
                className="card h-100 border-1 shadow-sm"
                style={{
                  borderRadius: "16px",
                  transition: "0.3s",
                }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="card-img-top"
                  style={{
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="fw-semibold">{card.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- DEPOIMENTOS --- */}
        <div className="row text-center">
          {[
            {
              text: "Antes era um caos organizar fichas de treino e avaliações. Com o Vitalitas, tudo ficou digital e acessível. É outro nível de gestão.",
              name: "Yuri com Y, Personal Trainer",
              img: yuriImg,
            },
            {
              text: "O Vitalitas facilitou minha vida como aluno: acompanho mensalidades, treinos e desempenho em tempo real, tudo centralizado em um só aplicativo.",
              name: "Tutu, Aluno",
              img: tutuImg,
            },
            {
              text: "Com o Vitalitas consegui ter a academia inteira na palma da mão. Controle de alunos, professores e finanças de forma simples e intuitiva.",
              name: "Sanderson, CEO da academia Overcoked",
              img: sandersonImg,
            },
          ].map((person, i) => (
            <div key={i} className="col-md-4 mb-4">
              <div
                className="card h-100 p-4 border-0 shadow-sm"
                style={{
                  borderRadius: "16px",
                  fontStyle: "italic",
                  transition: "0.3s",
                }}
              >
                <p className="text-secondary">“{person.text}”</p>
                <div className="d-flex align-items-center gap-3 mt-3">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="rounded-circle"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                  <p className="mb-0 fw-semibold text-dark">{person.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
