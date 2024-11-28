import React from 'react';
import '../styles/home.css';
import homeImage from '../images/home.webp';
import { useNavigate } from 'react-router-dom'; // Importação para navegação

const Home: React.FC = () => {
    const navigate = useNavigate(); // Hook para navegação

    const handleButtonClick = () => {
        navigate('/accommodations'); // Redireciona para a página de acomodações
    };

    return (
        <div>
            {/* Hero Section */}
            <header className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Bem-vindo ao Atlantis</h1>
                    <p className="hero-subtitle">
                        Gerencie clientes, acomodações e hospedagens de forma eficiente e prática.
                    </p>
                </div>
                {/* Imagem inserida aqui */}
                <div className="hero-image">
                    <img src={homeImage} alt="Imagem representando Atlantis" className="home-image" />
                </div>
                {/* Botão para as acomodações */}
                <div className="hero-button-container">
                    <button className="hero-button" onClick={handleButtonClick}>
                        Ver Acomodações
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Home;
