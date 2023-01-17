import React from "react";
import Navigation from "./Navigation";
import ContactForm from "./ContactForm";
import call from "../assets/logos/call.svg";

const SectionContact = () => {

    const Telephone = () => {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "1em",
                }}
            >
                <img
                    src={call}
                    alt=""
                    style={{height: "30px", paddingRight: "10px"}}
                />
                <a
                    href="tel:[+33]643655138"
                    style={{
                        textDecoration: "none",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "30px",
                    }}
                >
                    {" "}
                    06 43 65 51 38
                </a>
            </div>
        )
    }
    return (
        <>
            <div className="section3" id="section3">
                <Navigation/>
                <h2>Contact</h2>
                <h3
                    style={{
                        fontFamily: "Open Sans",
                        textAlign: "center",
                    }}
                >
                    Remplissez le formulaire ci-dessous ou contactez-moi directement
                </h3>

                <Telephone/>
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
