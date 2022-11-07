import React from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import WebIcon from '@mui/icons-material/Web';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SearchIcon from '@mui/icons-material/Search';
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
import bootstrap from "../assets/logos/bootstrap.png";
import affinityphoto from "../assets/logos/affinityphoto.png";
import affinitydesigner from "../assets/logos/affinitydesigner.png";


const Speech = () => {
    return (
        <div className="speech">

            <h2 style={{fontWeight: "bold"}}>Parcours</h2>
            <p style={{marginBottom: "1vh"}}>Après plus d’une dizaine d’années à évoluer dans des fonctions de Sales Executive, de chef de projet et de manager au sein de grands
                groupes, je suis aujourd’hui développeur front end indépendant.<br/><br/>
                Durant cette carrière, j'ai conseillé mes clients sur leurs <span style={{fontWeight: "bold"}}>stratégies digitales et commerciales</span>  afin de les aider à développer leur CA et améliorer leurs expériences utilisateurs.<br/>
                Je mets à profit ces connaissances dans le but de conseiller et d’accompagner au mieux mes clients, aussi bien
                techniquement, que sur une approche métier plus globale.</p>

            <Accordion style={{borderRadius: "10px", backgroundColor: "transparent", color: "white"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{color:"white"}}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{paddingLeft:"0", marginBottom: "3vh", fontWeight: "bold", color: "#f7ce03"}}
                >
                        Lire la suite...
                </AccordionSummary>
                <AccordionDetails>
                    <p><span className="whatiam-span">Ce que je fais <WebIcon fontSize={"large"} style={{color: "#f7ce03"}}/></span><br/>
                        J’ai choisi <span style={{fontWeight: "bold", color: "#f7ce03"}}>ReactJS</span> pour sa souplesse, sa robustesse et pour sa très vaste communauté de
                        développeuses et développeurs.<br/>
                        Autodidacte dans l’âme, je maîtrise aujourd’hui une stack technique moderne (cf ci-dessous) me
                        permettant de pouvoir réaliser en toute autonomie, les projets de sites ou d’applications web que vous
                        souhaitez réaliser.<br/>
                        Bien que n’étant pas Designer, j’accorde une attention toute particulière à l’interface graphique (UI)
                        et à l’expérience utilisateur (UX) y étant associée. <br/> <br/>
                        <span style={{fontWeight: "bold"}}>Ce que j’aime le plus</span> :
                        les choses claires, précises, intuitives et dans le respect des délais.</p>

                    <p><span className="whatiam-span">Ce que je suis <PsychologyIcon fontSize={"large"} style={{color: "#f7ce03"}}/></span><br/>
                        <ArrowForwardIosIcon style={{paddingBottom: "4px"}}/>
                        <strong style={{color: "#f7ce03"}}>"Solutionniste"</strong> <span style={{fontStyle: "italic"}}>(subst. et adj. (Celui, celle) qui cherche systématiquement une, des solution(s) Source: CNRS).</span> :
                        j’aime appréhender des problèmes et découvrir/rechercher leurs solutions, c’est ma plus grande source de
                        motivation.<br/>

                        <ArrowForwardIosIcon style={{paddingBottom: "4px"}}/>
                        <strong style={{color: "#f7ce03"}}>Curieux</strong> : j’aime comprendre les sujets en profondeur pour me les approprier, les
                        partager, et les utiliser à bon escient.<br/>

                        <ArrowForwardIosIcon style={{paddingBottom: "4px"}}/>
                        <strong style={{color: "#f7ce03"}}>Bon communiquant</strong> : je me mets aisément à la place de mon interlocuteur, ce qui me
                        permet de m’adapter à beaucoup de situations. Mon expérience en tant que chef de projet m'a fait rencontrer de nombreux types de métiers (ventes, marketing, IT, logistique, ...) et d'organisation projet.<br/>

                        <ArrowForwardIosIcon style={{paddingBottom: "4px"}}/>
                        <strong style={{color: "#f7ce03"}}>Enjoué</strong> : je vois la vie de manière très positive et toujours avec le sourire. <br/>

                        <ArrowForwardIosIcon style={{paddingBottom: "4px"}}/>
                        <strong style={{color: "#f7ce03"}}>Vie personnelle</strong> : Passionné par les technologies quelqu’elles soient et "gamer" dans l'âme, je suis également très sensible aux sujets liés à l’environnement et au changement climatique. <br/>
                        J'aime pratiquer régulièrement le tennis, la guitare ou le piano.
                        Enfin, quand je ne suis pas devant un écran d'ordinateur, j’aime profiter de la vie avec mon épouse, mes 2 enfants et mes amis.</p>

                    <p><span className="whatiam-span">Ce que je cherche <SearchIcon fontSize={"large"} style={{color: "#f7ce03"}}/></span><br/>
                        Je recherche, en priorité, des projets de développement de sites ou d'applications web, intégrant la partie technique, UX, optimisation du SEO. <br/>
                    Je travaille sur toutes les tailles de projets : landing page, application blog, site e-commerce personnalisé, console de gestion, refactoring d'une code base existante, maintenance, application spécifique... <br/> <br/>
                        <span style={{fontWeight: "bold"}}>La "crème de la crème" </span>: idéalement, un projet lié à la cause environnementale (changement climatique, déforestation ou biodiversité par exemple) </p>

                </AccordionDetails>
            </Accordion>



            <h2 style={{marginTop:"3vh", fontWeight: "bold"}}>Technos</h2>
            <p>Ci-dessous, la stack technique que je maitrise : </p>

            <ul>
                <li><ArrowForwardIosIcon style={{paddingBottom: "4px"}}/><b>Stack technique</b>* : HTML/CSS/JS, React,
                    NextJS, Goggle Firebase (gestion backend)
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
                    TailwindCSS, Bootstrap, MUI
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
                    <a href="https://getbootstrap.com/"
                       target="_blank"
                       rel="noopener">
                        <img src={bootstrap} alt="bootstrap CSS"/>
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