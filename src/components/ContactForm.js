import React from "react";
import {useRef, useState} from "react";
import {Card, Form, Button} from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import emailjs from "@emailjs/browser";


const ContactForm = () => {

    // CONST ET STATES
    const formRef = useRef();
    const telRef = useRef();
    const [merci, setMerci] = useState('');
    const [toSend, setToSend] = useState({
        from_name: '',
        surname: '',
        message: '',
        reply_to: '',
        project_type: '',
        baseExistante: '',
        is_team: '',
        too_late: '',
        tel: '',
        pro_or_not:'',
        stack:'',
        decider:'',
        contact_pref:''
    });


    // COMPORTEMENT
    const sendEmail = (e) => {
        e.preventDefault();
        formatTelNumber(toSend.tel)
        emailjs.sendForm('service_c0c7gpk', 'template_klxompj', formRef.current, '-vwAE-R5zUAJMrCjR')
            .then((result) => {
                console.log(result.text);
                console.log("mail envoyé !")
            }, (error) => {
                console.log(error.text);
                console.log("mail PAS envoyé !")
            });
        setToSend({
            from_name: '',
            surname: '',
            message: '',
            reply_to: '',
            project_type: '',
            base_existante: '',
            ready_to_go: '',
            too_late: '',
            tel: '',
            pro_or_not:'',
            stack:'',
            decider:'',
            contact_pref:''
        })
        setMerci(
            <div className="w-100 text-center mt-2">
                Merci et à très vite !
            </div>)
    };

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value});
    };

    function formatTelNumber(number) {
        const nonInt = /\D/g;
        const allNumbers = /.*(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/;
        const formatStyle = "$1 $2 $3 $4 $5";
        return number.replace(nonInt, '').replace(allNumbers, formatStyle)
        // eslint-disable-next-line
        if (toSend.tel === "")
            return "";
        else
            return formatTelNumber(toSend.tel);
    }

    // console.log(formatTelNumber(toSend.tel))


    return (
        <>
            <Card className="form-container">
                <Card.Body className="form-container-card">
                    <Form className="text-black d-flex flex-column align-items-center form-container-input" ref={formRef} onSubmit={sendEmail}>
                        <Accordion className="w-100">
                            <Accordion.Item eventKey="0" >
                                <Accordion.Header className="accordion-titles"><h4>1 - Coordonnées</h4></Accordion.Header>
                                <Accordion.Body className="text-black bg-opacity-25">

                                    {/*// NOM*/}
                                    <Form.Group id="nom" className="mb-2">
                                        <Form.Label className="mb-1 mt-3"><b>Nom</b><span style={{color:"red"}}>*</span></Form.Label>
                                        <Form.Control
                                            type="text"
                                            name='from_name'
                                            onChange={handleChange}
                                            value={toSend.from_name}
                                            placeholder='Chabat'
                                            required/>
                                    </Form.Group>

                                    {/*// PRÉNOM*/}
                                    <Form.Group id="surname" className="mb-2">
                                        <Form.Label className="mb-1 mt-3"><b>Prénom</b></Form.Label>
                                        <Form.Control
                                            type="text"
                                            name='surname'
                                            onChange={handleChange}
                                            value={toSend.surname}
                                            placeholder='Alain'
                                        />
                                    </Form.Group>

                                    {/*// EMAIL*/}
                                    <Form.Group id="email" className="mb-2">
                                        <Form.Label className="mb-1 mt-3"><b>Email</b><span style={{color:"red"}}>*</span></Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="reply_to"
                                            onChange={handleChange}
                                            value={toSend.reply_to}
                                            placeholder='a.chabat@lesnuls.fr'
                                            required/>
                                    </Form.Group>

                                    {/*// TEL*/}
                                    <Form.Group id="tel" className="mb-2">
                                        <Form.Label className="mb-1 mt-3"><b>Téléphone</b></Form.Label>
                                        <Form.Control
                                            ref={telRef}
                                            type="tel"
                                            pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
                                            name="tel"
                                            onChange={handleChange}
                                            value={toSend.tel}
                                            placeholder='06xxxxxxxx'
                                            required/>
                                    </Form.Group>

                                    {/*// MOYENS COM PRÉFÉRÉS*/}
                                    <Form.Group id="contact_pref" className="mb-2">
                                        <Form.Label className="mb-1 mt-3"><b>Avez-vous une préférence de contact ?</b></Form.Label>
                                        <Form.Check
                                            type="radio"
                                            id="contact_pref"
                                            name="contact_pref"
                                            label="email"
                                            onChange={handleChange}
                                            value={toSend.contact_pref = "email"}
                                        />
                                        <Form.Check
                                            type="radio"
                                            id="contact_pref"
                                            name="contact_pref"
                                            label="téléphone"
                                            onChange={handleChange}
                                            value={toSend.contact_pref = "téléphone"}
                                        />
                                        <Form.Check
                                            type="radio"
                                            id="contact_pref"
                                            name="contact_pref"
                                            label="visio"
                                            onChange={handleChange}
                                            value={toSend.contact_pref = "visio"}
                                        />
                                        <Form.Check
                                            type="radio"
                                            id="contact_pref"
                                            name="contact_pref"
                                            label="WhatsApp, autres..."
                                            onChange={handleChange}
                                            value={toSend.contact_pref = "WhatsApp, autres..."}
                                        />
                                    </Form.Group>
                                    {/*// SOCIÉTÉ OU PARTICULIER ?*/}
                                    <Form.Group id="pro_or_not" className="mb-2">
                                        <Form.Label className="mb-1 mt-3"><b>Vous êtes une/un...</b></Form.Label>
                                        <Form.Check
                                            type="radio"
                                            id="pro_or_not"
                                            name="pro_or_not"
                                            label="Société"
                                            onChange={handleChange}
                                            value={toSend.pro_or_not = "Société"}
                                        />
                                        <Form.Check
                                            type="radio"
                                            id="pro_or_not"
                                            name="pro_or_not"
                                            label="Particulier"
                                            onChange={handleChange}
                                            value={toSend.pro_or_not = "Particulier"}
                                        />
                                    </Form.Group>

                                    {/*// DÉCISIONNAIRE ?*/}
                                    <Form.Group id="decider" className="mb-2">
                                        <Form.Label className="mb-1 mt-3"><b>Êtes-vous décisionnaire ?</b><span style={{color:"red"}}>*</span></Form.Label>
                                        <Form.Check
                                            type="radio"
                                            id="decider"
                                            name="decider"
                                            label="Oui"
                                            onChange={handleChange}
                                            value={toSend.decider = "Oui 🥳"}
                                            required/>
                                        <Form.Check
                                            type="radio"
                                            id="decider"
                                            name="decider"
                                            label="Non"
                                            onChange={handleChange}
                                            value={toSend.decider = "Non 😢"}
                                        />
                                    </Form.Group>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className="accordion-titles"><h4>2 - Projet</h4></Accordion.Header>
                                <Accordion.Body className="text-black bg-opacity-25">

                                    {/*// NATURE PROJET*/}
                                    <Form.Group id="message" className="mb-2">
                                        <Form.Label className="mb-1 mt-3">
                                            <b>Quelle est la nature de votre projet ?</b><span style={{color:"red"}}>*</span>
                                        </Form.Label>

                                        <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows="10"
                                            name="message"
                                            onChange={handleChange}
                                            value={toSend.message}
                                            placeholder="Décrivez le projet et la mission avec un maximum d'éléments"
                                            required></textarea>
                                    </Form.Group>

                                    {/*// STACK ENVISAGÉE*/}
                                    <Form.Group id="stack" className="mb-2">
                                        <Form.Label className="mb-0 mt-3">
                                            <b>Quelles technologies (stack technique) envisagez-vous d'utiliser ?</b>
                                        </Form.Label>
                                        <span className="small"><br></br>
                                <small>
                                    <em>Une stack technique est une liste de tous les outils technologiques utilisés pour développer et faire fonctionner un programme.</em>
                                </small>
                            </span>
                                        <textarea
                                            className="form-control mt-2"
                                            id="stack"
                                            rows="4"
                                            name="stack"
                                            onChange={handleChange}
                                            value={toSend.stack}
                                            placeholder='NextJS, Firebase, ...'
                                        ></textarea>
                                    </Form.Group>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header className="accordion-titles"><h4>3 - Mission</h4></Accordion.Header>
                                <Accordion.Body className="text-black bg-opacity-25">

                                    {/*// TYPE MISSION*/}
                                    <Form.Group id="project_type" className="mb-2">
                                        <Form.Label className="mb-1 mt-3"><b>Type de mission</b></Form.Label>
                                        <select
                                            className="form-select"
                                            aria-label="Default select example"
                                            placeholder="Type de mission"
                                            name="project_type"
                                            onChange={handleChange}
                                            value={toSend.project_type}>
                                            <option>Choisissez...</option>
                                            <option value="Forfait">Forfait</option>
                                            <option value="Sur mesure">Sur mesure</option>
                                        </select>
                                    </Form.Group>

                                    {/*// BASE EXISTANTE ?*/}
                                    <Form.Group id="base_existante" className="mb-2">
                                        <Form.Label className="mb-1 mt-3"><b>Le projet possède-t-il déjà une base existante
                                            ?</b></Form.Label>
                                        <Form.Check
                                            type="radio"
                                            id="base_existante"
                                            name="base_existante"
                                            label="Oui"
                                            onChange={handleChange}
                                            value={toSend.base_existante = "Oui"}
                                        />
                                        <Form.Check
                                            type="radio"
                                            id="base_existante"
                                            name="base_existante"
                                            label="Non"
                                            onChange={handleChange}
                                            value={toSend.base_existante = "Non"}
                                        />
                                    </Form.Group>

                                    {/*// M'INTÉGRER DANS L'ÉQUIPE ?*/}
                                    <Form.Group id="is_team" className="mb-2">
                                        <Form.Label className="mb-1 mt-3">
                                            <b>Souhaitez-vous m'intégrer dans une équipe de développement déjà en place ?</b>
                                        </Form.Label>
                                        <Form.Check
                                            type="radio"
                                            id="is_team"
                                            name="is_team"
                                            label="Oui"
                                            onChange={handleChange}
                                            value={toSend.is_team = "Oui"}
                                        />
                                        <Form.Check
                                            type="radio"
                                            id="is_team"
                                            name="is_team"
                                            label="Non"
                                            onChange={handleChange}
                                            value={toSend.is_team = "Non"}
                                        />
                                    </Form.Group>

                                    {/*// DATE PRÊT À DÉMARRER*/}
                                    <Form.Group id="ready_to_go" className="mb-2">
                                        <Form.Label className="mb-1 mt-3">
                                            <b>Quand seriez-vous prêt à démarrer la mission ?</b><span style={{color:"red"}}>*</span>
                                        </Form.Label>
                                        <Form.Control
                                            type="date"
                                            id="ready_to_go"
                                            name='ready_to_go'
                                            className="text-white"
                                            onChange={handleChange}
                                            value={toSend.ready_to_go}
                                            required
                                        />

                                    </Form.Group>

                                    {/*// DATE PROJET N'EST PLUS ENVISAGÉ*/}
                                    <Form.Group id="too_late" className="mb-2">
                                        <Form.Label className="mb-1 mt-3">
                                            <b>Indiquez une date à laquelle cette mission ne devrait <u>plus être envisagée</u> ?</b>
                                        </Form.Label>
                                        <Form.Control
                                            type="date"
                                            id="too_late"
                                            name='too_late'
                                            className="text-white"
                                            onChange={handleChange}
                                            value={toSend.too_late}
                                        />

                                    </Form.Group>

                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>

                        <span className="text-white" id="obligatoire"><small><em>*Champ obligatoire</em></small></span>

                        <Button className="w-50 mt-lg-5" id="sendButton" variant="outline-light" type="submit">
                            Envoyer
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            {merci}
        </>
    );
};

export default ContactForm;
