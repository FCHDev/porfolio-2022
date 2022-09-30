import React from 'react';
import ContactButton from "./ContactButton";

const CardTarifManage = () => {
    return (
            <div className="tarif-card">
                <h2><strong>Référencement / Maintenance</strong></h2>
                <h1><span>€</span>600<span>/mois</span></h1>
                <p>Mises à jour, Sauvegardes, Sécurité</p>
                <p>Optimisation : Rapidité & SEO</p>
                <ContactButton />
            </div>
    );
};

export default CardTarifManage;