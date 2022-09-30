import React from 'react';
import Navigation from "./Navigation";
import CardTarif from "./CardTarif";
import CardTarifManage from "./CardTarifManage";

const SectionTarifs = () => {
    return (
        <div className="section4" id="section4">
            <Navigation/>
            <h1>Tarifs</h1>
            <div className="tarifs-cards-container">

                <CardTarif/>
                <CardTarifManage/>
            </div>
        </div>
    );
};

export default SectionTarifs;