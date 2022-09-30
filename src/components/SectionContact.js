import React from 'react';
import Navigation from "./Navigation";
import ContactForm from "./ContactForm";
import Footer from "./Footer";


const SectionContact = () => {
    return (<>
            <div className="section3" id="section3">
                <Navigation/>
                <h1>Contact</h1>
                <h3 style={{fontFamily: "Open Sans", marginBottom: "1em"}}>Remplissez le formulaire ci-dessous</h3>

                <ContactForm/>

                {/*<ContactForm />*/}
                {/*<ContactFormEmailJs />*/}

                {/*GoogleForm en backup*/}
                {/*<iframe*/}
                {/*    src="https://docs.google.com/forms/d/e/1FAIpQLScmbrTqVCFrqaZpyDa8w5RtwhF7bW01F-kRxJh9gTiVkLCxaQ/viewform?embedded=true"*/}
                {/*    width="90%" height="1556" frameBorder="0" marginHeight="0" marginWidth="0" title="Formulaire de contact">Chargement…*/}
                {/*</iframe>*/}
                <Footer/>
            </div>
            </>
    );
};

export default SectionContact;