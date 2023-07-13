import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Contact.css';


const SERVICE_ID = 'service_fx1uuns';
const TEMPLATE_ID = 'template_adsgp98';
const PUBLIC_KEY = 'zkn4fKKX6dfee-keC';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(
                (result) => {console.log(result.text);},
                (error) => {console.log(error.text);}
            );
        
        e.target.reset();
    };

    const onSubmit = (token) => {
        document.getElementById("contact-form").submit();
    };

    return (
        <div className="contact-page">
            <div className="contact-header">
                Contact Me
            </div>
            <div className="contact-form">
                <form id="contact-form" ref={form} onSubmit={sendEmail} method="POST">
                    <input type="text" id="name_field" name="user_name" placeholder="Name" className="contact-input"/>
                    <input type="email" id="email_field" name="user_email" placeholder="Email address" aria-describedby="emailHelp" className="contact-input"/>
                    <input type="text" id="subject_field" name="subject" placeholder="Subject" className="contact-input"/>
                    <textarea id="message_field" name="message" placeholder="Message" rows="4" className="contact-input"></textarea>
                    <button
                    // type="submit"
                        className="btn btn-primary contact-submit g-recaptcha"
                        data-sitekey="reCAPTCHA_site_key" 
                        data-callback="onSubmit"
                        data-action="submit">
                        <i class="fa-solid fa-paper-plane"></i> Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
