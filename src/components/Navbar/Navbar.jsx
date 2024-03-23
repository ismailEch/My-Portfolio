import React, { useState } from "react";
import './Navbar.css'
import MobileNav from "./MobileNav/MobileNav";

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className="nav-wrapper">
                <div className="nav-content">
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
                    <button className="contact-btn" onClick={() => {}}>
                        Hire Me
                    </button>
                </div>
                <button className="menu-btn" onClick={toggleMenu}>
                    <span className="material-symbols-outlined" style={{ fontSize: '1.8rem' }}>
                        =
                    </span>
                </button>
            </nav>
        </>
    )
}
export default Navbar;
