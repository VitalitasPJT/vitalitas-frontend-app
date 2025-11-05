import { Link } from "react-router-dom";
import NavbarLandingPage from "../components/NavbarLandingPage";
import gymMan from "../assets/imgs/main_img_landingPage.png";
import agendarImg from "../assets/imgs/imagem1.png";
import centralizarImg from "../assets/imgs/imagem2.png";
import contratoImg from "../assets/imgs/imagem3.png";
import yuriImg from "../assets/imgs/yuri.png";
import tutuImg from "../assets/imgs/tutu.png";
import sandersonImg from "../assets/imgs/sand.png";
import "./LandingPage.css";

export default function LandingPage() {
  const servicos = [
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
  ];

  const depoimentos = [
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
  ];

  return (
    <div className="landing-page bg-white text-dark min-vh-100 hero-section">
      <NavbarLandingPage />

      {/* HERO SECTION */}
      <section className="hero-section container-fluid position-relative">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-12 hero-text d-flex flex-column">
            <h1 className="hero-title">
              A EVOLUÇÃO QUE <br /> SUA ACADEMIA <br /> PRECISA
            </h1>
            <p className="hero-subtext">
              O Vitalitas transforma a gestão da sua academia, conectando treinos,
              matrículas, pagamentos e comunicação em uma experiência única, ágil e
              descomplicada.
            </p>
            <p className="hero-subtext">
              Torne-se nosso parceiro e se junte às academias que já estão
              simplificando a gestão com o Vitalitas.
            </p>
            <Link to="/cadastro" className="btn_redColor w-25 mt-4">
              JUNTE-SE AGORA
            </Link>
          </div>
        </div>

        {/* MÁSCARA PRETA + IMAGEM */}
        <div className="mask-group d-none d-md-flex">
          <div className="mask-overlay"></div>
          <img src={gymMan} alt="Homem musculoso" className="gym-man" />
        </div>
      </section>

      {/* SEÇÃO DE SERVIÇOS + DEPOIMENTOS */}
      <section id="servicos" className="services-section container-fluid shadow-section">
        <div className="row text-center mb-5">
          {servicos.map((card, i) => (
            <div key={i} className="col-md-4 col-sm-12 mb-4">
              <div className="card service-card h-100">
                <img src={card.img} alt={card.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="fw-semibold">{card.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row text-center">
          {depoimentos.map((person, i) => (
            <div key={i} className="col-md-4 col-sm-12 mb-4">
              <div className="card testimonial-card h-100 p-4">
                <p className="text-secondary">“{person.text}”</p>
                <div className="d-flex align-items-center gap-3 mt-3 justify-content-center">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="rounded-circle"
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
