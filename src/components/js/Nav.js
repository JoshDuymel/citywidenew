import React from 'react';
import { Link } from "react-router-dom";
import "../css/Nav.css";
import lion from "../../images/lion.png"

export default function Nav() {
    return (
        <div className="main-nav">
            <Link to="/Home" className="nav-image"><img id="navLogo" src={lion} alt="a lion logo"/></Link>
            <Link to="/Home" className="nav-link">CITYWIDE CORPORATE FINANCE</Link>
            <Link to="/ContactUs" id="contact">Contact Us</Link>
        </div>
    )
}