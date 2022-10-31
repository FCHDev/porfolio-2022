import React from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import WebIcon from '@mui/icons-material/Web';
import PsychologyIcon from '@mui/icons-material/Psychology';
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import html from "../assets/logos/html.png";
import css from "../assets/logos/css.png";
import js from "../assets/logos/javascript.png";
import react from "../assets/logos/react.png";
import firebase from "../assets/logos/firebase.svg";
import next from "../assets/logos/next-js.svg";
import mui from "../assets/logos/mui.png";
import tailwind from "../assets/logos/tailwind.png";
import affinityphoto from "../assets/logos/affinityphoto.png";
import affinitydesigner from "../assets/logos/affinitydesigner.png";


const Speech = () => {
    return (
        <div className="speech">

            <h2>Parcours</h2>
            <p style={{marginBottom: "1vh"}}>Après plus d’une dizaine d’années à évoluer dans des fonctions Sales et managériales au sein de grands
                groupes, je suis aujourd’hui développeur front end indépendant.<br/>
                Je mets à profit cette expérience afin de conseiller et d’accompagner au mieux mes clients, aussi bien
                techniquement, que sur une approche métier plus globale.</p>

            <Accordion style={{borderRadius: "10px", backgroundColor: "transparent", color: "white"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{color:"white"}}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{paddingLeft:"0", marginBottom: "3vh", fontWeight: "bold", color: "#f7ce03"}}
                >
                        En savoir plus...
                </AccordionSummary>
                <AccordionDetails>
                    <p><span className="whatiam-span">Ce que je fais <WebIcon fontSize={"large"} style={{color: "#f7ce03"}}/></span><br/>
                        J’ai choisi ReactJS/TS pour sa souplesse, sa robustesse et pour sa très vaste communauté de
                        développeuses et développeurs.<br/>
                        Autodidacte dans l’âme, je maîtrise aujourd’hui une stack technique moderne (cf ci-dessous) me
                        permettant de pouvoir réaliser en toute autonomie, les projets de sites ou d’applications web que vous
                        envisagez.<br/>
                        Bien que n’étant pas Designer, j’accorde une attention toute particulière à l’interface graphique (UI)
                        et à l’expérience utilisateur (UX) y étant associée. </p>

                    <p><span className="whatiam-span">Ce que je suis <PsychologyIcon fontSize={"large"} style={{color: "#f7ce03"}}/></span><br/>
                        <ArrowForwardIosIcon style={{paddingBottom: "4px"}}/>
                        « <strong>Solutionniste</strong> » <span style={{fontStyle: "italic"}}>(subst. et adj. (Celui, celle) qui cherche systématiquement une, des solution(s) Source: CNRS).</span> :
                        j’aime appréhender des problèmes et découvrir/rechercher leurs solutions, c’est ma plus grande source de
                        motivation.<br/>

                        <ArrowForwardIosIcon style={{paddingBottom: "4px"}}/>
                        <strong>Curieux</strong> : j’aime comprendre les sujets en profondeur pour me les approprier, les
                        partager, et les utiliser à bon escient.<br/>

                        <ArrowForwardIosIcon style={{paddingBottom: "4px"}}/>
                        <strong>Bon communiquant</strong> : je me mets aisément à la place de mon interlocuteur, ce qui me
                        permet de m’aligner rapidement avec lui/elle et de m’adapter à beaucoup de situations. Mieux vaut trop
                        communiquer que pas assez.<br/>

                        <ArrowForwardIosIcon style={{paddingBottom: "4px"}}/>
                        <strong>Enjoué</strong> : je vois la vie de manière très positive et toujours avec le sourire.</p>
                </AccordionDetails>
            </Accordion>



            <h2 style={{marginTop:"3vh"}}>Technos</h2>
            <p>Ci-dessous, la stack technique que je maitrise : </p>

            <ul>
                <li><ArrowForwardIosIcon style={{paddingBottom: "4px"}}/><b>Stack technique</b>* : HTML/CSS/JS, React,
                    NextJS, Goggle Firebase (pour la gestion du back)... quelques notions Python
                </li>
            </ul>
            <div className="logos-competences">
                <h3 id="technique-title">Technique</h3>

                <div className="logo-container">
                    {/*eslint-disable-next-line*/}
                    <a href="https://developer.mozilla.org/fr/docs/Web/HTML"
                       target="_blank"
                       rel="noopener">
                        <img src={html} alt="HTML"/>
                    </a>
                    {/*eslint-disable-next-line*/}
                    <a href="https://developer.mozilla.org/fr/docs/Web/CSS"
                       target="_blank"
                       rel="noopener">
                        <img src={css} alt="CSS"/>
                    </a>

                    {/*eslint-disable-next-line*/}
                    <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
                       target="_blank"
                       rel="noopener">
                        <img src={js} alt="JS"/>
                    </a>
                    {/*eslint-disable-next-line*/}
                    <a href="https://fr.reactjs.org/"
                       target="_blank"
                       rel="noopener">
                        <img src={react} alt="React"/>
                    </a>
                    {/*eslint-disable-next-line*/}
                    <a href="https://nextjs.org/"
                       target="_blank"
                       rel="noopener">
                        <img src={next} alt="NextJS"/>
                    </a>
                    {/*eslint-disable-next-line*/}
                    <a href="https://firebase.google.com/"
                       target="_blank"
                       rel="noopener">
                        <img src={firebase} alt="Firebase"/>
                    </a>
                    {/*eslint-disable-next-line*/}
                </div>
            </div>
            <ul style={{marginTop: "2em"}}>
                <li><ArrowForwardIosIcon style={{paddingBottom: "4px"}}/><b>Stack créative</b>* :
                    TailwindCSS, MUI
                    (ex-Material UI), Affinity Photo et Affinity Designer
                </li>
            </ul>
            <div className="logos-competences">
                <h3 id="creation-title">Création</h3>
                <div className="logo-container">
                    {/*eslint-disable-next-line*/}
                    <a href="https://tailwindcss.com/"
                       target="_blank"
                       rel="noopener">
                        <img src={tailwind} alt="Tailwind CSS"/>
                    </a>
                    {/*eslint-disable-next-line*/}
                    <a href="https://mui.com/"
                       target="_blank"
                       rel="noopener">
                        <img src={mui} alt="Material UI"/>
                    </a>
                    {/*eslint-disable-next-line*/}
                    <a href="https://affinity.serif.com/fr/photo/"
                       target="_blank"
                       rel="noopener">
                        <img src={affinityphoto} alt="Affinity Logo"/>
                    </a>
                    {/*eslint-disable-next-line*/}
                    <a href="https://affinity.serif.com/fr/designer/"
                       target="_blank"
                       rel="noopener">
                        <img src={affinitydesigner} alt="Affinity Designer"/>
                    </a>
                </div>
            </div>
            <span style={{fontSize: "0.8em"}}><i>*Cliquez sur un logo pour consulter sa documentation.</i></span>

        </div>
    );
};

export default Speech;