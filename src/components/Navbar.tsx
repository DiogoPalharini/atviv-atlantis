import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../images/logo.webp'; // Importe a imagem da logo
import user from '../images/user.webp'; // Importe a imagem do ícone de usuário

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* Logo e Título */}
                <div className="logo-container">
                    <img src={logo} alt="Logo Atlatis" className="logo-image" />
                    <Link className="logo" to="/">Atlantis</Link>
                </div>
                {/* Botão de Login e Ícone de Usuário */}
                <div className="user-container">
                    <img src={user} alt="Usuário" className="user-icon" />
                    <Link to="/login" className="login-button">Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
