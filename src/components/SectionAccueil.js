import React from 'react';
import Navigation from "./Navigation";
import Speech from "./Speech";
import PP from "./PP";


const Section1 = () => {
    return (
        <div className="section1" id="section1">
            <Navigation/>
            <h1>Portfolio</h1>
            <PP />
            <h2>François Chevalier</h2>
            <span><em>Développeur Front End React JS</em></span>
            <Speech/>
        </div>
    );
};

export default Section1;