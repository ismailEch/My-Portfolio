import React from 'react'
import './ContactCard.css'

export const ContactCard = ({iconURL , text}) => {
    return (
        <div className='contact-details-card'>
            <div className='icon' >
                <img src={iconURL} alt={text}></img>
            </div>
            <p>{text}</p>
        </div>
    )
}
export default ContactCard
