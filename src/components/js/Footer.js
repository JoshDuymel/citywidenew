import React from 'react';
import "../css/Footer.css";

export default function Footer() {
    return (
        <div className='footerCont'>

            <div title="subscribe section">
                <a className='contactLink'>CONTACT US</a>
                <h1>To subscribe to our newsletter,<br/>please sign up</h1>
                <div>
                    {/* <input>your@email.here</input> */}
                    <a className='ctaButton'>Validate</a>
                </div>
            </div>

            <div title="footer links">
                <div className='linksCont'>
                    <h2>ABOUT US</h2>
                    <a className='link'>Our team</a>
                    <a className='link'>Know us</a>
                </div>
                <div className='linksCont'>
                    <h2>OUR SERVICES</h2>
                    <a className='link'>Acquisition</a>
                    <a className='link'>Valuation</a>
                    <a className='link'>Investment</a>
                    <a className='link'>Property</a>
                </div>
                <div className='linksCont'>
                    <h2>OUR REFERENCES</h2>
                </div>
                <div className='linksCont'>
                    <h2>INTERNATIONAL</h2>
                </div>
                <div className='linksCont'>
                    <h2>NEWS</h2>
                </div>
            </div>

            <div title="cc">
                <h5>Citywide Capital Limited</h5>
            </div>

        </div>
    )
}
