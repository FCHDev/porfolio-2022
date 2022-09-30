import SectionAccueil from "./components/SectionAccueil";
import SectionProjets from "./components/SectionProjets";
import SectionContact from "./components/SectionContact";
import ScrollToTop from "react-scroll-to-top";
import SectionTarifs from "./components/SectionTarifs";


function App() {
    return (
        <div>
            <SectionAccueil/>
            <SectionProjets/>
            <SectionTarifs/>
            <SectionContact/>

            <ScrollToTop style={{paddingLeft: "6px"}} smooth={true}/>
        </div>
    );
}

export default App;
