import React from 'react'
import './ContactForm.css'
const ContactForm = () => {
    return (
        <div className='contact-form-content'>
            <form>
                <div className='name-container'>
                    <input type='text' name='firstName' placeholder='First Name' />
                    <input type='text' name='LastName' placeholder='Last Name' />
                </div>

                <input type='text'  name='email' placeholder='email' />
                <textarea type="text" name='message' placeholder='Message'></textarea>

                <button>Send</button>
            </form>
        </div>
    )
}

export default ContactForm