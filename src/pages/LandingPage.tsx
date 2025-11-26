import { Link } from "react-router-dom";
import NavbarLandingPage from "../components/NavbarLandingPage";
import gymMan from "../assets/imgs/main_img_landingPage.png";
import agendarImg from "../assets/imgs/card1.jpg";
import centralizarImg from "../assets/imgs/card2.jpg";
import contratoImg from "../assets/imgs/card3.jpg";
import yuriImg from "../assets/imgs/yuri.png";
import tutuImg from "../assets/imgs/tutu.png";
import sandersonImg from "../assets/imgs/sand.png";
import vitPhoneImg from "../assets/imgs/vitalitasHomemCelular.png";
import rankingTv from "../assets/imgs/rankingTv.png";

import FeatureCarousel from "../components/FeatureCarousel";
import type { FeatureData } from "../components/FeatureCarousel";

import ContatoSection from "../components/ContatoSection";

import treinoImg2 from "../assets/imgs/imgsFunctionsLandingPage/treino1.png";
import treinoImg1 from "../assets/imgs/imgsFunctionsLandingPage/treino2.png";

import avalImg1 from "../assets/imgs/imgsFunctionsLandingPage/avaliacao1.png";
import avalImg2 from "../assets/imgs/imgsFunctionsLandingPage/avaliacao2.png";

import gestImg1 from "../assets/imgs/imgsFunctionsLandingPage/gestao1.png";

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

  const features: Record<"treinos" | "avaliacoes" | "gestao", FeatureData> = {
  treinos: {
    title: "Professores e alunos em busca do melhor treino",
    description:
      "Treinos personalizados para alunos, criados em segundos pelos professores.",
    images: [treinoImg1, treinoImg2],
  },
  avaliacoes: {
    title: "Avaliações físicas completas",
    description:
      "Acompanhe medidas, evolução e histórico das avaliações dos alunos.",
    images: [avalImg1, avalImg2],
  },
  gestao: {
    title: "Gestão completa da academia",
    description:
      "Administre planos, mensalidades, pagamentos e professores de forma simples.",
    images: [gestImg1],
  },
};

console.log(features.treinos.images);

  return (
    <div className="landing-page bg-white text-dark min-vh-100 hero-section">
      <NavbarLandingPage />

      {/* HERO SECTION */}
      <section className="hero-section d-flex align-items-center justify-content-between container-fluid position-relative">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-12 hero-text d-flex flex-column">
            <h1 className="hero-title">
              A EVOLUÇÃO QUE <br /> SUA ACADEMIA <br /> PRECISA
            </h1>
            <p className="hero-subtext font-text mt-3">
              O Vitalitas transforma a gestão da sua academia, conectando treinos,
              matrículas, pagamentos e comunicação em uma experiência única, ágil e
              descomplicada.
            </p>
            <p className="hero-subtext font-text">
              Torne-se nosso parceiro e se junte às academias que já estão
              simplificando a gestão com o Vitalitas.
            </p>
            <Link to="/cadastro" className="btn_redColor join-btn mt-4">
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

      {/* SEÇÃO DE SERVIÇOS */}
      <section id="servicos" className="services-section container-fluid shadow-section">
        <div className="row text-center mb-5">
          {servicos.map((card, i) => (
            <div key={i} className="col-md-4 col-sm-12 mb-4">
              <div className="card service-card"
                style={{ borderRadius: '16px'}}>
                <img src={card.img} alt={card.title} className="card-img-top service-img" />
                <div className="card-body">
                  <h5 className="fw-semibold">{card.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SEÇÃO DE DEPOIMENTOS */}
        <section id="depoimentos" className="container-fluid">
          <div className="row text-center">
            {depoimentos.map((person, i) => (
              <div key={i} className="col-md-4 col-sm-12 mb-4">
                <div className="card testimonial-card h-100 p-4">
                  <p className="text-secondary">“{person.text}”</p>
                  <div className="d-flex align-items-center gap-3 mt-3 justify-content-center">
                    <img src={person.img} alt={person.name} className="rounded-circle" />
                    <p className="mb-0 fw-semibold text-dark">{person.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </section>
      </section>

        {/* SEÇÃO - TUDO EM UM SÓ LUGAR */}
        <section id="tudo-em-um-so-lugar" className="container-fluid tudo-em-um-lugar-block">

          <div className="row align-items-center justify-content-center">

            {/* IMAGEM */}
            <div className="col-lg-5 col-md-6 col-12 text-center mb-4 mb-md-0">
              <img
                src={vitPhoneImg}
                alt="Aplicativo Vitalitas"
                className="img-fluid phone-promo-img"
              />
            </div>

            {/* TEXTO */}
            <div className="col-lg-5 col-md-6 col-12">
              <h2 className="font-title fs-1 mb-4">TUDO EM UM SÓ LUGAR</h2>

              <div className="d-flex align-items-center mb-3">
                <div className="promo-icon">
                  <i className="bi bi-lightning-charge-fill"></i>
                </div>
                <p className="mb-0 font-text fs-4 ms-3">Transformação Digital</p>
              </div>

              <div className="d-flex align-items-center mb-3">
                <div className="promo-icon">
                  <i className="bi bi-people-fill"></i>
                </div>
                <p className="mb-0 font-text fs-4 ms-3">Experiência completa para todos</p>
              </div>

              <div className="d-flex align-items-center">
                <div className="promo-icon">
                  <i className="bi bi-globe2"></i>
                </div>
                <p className="mb-0 font-text fs-4 ms-3">Tecnologia que impulsiona resultados</p>
              </div>
            </div>

          </div>
        </section>

        {/* RANKING */}
        {/* SEÇÃO - RANKING */}
        <section id="ranking" className="container-fluid py-5">

          <div className="row align-items-center justify-content-center">

            <div className="col-lg-5 col-md-6 col-12">
              <div className="ranking-title text-center my-5">
                <h2 className="ranking-main-title">RANKING</h2>
                <h3 className="ranking-subtitle">DINÂMICO EM TEMPO REAL</h3>
              </div>

              <div className="ranking-image-container text-center">
                <img src={rankingTv} alt="Ranking TV" className="ranking-tv-img" />
              </div>
            </div>

          </div>

        </section>

        {/* SEÇÃO - FUNCIONALIDADES */}

        <FeatureCarousel features={features} initialTab="treinos" />

        {/* SEÇÃO - CONTATO */}
      <ContatoSection></ContatoSection>

    </div>
  );
}
