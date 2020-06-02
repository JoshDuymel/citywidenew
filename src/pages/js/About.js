import React from 'react'
import "../css/About.css";

import keyFiguresData from '../../data/keyFigures.json';
import historyData from '../../data/history.json';

import KeyFig from '../../components/js/KeyFig';
import History from '../../components/js/History';

import ScrollableContainer from "../../components/js/ScrollableContainer";

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
                    <ScrollableContainer>
                        {keyFiguresData.keyFiguresData.map(i => <KeyFig date={i.date} title={i.title}/>)}
                    </ScrollableContainer>
                </div>
            </div>

            <div className='sectionContGray' title="the employees">
                <div className="titleCont">
                    <h5>03</h5>
                    <h5>HISTORY</h5>
                </div>
                <div className='contentContScroll'>
                    <ScrollableContainer>
                        {historyData.historyData.map(i => <History date={i.date} title={i.title}/>)}
                    </ScrollableContainer>
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
