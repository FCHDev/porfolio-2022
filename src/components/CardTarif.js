import React from "react";
import ContactButton from "./ContactButton";

const CardTarif = () => {
  return (
    <div className="tarif-card">
      <h2>
        <strong>Taux journalier</strong>
      </h2>
      <h4>À définir selon le besoin</h4>
      <p>
        <em>Travail à distance</em>
      </p>
      <ContactButton />
    </div>
  );
};

export default CardTarif;
