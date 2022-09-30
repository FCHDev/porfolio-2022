import React from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import html from "../assets/logos/html.png";
import css from "../assets/logos/css.png";
import js from "../assets/logos/javascript.png";
import react from "../assets/logos/react.png";
import python from "../assets/logos/python.png";
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
            <p>Je suis développeur web Front-End spécialisé sur le langage de programmation <strong>React</strong> un
                langage qui permettra à votre projet d'être extrêmement rapide, et facilement maintenable. </p>
            <p>Front-End signifie que le développeur se focalise exclusivement sur la partie visible de l'iceberg,
                autrement dit la partie visible sur les écrans de navigation, c'est d'ailleurs sur ce front, que je suis
                le meilleur... Un projet web a deux dimensions le Front-End que l'on vient de voir et le back-End (la
                partie données & serveur) pour simplifier c'est notre partie obscure de la force...) </p>
            <p>De manière très générale, je suis le bon partenaire pour créer tous types de projets web, que ce soit la
                simple création d'un site internet à l'application web, cependant mon domaine de compétences encadre des
                projets se voulant "sur mesure" "connectés a d'autres services (API)", mais surtout "à la pointe de la
                technologie".</p>

            <h2>Technos</h2>
            <p>Ci-dessous, la stack technique que je maitrise. On peut la diviser en 2 catégories : </p>

            <ul>
                <li><ArrowForwardIosIcon style={{paddingBottom: "4px"}}/><b>Partie technique</b>* : HTML/CSS/JS, React (coeur du
                    réacteur 😃), NextJS, Goggle Firebase (pour la gestion du back)... quelques notions Python
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
                    <a href="https://docs.python.org/fr/3/"
                       target="_blank"
                       rel="noopener">
                        <img src={python} alt="Python"/>
                    </a>
                </div>
            </div>
            <ul style={{marginTop: "2em"}}>
                <li><ArrowForwardIosIcon style={{paddingBottom: "4px"}}/><b>Partie conception/création</b>* : TailwindCSS, MUI
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