import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-md bg-white fixed-top shadow-sm py-3" style={{ zIndex: 1000 }}>
            <div className="container-fluid px-4">

                {/* Logo + Nome */}
                <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
                    <img
                        src="./src/assets/imgs/logo_loginPage.png"
                        alt="logo_vitalitas"
                        style={{ width: "35px" }}
                    />
                    <h1 className="font-title mb-0" style={{ fontSize: "20px" }}>VITALITAS</h1>
                </Link>

                {/* Botão Hamburguer */}
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarMenu"
                    aria-controls="navbarMenu"
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                >
                    <i className={`bi ${open ? "bi-x-lg" : "bi-list"} fs-2`}></i>
                </button>

                {/* MENU */}
                <div className="collapse navbar-collapse" id="navbarMenu">

                    {/* ESQUERDA*/}
                    <ul className="navbar-nav ms-md-4 gap-md-4 gap-3
                   flex-md-row flex-column 
                   align-items-md-center align-items-center 
                   mt-3 mt-md-0 text-center text-md-start">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-dark font-nav hover-link">
                                Home
                            </Link>
                        </li>
                    </ul>

                    {/* DIREITA*/}
                    <div className="d-flex flex-md-row flex-column 
                    align-items-md-center align-items-center 
                    justify-content-md-end 
                    gap-md-4 gap-3 
                    mt-4 mt-md-0 ms-md-auto text-center text-md-end">

                        <div className="d-flex align-items-center gap-2">
                            <i className="bi bi-globe text-dark"></i>
                            <span className="text-dark font-nav">PT-BR</span>
                        </div>

                        <Link to="/ajuda" className="text-dark font-nav text-decoration-none hover-link">
                            Ajuda
                        </Link>

                        <Link to="/parceiro" className="text-dark font-nav text-decoration-none hover-link">
                            Seja Parceiro
                        </Link>

                        <Link
                            to="/vitalitas/user/login"
                            className="btn_blackColor navbar-button rounded-pill px-4 fw-bold fs-6"
                        >
                            ACESSAR
                        </Link>
                    </div>
                </div>

            </div>

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
