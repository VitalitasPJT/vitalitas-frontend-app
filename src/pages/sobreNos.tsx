import NavbarSobreNos from "../components/NavbarSobreNos";
import "./LandingPage.css";

import iuriImg from "../assets/imgs/yuri.png";
import sandersonImg from "../assets/imgs/sand.png";
import hugoImg from "../assets/imgs/hugo.png";
import guaritaImg from "../assets/imgs/guarita.png";
import pedroImg from "../assets/imgs/pedro.png";

export default function Sobre() {
  return (
    <div className="landing-page bg-white text-dark min-vh-100 hero-section">
      <NavbarSobreNos />

    <div className="d-flex flex-column align-items-center text-center py-5 mx-auto"
        style={{ maxWidth: "650px"}}>

        <div className="d-flex flex-row align-items-center mb-3">
            <img src="./src/assets/imgs/logo_loginPage.png"
            alt="logo_vitalitas"
            style={{ width: "45px"}}
            />

            <h1 className="fw-bold m-1">VITALITAS</h1>
        </div>

        <p className="my-2 fw-bold" style={{ fontSize: "1.1rem" }}>
            O Vitalitas é uma plataforma de gestão de academias.
        </p>
        
        <p style={{ fontSize: "1.05rem" }}>
            Nossa missão é facilitar o dia a dia de academias, oferecendo ferramentas intuitivas
            para gerenciar treinos, matrículas, pagamentos e comunicação, promovendo saúde, 
            bem-estar e organização.
        </p>

    </div>
      <h2 className="my-5 text-center fw-bold">Nossa Equipe</h2>

      <div className="container">
        <div className="row justify-content-center">

          <div className="col-12 col-md-4 d-flex justify-content-center my-3">
            <div className="card border-0 text-center" style={{ width: "18rem" }}>
              <img
                src={sandersonImg}
                className="rounded-circle mx-auto d-block"
                alt="Sanderson"
                style={{ width: "160px", height: "160px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Sanderson de Oliveira Machado</h5>
                <p className="card-text">
                  Define prioridades do produto e organiza o backlog; Conduz as cerimônias do Scrum e remove impedimentos; Responsável pelo desenvolvimento da API.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 d-flex justify-content-center my-3">
            <div className="card border-0 text-center" style={{ width: "18rem" }}>
              <img
                src={iuriImg}
                className="rounded-circle mx-auto d-block"
                alt="Iuri"
                style={{ width: "160px", height: "160px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Iuri Guimarães Pinheiro</h5>
                <p className="card-text">
                  Atua no desenvolvimento do front-end, integração com a API e construção de interfaces responsivas.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 d-flex justify-content-center my-3">
            <div className="card border-0 text-center" style={{ width: "18rem" }}>
              <img
                src={hugoImg}
                className="rounded-circle mx-auto d-block"
                alt="Hugo"
                style={{ width: "160px", height: "160px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Hugo Ferreira Matos</h5>
                <p className="card-text">
                  Suporte no desenvolvimento do sistema, testes e otimização do fluxo de usuário.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 d-flex justify-content-center my-3">
            <div className="card border-0 text-center" style={{ width: "18rem" }}>
              <img
                src=""
                className="rounded-circle mx-auto d-block"
                alt="Giovanna"
                style={{ width: "160px", height: "160px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Giovanna Couto</h5>
                <p className="card-text">
                  Levantamento e análise de requisitos; Organização das histórias de usuário; Documentação do sistema
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 d-flex justify-content-center my-3">
            <div className="card border-0 text-center" style={{ width: "18rem" }}>
              <img
                src={guaritaImg}
                className="rounded-circle mx-auto d-block"
                alt="Guraitá"
                style={{ width: "160px", height: "160px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Arthur Guaritá Brasil</h5>
                <p className="card-text">
                  Criação das telas, prototipação e design; Define a experiência de navegação e usabilidade; Alinha o visual do sistema com a equipe de desenvolvimento; Desenvolvimento das interfaces e integração com a API
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 d-flex justify-content-center my-3">
            <div className="card border-0 text-center" style={{ width: "18rem" }}>
              <img
                src={pedroImg}
                className="rounded-circle mx-auto d-block"
                alt="Pedro"
                style={{ width: "160px", height: "160px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Pedro Souza de Abreu</h5>
                <p className="card-text">
                  Apoia no desenvolvimento da API e manutenção do código; Implementa funcionalidades no servidor; Garante integração com o front-end
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}