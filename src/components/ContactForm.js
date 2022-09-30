import React from "react";
import {useRef, useState} from "react";
import {Card, Form, Button} from "react-bootstrap";
import emailjs from "@emailjs/browser";


const ContactFormBootstrap = () => {

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
        stack:''
    });


    // COMPORTEMENT
    const sendEmail = (e) => {
        e.preventDefault();
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
            stack:''
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

        if (toSend.tel === "")
            return "";
        else
            return formatTelNumber(toSend.tel);
    }

    console.log(formatTelNumber(toSend.tel))


    // function refreshPage() {
    //     window.location.reload();
    // }

    return (
        <>
            <Card className="w-50 w-md-75 bg-black bg-opacity-25">
                <Card.Body>
                    <Form className="text-black" ref={formRef} onSubmit={sendEmail}>

                        {/*// NOM*/}
                        <Form.Group id="nom" className="mb-2">
                            <Form.Label className="mb-0 mt-3 text-white">Nom*</Form.Label>
                            <Form.Control
                                type="text"
                                name='from_name'
                                onChange={handleChange}
                                value={toSend.from_name}
                                placeholder='Votre nom'
                                required/>
                        </Form.Group>

                        {/*// PRÉNOM*/}
                        <Form.Group id="surname" className="mb-2">
                            <Form.Label className="mb-0 mt-3 text-white">Prénom</Form.Label>
                            <Form.Control
                                type="text"
                                name='surname'
                                onChange={handleChange}
                                value={toSend.surname}
                                placeholder='Votre prénom'
                            />
                        </Form.Group>

                        {/*// EMAIL*/}
                        <Form.Group id="email" className="mb-2">
                            <Form.Label className="mb-0 mt-3 text-white">Email*</Form.Label>
                            <Form.Control
                                type="email"
                                name="reply_to"
                                onChange={handleChange}
                                value={toSend.reply_to}
                                placeholder='Votre email'
                                required/>
                        </Form.Group>

                        {/*// TEL*/}
                        <Form.Group id="tel" className="mb-2">
                            <Form.Label className="mb-0 mt-3 text-white">Téléphone</Form.Label>
                            <Form.Control
                                ref={telRef}
                                type="tel"
                                pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}"
                                name="tel"
                                onChange={handleChange}
                                value={toSend.tel}
                                placeholder='Votre téléphone'
                                required/>
                        </Form.Group>

                        {/*// NATURE PROJET*/}
                        <Form.Group id="message" className="mb-2">
                            <Form.Label className="mb-0 mt-3 text-white">
                                Quelle est la nature de votre projet ?*
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
                            <Form.Label className="mb-0 mt-3 text-white">
                                Quelles technologies (stack technique) envisagez-vous d'utiliser ?
                            </Form.Label>
                            <span className="text-white small"><br></br>
                                <small>
                                    <em>Une stack technique est une liste de tous les outils technologiques utilisés pour développer et faire fonctionner un programme.</em>
                                </small>
                            </span>
                            <textarea
                                className="form-control"
                                id="stack"
                                rows="4"
                                name="stack"
                                onChange={handleChange}
                                value={toSend.stack}
                                placeholder='NextJS, Firebase, ...'
                                ></textarea>
                        </Form.Group>

                        {/*// TYPE MISSION*/}
                        <Form.Group id="project_type" className="mb-2">
                            <Form.Label className="mb-0 mt-3 text-white">Type de mission</Form.Label>
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
                            <Form.Label className="mb-0 mt-3 text-white">Le projet possède-t-il déjà une base existante
                                ?</Form.Label>
                            <Form.Check
                                type="radio"
                                id="base_existante"
                                name="base_existante"
                                label="Oui"
                                className="text-white"
                                onChange={handleChange}
                                value={toSend.base_existante = "Oui"}
                            />
                            <Form.Check
                                type="radio"
                                id="base_existante"
                                name="base_existante"
                                label="Non"
                                className="text-white"
                                onChange={handleChange}
                                value={toSend.base_existante = "Non"}
                            />
                        </Form.Group>

                        {/*// M'INTÉGRER DANS L'ÉQUIPE ?*/}
                        <Form.Group id="is_team" className="mb-2">
                            <Form.Label className="mb-0 mt-3 text-white">
                                Souhaitez-vous m'intégrer dans une équipe de développement déjà en place ?
                            </Form.Label>
                            <Form.Check
                                type="radio"
                                id="is_team"
                                name="is_team"
                                label="Oui"
                                className="text-white"
                                onChange={handleChange}
                                value={toSend.is_team = "Oui"}
                            />
                            <Form.Check
                                type="radio"
                                id="is_team"
                                name="is_team"
                                label="Non"
                                className="text-white"
                                onChange={handleChange}
                                value={toSend.is_team = "Non"}
                            />
                        </Form.Group>

                        {/*// DATE PRÊT À DÉMARRER*/}
                        <Form.Group id="ready_to_go" className="mb-2">
                            <Form.Label className="mb-0 mt-3 text-white">
                                Quand seriez-vous prêt à démarrer la mission ?
                            </Form.Label>
                            <Form.Control
                                type="date"
                                id="ready_to_go"
                                name='ready_to_go'
                                className="text-white"
                                onChange={handleChange}
                                value={toSend.ready_to_go}
                            />

                        </Form.Group>

                        {/*// DATE PROJET N'EST PLUS ENVISAGÉ*/}
                        <Form.Group id="too_late" className="mb-2">
                            <Form.Label className="mb-0 mt-3 text-white">
                                Indiquez une date à laquelle cette mission ne devrait <u>plus être envisagée</u> ?
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

                        {/*// SOCIÉTÉ OU PARTICULIER ?*/}
                        <Form.Group id="pro_or_not" className="mb-2">
                            <Form.Label className="mb-0 mt-3 text-white">Vous êtes une/un</Form.Label>
                            <Form.Check
                                type="radio"
                                id="pro_or_not"
                                name="pro_or_not"
                                label="Société"
                                className="text-white"
                                onChange={handleChange}
                                value={toSend.pro_or_not = "Société"}
                            />
                            <Form.Check
                                type="radio"
                                id="pro_or_not"
                                name="pro_or_not"
                                label="Particulier"
                                className="text-white"
                                onChange={handleChange}
                                value={toSend.pro_or_not = "Particulier"}
                            />
                        </Form.Group>

                        <Button className="mt-3" variant="primary" type="submit">
                            Envoyer
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            {merci}
        </>
    );
};

export default ContactFormBootstrap;
