import React from 'react';
import Navigation from "./Navigation";
import Speech from "./Speech";
import PP from "./PP";
import network from "../assets/vid/Network.mp4"


const SectionAccueil = () => {
    return (
        <div className="section1" id="section1">
            <video src={network} autoPlay muted loop className="video-bg"/>
            <Navigation/>
            <h1 className="mt-3">Portfolio</h1>
            <PP/>
            <h2>François Chevalier</h2>
            <span id="profile-title"><em>Développeur Front End React JS</em></span>
            <Speech/>
        </div>
    );
};

export default SectionAccueil;