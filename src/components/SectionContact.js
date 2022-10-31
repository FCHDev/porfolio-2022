import React from 'react';
import Navigation from "./Navigation";
import ContactForm from "./ContactForm";


const SectionContact = () => {
    return (<>
            <div className="section3" id="section3">
                <Navigation/>
                <h2>Contact</h2>
                <h3 style={{fontFamily: "Open Sans", marginBottom: "1em"}}>Remplissez le formulaire ci-dessous</h3>

                <ContactForm/>

                {/*<ContactForm />*/}
                {/*<ContactFormEmailJs />*/}

                {/*GoogleForm en backup*/}
                {/*<iframe*/}
                {/*    src="https://docs.google.com/forms/d/e/1FAIpQLScmbrTqVCFrqaZpyDa8w5RtwhF7bW01F-kRxJh9gTiVkLCxaQ/viewform?embedded=true"*/}
                {/*    width="90%" height="1556" frameBorder="0" marginHeight="0" marginWidth="0" title="Formulaire de contact">Chargement…*/}
                {/*</iframe>*/}
            </div>
            </>
    );
};

export default SectionContact;