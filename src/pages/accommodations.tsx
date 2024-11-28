import React from 'react';
import '../styles/accommodations.css';

const accommodations = [
    {
        id: 1,
        name: 'Suíte Luxo',
        description: 'Uma suíte luxuosa com vista para o mar, cama king-size e banheira de hidromassagem.',
        price: 'R$ 500/noite',
        image: 'https://via.placeholder.com/300x200', // Substitua com o link da imagem real
    },
    {
        id: 2,
        name: 'Quarto Standard',
        description: 'Um quarto confortável com cama queen-size, ideal para viagens de negócios.',
        price: 'R$ 300/noite',
        image: 'https://via.placeholder.com/300x200', // Substitua com o link da imagem real
    },
    {
        id: 3,
        name: 'Chalé Família',
        description: 'Espaçoso chalé para toda a família, com 2 quartos e cozinha equipada.',
        price: 'R$ 700/noite',
        image: 'https://via.placeholder.com/300x200', // Substitua com o link da imagem real
    },
];

const Accommodations: React.FC = () => {
    return (
        <div className="accommodations-container">
            <h1 className="accommodations-title">Nossas Acomodações</h1>
            <div className="accommodations-list">
                {accommodations.map((accommodation) => (
                    <div className="accommodation-card" key={accommodation.id}>
                        <img
                            src={accommodation.image}
                            alt={accommodation.name}
                            className="accommodation-image"
                        />
                        <div className="accommodation-info">
                            <h2 className="accommodation-name">{accommodation.name}</h2>
                            <p className="accommodation-description">{accommodation.description}</p>
                            <p className="accommodation-price">{accommodation.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accommodations;
