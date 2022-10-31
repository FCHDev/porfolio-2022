//COVERS
import appCooking from "../assets/img/mockup_cooking.png";
import siteBali from "../assets/img/mockup_bali.png";
import appCountries from "../assets/img/mockup_countries.png";
import pizzaMama from "../assets/img/site-pizzamama.png";
import sliderPhotos from "../assets/img/sliderPhotos.png";
import multiLangues from "../assets/img/multi-languages.png";
import chrono from "../assets/img/mockup_chrono.png";
import agency from "../assets/img/mockup_webagency.png";
import guitarists from "../assets/img/mockup_guitarists.png";
import dailygreen from "../assets/img/mockup_dailygreen.png";

// LOGOS
import html from "../assets/logos/html.png";
import css from "../assets/logos/css.png";
// import js from "../assets/logos/javascript.png";
import react from "../assets/logos/react.png";
import typescript from "../assets/logos/typescript.svg";
import python from "../assets/logos/python.png";
import django from "../assets/logos/django.png";
import firebase from "../assets/logos/firebase-icon.svg";

export const portfoliodb = [
    {
        name: "App Cooking",
        author: "François Chevalier",
        id: "03",
        type: "App",
        year: "2022",
        url: "https://worlds-cooking.netlify.app/",
        cover: appCooking,
        tools: ["React-JS"],
        toolsLogo: html,
        toolsLogo2: css,
        toolsLogo3: react,
        language: "Fr",
        description:
            "Application permettant d'effectuer une recherche de recettes par ingrédients (en anglais). La vue de départ reprend les 250 recettes que nous renvoie l'API. La description précise, l'origine et une vidéo tutorielle sont disponibles pour chacune des recettes listées.",
        api: "API utilisée : TheMealDB",
        apiUrl: "https://www.themealdb.com/",
    },
    {
        name: "Site touristique Bali",
        author: "François Chevalier",
        id: "05",
        type: "Site",
        year: "2022",
        url: "https://go-to-bali.netlify.app/",
        git: "https://github.com/FCHDev/site-bali",
        cover: siteBali,
        tools: ["HTML-CSS"],
        toolsLogo: html,
        toolsLogo2: css,
        language: "Fr",
        description:
            "Site statique type 'Tour Operator' proposant une succincte présentation de l'île de Bali. " +
            "De plus, il propose 3 différentes offres pour la réservation d'un guide personnel. Enfin, un formulaire de contact (inactif) est positionné en bas de page.",
    },
    {
        name: "App Countries Flags",
        author: "François Chevalier",
        id: "06",
        type: "App",
        year: "2022",
        url: "https://countries-watcher.netlify.app/",
        git: "https://github.com/FCHDev/countries-watcher",
        cover: appCountries,
        tools: ["React-JS"],
        toolsLogo: html,
        toolsLogo2: css,
        toolsLogo3: react,
        language: "Fr",
        description:
            "Application permettant d'effectuer une recherche de pays par continents. Les pays sont triés par le nombre d'habitants, possibilité d'étendre l'affichage grâce au slider. Enfin, une section 'Blog' (liée à une API que j'ai réalisée) est disponible.",
        api: "API utilisée : REST Countries",
        apiUrl: "https://restcountries.com/",
    },
    {
        name: "Site Pizza Mama",
        author: "François Chevalier",
        id: "30",
        type: "Site",
        year: "2022",
        url: "https://fchpizzamamadjango.herokuapp.com/",
        cover: pizzaMama,
        tools: ["PYTHON", "DJANGO"],
        toolsLogo: html,
        toolsLogo2: css,
        toolsLogo3: python,
        toolsLogo4: django,
        language: "Fr",
        description:
            "Site de pizzeria présentant sa carte. Le site a été réalisé en Python/Django et peut donc être facilement administré (ajout ou suppression de pizzas, modification des recettes, ...).",
    },
    {
        name: "Feature : Slider Photos",
        author: "François Chevalier",
        id: "31",
        type: "Feature",
        year: "2022",
        url: "http://photoslider.fch80.com/",
        cover: sliderPhotos,
        tools: ["React-JS"],
        toolsLogo: html,
        toolsLogo2: css,
        toolsLogo3: react,
        language: "Fr",
        description:
            "Simple fonctionnalité/composant 'slider' pouvant être exporté dans n'importe quel projet React.",
    },
    {
        name: "Feature : Site multi-langues",
        author: "François Chevalier",
        id: "32",
        type: "Feature",
        year: "2022",
        url: "http://multilanguages.fch80.com/",
        cover: multiLangues,
        tools: ["React-JS"],
        toolsLogo: html,
        toolsLogo2: css,
        toolsLogo3: react,
        language: "Fr",
        description:
            "Simple fonctionnalité/composant 'multi-langues' pouvant être exporté dans n'importe quel projet React.",
    },
    // {
    //   name: "Site e-commerce : La Maison Jungle",
    //   author: "François Chevalier",
    //   id: "05re",
    //   type: "App",
    //   year: "2022",
    //   url: "http://maison-jungle.fch80.com/",
    //   cover: maisonJungle,
    //   tools: ["React-JS"],
    //   toolsLogo: html,
    //   toolsLogo2: css,
    //   toolsLogo3: react,
    //   language: "Fr",
    //   description:
    //     "Site marchand commercialisant des plantes. Gestion de panier dynamique et affichage par catégorie.",
    // },
    {
        name: "App Chrono",
        author: "François Chevalier",
        id: "07",
        type: "App",
        year: "2022",
        url: "https://very-simple-pomodoro-app.netlify.app/",
        cover: chrono,
        tools: ["React-JS"],
        toolsLogo: html,
        toolsLogo2: css,
        toolsLogo3: react,
        language: "Fr",
        description:
            "Application type 'Pomodoro' permettant de gérer sa productivité en alternant des phases 'actives et des phases de 'break'.",
    },
    {
        name: "Site vitrine Agence Web",
        author: "François Chevalier",
        id: "02",
        type: "Site",
        year: "2022",
        url: "https://fch-agency.netlify.app/",
        git: "https://github.com/FCHDev/web-agency",
        cover: agency,
        tools: ["React-JS"],
        toolsLogo: html,
        toolsLogo2: css,
        toolsLogo3: react,
        language: "Fr",
        description:
            "Site vitrine d'une agence web fictive présentant : Navigation, Portfolio, Formulaire de contact. Animations et transitions (React Framer Motion)",
    },
    {
        name: "Site e-commerce DailyGreen",
        author: "François Chevalier",
        id: "00",
        type: "Site",
        year: "2022",
        url: "https://dailygreen.netlify.app/",
        git: "https://github.com/FCHDev/my-green-shop",
        cover: dailygreen,
        tools: ["React-JS"],
        toolsLogo: react,
        toolsLogo2: typescript,
        toolsLogo3: firebase,
        language: "Fr",
        description:
            "Site e-commerce mettant en vente des produits bio et respectueux de l'environnement.",
        api: "API utilisée : Google Firebase",

    },
    {
        name: "App guitarists_",
        author: "François Chevalier",
        id: "01",
        type: "Site",
        year: "2022",
        url: "https://guitarists-db.netlify.app/",
        git: "https://github.com/FCHDev/guitarists-app",
        cover: guitarists,
        tools: ["React-JS"],
        toolsLogo: react,
        toolsLogo2: firebase,
        language: "Fr",
        description:
            "Base de données francophone que j'ai réalisée et hébergée via Firebase. L'objectif est de donner accès à un catalogue croissant de guitaristes légendaires, et de proposer une visualisation de leur Bio en Fr. Le tout dans une interface simple et conviviale",
        api: "API utilisée : Google Firebase",

    },

];
