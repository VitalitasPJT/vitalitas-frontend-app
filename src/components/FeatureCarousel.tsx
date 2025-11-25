import { useState } from "react";
import "./FeatureCarousel.css";

export type FeatureData = {
  title: string;
  description: string;
  images: string[];
};

type FeatureCarouselProps = {
  features: Record<"treinos" | "avaliacoes" | "gestao", FeatureData>;
  initialTab: "treinos" | "avaliacoes" | "gestao";
};

const tabLabels: Record<"treinos" | "avaliacoes" | "gestao", string> = {
  treinos: "Treinos",
  avaliacoes: "Avaliações",
  gestao: "Gestão",
};

export default function FeatureCarousel({ features, initialTab }: FeatureCarouselProps) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentFeature = features[activeTab];

  function next() {
    setCurrentIndex((i) => (i + 1) % currentFeature.images.length);
  }

  function prev() {
    setCurrentIndex((i) => (i - 1 + currentFeature.images.length) % currentFeature.images.length);
  }

  return (
    <section className="feature-section container text-center py-5">

      <div className="feature-image-container">

        {/* LINHA DA IMAGEM + SETAS */}
        <div className="feature-image-row">

          <button className="feature-arrow" onClick={prev}>
            <i className="bi bi-chevron-left"></i>
          </button>

          <img
            src={currentFeature.images[currentIndex]}
            alt="feature"
            className="feature-image"
          />

          <button className="feature-arrow" onClick={next}>
            <i className="bi bi-chevron-right"></i>
          </button>

        </div>

        {/* TABS */}
        <div className="feature-tabs mt-4">
          {Object.keys(features).map((key) => (
            <button
              key={key}
              onClick={() => {
                setActiveTab(key as any);
                setCurrentIndex(0);
              }}
              className={`feature-tab ${activeTab === key ? "active" : ""}`}
            >
              {tabLabels[key as "treinos" | "avaliacoes" | "gestao"]}
            </button>
          ))}
        </div>


        {/* TÍTULO E TEXTO */}
        <h2 className="feature-title mt-4">{currentFeature.title}</h2>
        <p className="feature-description">{currentFeature.description}</p>

      </div>
    </section>
  );
}
