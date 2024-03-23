import React from "react";
import './Contact.css'
import ContactCard from "./ContactInfoCard/ContactCard";
import ContactForm from "./ContactForm/ContactForm";

function Contact (){
    return (
        <section className="contact-containe">
            <h5>Contact Me</h5>
            <div className="concat-content">
                <div style={{flex:1}}>
                    <ContactCard iconURL="./assets/images/email.svg" text="ismailechchafiy56@gmail.com" />
                    <a href="https://github.com/ismailEch"><ContactCard iconURL="./assets/images/github.svg" text="https://github.com/ismailEch" /></a>
                    
                </div>
                <div style={{flex:1}}>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}
export default Contact