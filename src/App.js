import SectionAccueil from "./components/SectionAccueil";
import SectionProjets from "./components/SectionProjets";
import SectionContact from "./components/SectionContact";
import ScrollToTop from "react-scroll-to-top";
import SectionTarifs from "./components/SectionTarifs";
import Footer from "./components/Footer";


function App() {
    return (
        <div style={{position:"relative"}}>
            <SectionAccueil/>
            <SectionProjets/>
            <SectionTarifs/>
            <SectionContact/>

            <ScrollToTop style={{paddingLeft: "6px"}} smooth={true}/>
            <Footer/>
        </div>
    );
}

export default App;
