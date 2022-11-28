import React from 'react';
import ContactButton from "./ContactButton";

const CardTarif = () => {
    return (
            <div className="tarif-card">
                <h2><strong>Taux journalier</strong></h2>
                <h3><span>€</span>400<span className="jourOuMois">/jour</span></h3>
                <p>Taux journalier moyen</p>
                <p><em>Travail à distance</em></p>
                <ContactButton />
            </div>
    );
};

export default CardTarif;