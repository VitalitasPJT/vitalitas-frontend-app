// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav
            className="navbarLandingPage container-fluid fixed-top bg-white py-3 shadow-sm"
            style={{ zIndex: 1000 }}
        >
            <div className="row align-items-center px-4 justify-content-between">
                {/* ESQUERDA - Logo + Nome + Nav */}
                <div className="col-md-6 d-flex align-items-center">
                    {/* Logo + Nome */}
                    <div className="d-flex align-items-center gap-2 me-4">
                        <img
                            src="./src/assets/imgs/logo_loginPage.png"
                            alt="logo_vitalitas"
                            className="img-fluid"
                            style={{ maxWidth: '35px', height: 'auto' }}
                        />
                        <h1
                            className="font-title mb-0"
                            style={{ color: '#000', fontSize: '20px' }}
                        >
                            VITALITAS
                        </h1>
                    </div>

                    {/* Itens de Navegação */}
                    <ul className="nav">
                        <li className="nav-item font-nav"
                            >
                            <Link to="/servicos" className="nav-link text-dark hover-link">
                                Serviços
                            </Link>
                        </li>
                        <li className="nav-item font-nav"
                            >
                            <Link to="/contato" className="nav-link text-dark hover-link">
                                Contato
                            </Link>
                        </li>
                        <li className="nav-item font-nav"
                            >
                            <Link to="/sobre" className="nav-link text-dark hover-link">
                                Sobre nós
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* DIREITA - Idioma, Ajuda, Parceiro e Botão */}
                <div className="col-md-6 d-flex justify-content-end align-items-center gap-4">
                    <div className="d-flex align-items-center gap-2">
                        <i className="bi bi-globe text-dark"></i>
                        <span className="text-dark font-nav">PT-BR</span> {/* fazer dps essa parte ser clicavel e mudar o idioma?*/ }
                    </div>

                    <Link to="/ajuda" className="text-dark font-nav text-decoration-none hover-link">
                        Ajuda
                    </Link>
                    <Link to="/parceiro" className="text-dark font-nav text-decoration-none hover-link">
                        Seja Parceiro
                    </Link>
                    <Link
                        to="/login"
                        className="btn_blackColor rounded-pill px-4 fw-bold"
                        style={{ fontSize: '0.9rem'}}
                    >
                        ACESSAR
                    </Link>
                </div>

            </div>

            {/* Estilo hover para os links */}
            <style>
                {`
                .hover-link:hover {
                    color: #dc3545 !important;
                    transition: color 0.3s ease;
                }
                `}
            </style>
        </nav>
    );
};

export default Navbar;
