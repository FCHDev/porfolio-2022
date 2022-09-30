import React from 'react';
import ContactButton from "./ContactButton";

const CardTarif = () => {
    return (
            <div className="tarif-card">
                <h2><strong>Taux journalier</strong></h2>
                <h1><span>€</span>350<span>/jour</span></h1>
                <p>Taux journalier moyen</p>
                <p><em>Travail à distance</em></p>
                <ContactButton />
            </div>
    );
};

export default CardTarif;