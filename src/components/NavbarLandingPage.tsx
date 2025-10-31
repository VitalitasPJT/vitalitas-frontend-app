// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav
            className="navbarLandingPage container-fluid border-top border-dark fixed-top bg-white py-3 shadow-sm"
            style={{ zIndex: 1000 }}
        >
            <div className="row align-items-center px-4">
                {/* ESQUERDA - Logo + Nome */}
                <div className="col-md-3 d-flex align-items-center gap-2">
                    <img
                        src="./src/assets/imgs/logo_loginPage.png"
                        alt="logo_vitalitas"
                        className="img-fluid"
                        style={{ maxWidth: '35px', height: 'auto' }}
                    />
                    <h1
                        className="font-nav mb-0"
                        style={{ color: '#000', letterSpacing: '-0.5px' }}
                    >
                        VITALITAS
                    </h1>

                    <ul className="nav fw-semibold">
                        <li className="nav-item mx-3">
                            <Link to="/servicos" className="nav-link text-dark hover-link">
                                Serviços
                            </Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to="/contato" className="nav-link text-dark hover-link">
                                Contato
                            </Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to="/sobre" className="nav-link text-dark hover-link">
                                Sobre nós
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* DIREITA - Idioma, Ajuda, Parceiro e Botão */}
                <div className="col-md-4 d-flex justify-content-end align-items-center gap-4">
                    <span className="fw-semibold text-dark">PT-BR</span>
                    <Link to="/ajuda" className="text-dark fw-semibold text-decoration-none hover-link">
                        Ajuda
                    </Link>
                    <Link to="/parceiro" className="text-dark fw-semibold text-decoration-none hover-link">
                        Seja Parceiro
                    </Link>
                    <Link
                        to="/login"
                        className="btn btn-dark rounded-pill px-4 fw-bold"
                        style={{ fontSize: '0.9rem' }}
                    >
                        ACESSAR
                    </Link>
                </div>
            </div>

            {/* Pequeno CSS inline para hover */}
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
