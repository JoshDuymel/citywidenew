import React from 'react';
import "../css/Footer.css";

import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className='footerCont'>

            <div className='ssCont' title="subscribe section">
                <a className='contactLink'>CONTACT US</a>
                <h1>To subscribe to our newsletter,<br/>please sign up</h1>
                <div>
                <form>
                    <label>
                        <input type="text"/>
                    </label>
                </form>
                <button className='valCta'>Validate</button>
                </div>
            </div>

            <div className='footerLinks' title="footer links">
                <div className='linksCont'>
                    <h2 className='linkTitle'>ABOUT US</h2>
                    <a className='link'>Our team</a>
                    <Link to="/About" className="link">About</Link>
                </div>
                <div className='linksCont'>
                    <h2 className='linkTitle'>OUR SERVICES</h2>
                    <a className='link'>Acquisition</a>
                    <a className='link'>Valuation</a>
                    <a className='link'>Investment</a>
                    <a className='link'>Property</a>
                </div>
                <div className='linksCont'>
                    <h2 className='linkTitle'>OUR REFERENCES</h2>
                </div>
                <div className='linksCont'>
                    <h2 className='linkTitle'>INTERNATIONAL</h2>
                </div>
                <div className='linksCont'>
                    <h2 className='linkTitle'>NEWS</h2>
                </div>
            </div>

            <div title="cc">
                <h5 className='cwText' >Citywide Capital Limited</h5>
            </div>

        </div>
    )
}
