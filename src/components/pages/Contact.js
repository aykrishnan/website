import React, { useRef, useState } from 'react';
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
        setMessageSent(true);
    };

    const onSubmit = (token) => {
        document.getElementById("contact-form").submit();
    };

    const [messageSent, setMessageSent] = useState(false);

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
                    {messageSent
                    ? <div className="thank-you">Thank you!</div>
                    : <button
                        className="btn btn-primary contact-submit g-recaptcha"
                        data-sitekey="reCAPTCHA_site_key" 
                        data-callback="onSubmit"
                        data-action="submit">
                        <i className="fa-solid fa-paper-plane"></i> Submit
                      </button>
                    }

                </form>
            </div>
            <div className="contact-addendum">
                Feel free to reach out to me for business inquiries. Please provide any information you believe will be helpful
                (e.g., project details, technical requirements, budgetary constraints, timeline, etc.).
                I will do my best to reply to you in a timely fashion.
            </div>
        </div>
    );
};

export default Contact;
