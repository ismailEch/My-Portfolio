import React from "react";
import './ExCard.css'

function ExCard({ details }) {
    return (
        <div className="work-ex-card">
            <h6>{details.title}</h6>
            <div className="work-duration">{details.date}</div>
            <ul>
                {details.respos.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    ); 
}

export default ExCard;
