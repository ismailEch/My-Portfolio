import React from "react";
import './MobileNav.css';

function MobileNav({ isOpen, toggleMenu }) {
    return (
        <div className={`mobile-menu ${isOpen ? "mobile-menu-active" : ""}`} onClick={toggleMenu}>
            <div className="mobile-menu-container">
                <img className="logo" src="./assets/images/logo.svg" alt="logo" />
                <ul>
                    <li>
                        <a className="menu-item" href="#home">Home</a>
                    </li>
                    <li>
                        <a className="menu-item" href="#skills">Skills</a>
                    </li>
                    <li>
                        <a className="menu-item" href="#work-experience">Work Experience</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default MobileNav;
