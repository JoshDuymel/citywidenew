import React from 'react'
import "../css/About.css";

import keyFiguresData from '../../data/keyFigures.json';
import historyData from '../../data/history.json';

import KeyFig from '../../components/js/KeyFig';
import History from '../../components/js/History';

export default function About() {
    return (
        <div className="homeCont">

            <div className="featureBgCont" title="a featureBox">
                <div className="featureCont">
                    <h1>
                    Know us.
                    </h1>
                    <h4 className="sDText" >SCROLL DOWN</h4>
                </div>
            </div>

            <div className="sectionCont" title="an about section">
                <div className="titleCont">
                    <h5>01</h5>
                    <h5>GENERAL PRESENTATION</h5>
                </div>
                <h2>Citywide Capital Limited is a small financing company. Because of our hands on management approach we are able to focus on our clients and achieve success. A two decade long working formula.</h2>
                <div className='gpExplanation'>
                    <h3>The company is a Kiwi leader in financial operations focused on PIRs.</h3>
                    <p>Citywide does not participate by way of taking equity positions on any project. We are financiers, not developers, and do not use funds for our own purposes except in exceptional circumstances if a project turns sour and we think our position is better protected by buying back the subject property. That has only happened on two occasions in our history.</p>
                </div>
            </div>

            <div className="sectionContPurp" title="Key Figures Section">
                <div className="titleContLight">
                    <h5>02</h5>
                    <h5>KEY FIGURES</h5>
                </div>
                <div className='contentContScroll'>
                    {keyFiguresData.keyFiguresData.map(i => <KeyFig date={i.date} title={i.title}/>)}
                </div>
                <div className='scrollArrows'>
                    <svg width="42" height="10" viewBox="0 0 42 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.94975 8.40687L4.24264 9.11398L0 4.87134L0.707107 4.16423L4.94975 8.40687Z" fill="white"/>
                    <path d="M4.2427 0.628662L4.9498 1.33577L0.707162 5.57841L0 4.87134L4.2427 0.628662Z" fill="white"/>
                    <path d="M1.24268 4.37131H41.2427V5.37131H1.24268V4.37131Z" fill="white"/>
                    </svg>

                    <svg width="42" height="10" viewBox="0 0 42 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.7929 1.59309L37.5 0.885986L41.7427 5.12863L41.0356 5.83573L36.7929 1.59309Z" fill="white"/>
                    <path d="M37.5 9.3713L36.7929 8.66419L41.0355 4.42155L41.7427 5.12863L37.5 9.3713Z" fill="white"/>
                    <path d="M40.5 5.62865L0.5 5.62865L0.5 4.62865L40.5 4.62865V5.62865Z" fill="white"/>
                    </svg>
                </div>
            </div>

            <div className='sectionContGray' title="the employees">
                <div className="titleCont">
                    <h5>03</h5>
                    <h5>HISTORY</h5>
                </div>
                <div className='contentContScroll'>
                    {historyData.historyData.map(i => <History date={i.date} title={i.title}/>)}
                </div>
                <div className='scrollArrows'>
                    <svg width="42" height="10" viewBox="0 0 42 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.94975 8.40663L4.24264 9.11373L0 4.87109L0.707107 4.16398L4.94975 8.40663Z" fill="black"/>
                    <path d="M4.2427 0.628418L4.9498 1.33552L0.707162 5.57817L0 4.87109L4.2427 0.628418Z" fill="black"/>
                    <path d="M1.24268 4.37107H41.2427V5.37107H1.24268V4.37107Z" fill="black"/>
                    </svg>

                    <svg width="42" height="10" viewBox="0 0 42 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.7927 1.59285L37.4998 0.885742L41.7424 5.12838L41.0353 5.83549L36.7927 1.59285Z" fill="black"/>
                    <path d="M37.4997 9.37106L36.7926 8.66395L41.0353 4.42131L41.7424 5.12838L37.4997 9.37106Z" fill="black"/>
                    <path d="M40.4998 5.62841L0.499756 5.62841L0.499756 4.62841L40.4998 4.62841V5.62841Z" fill="black"/>
                    </svg>
                </div>
            </div>

            <div className='ethicsCont' title="the company ethics">
                <div className="titleCont">
                    <h5>04</h5>
                    <h5>PROFESSIONAL ETHICS</h5>
                </div>
                <div className='ethicsInfoCont'>
                    <h3>Citywide Corporate Finance is built on the values of honesty, independence and professional ability and has a strong entrepreneurial culture.</h3>
                    <div className='gauranteeCont'>
                        <svg>
                            <rect width='15vw' height='2px'/>
                        </svg>
                        <h4>OUR INDEPENDENCE IS A GUARANTEE THAT WE DEFEND THE INTERESTS OF OUR CLIENTS. OUR COMPANY IS WHOLLY OWNED BY ITS SHAREHOLDERS AND WE SELF-FINANCE OUR DEVELOPMENT. WE CARRY OUT EVERY PROJECT EXCLUSIVELY IN OUR CUSTOMER'S INTERESTS.
                        </h4>
                    </div>
                    <div className='traditionCont'>
                        <h2>
                        Our firm relies on a tradition of integrity and honesty in conducting business. We are particularly committed to preventing and avoiding conflicts of interest and respecting the confidentiality of the information on which we work.
                        </h2>
                        <p>We carry out our work within the framework of the MIF II Regulation as a financial investment adviser (Orias No. 13000359) and listing sponsor on the NZIX Australasian markets.
                        <br/><br/>
                        We are a member of several professional organisations. In addition, Barry Allens, CEO of Citywide, is a founding member and administrator of NZUMACP (the New Zealand Union of Merger and Acquisition Consultancy Professionals) where he was CEO for 5 years.
                        <br/><br/>
                        We take care to conduct our activities in compliance with all current laws and regulations relating to the stock market.</p>
                    </div>
                </div>
                
            </div>

        </div>
    )
}
