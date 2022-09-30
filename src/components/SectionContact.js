import React from 'react';
import Navigation from "./Navigation";
import ContactForm from "./ContactForm";

const Section3 = () => {
    return (
        <div className="section3" id="section3">
            <Navigation/>
            <h1>Contact</h1>
            <ContactForm />
        </div>
    );
};

export default Section3;