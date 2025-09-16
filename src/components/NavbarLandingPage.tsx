// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav style={{ backgroundColor: '#000', color: '#fff', padding: '20px' }} className="navbarLandingPage navbar navbar-expand-lg border-top border-primary px-4 justify-content-between" >
            {/* Esquerda: Logo + Texto */}
            <div className="d-flex align-items-center gap-2">
                <img
                    src="./src/assets/imgs/logo_loginPage.png"
                    alt="logo_vitalitas"
                    className="img-fluid"
                    style={{ maxWidth: '70px', height: 'auto' }}
                />
                <h1 className="navbar-brand font-title fw-bold mb-0" style={{ color: '#fff' }}>VITALITAS</h1>
            </div>

            {/* Direita: Botão */}
            <div className="d-flex align-items-center">
                <Link to={'/login'} className="btn btn-danger rounded-pill px-4 fw-bold">
                    ACESSAR
                </Link>
            </div>
        </nav>

    );
};

export default Navbar;
