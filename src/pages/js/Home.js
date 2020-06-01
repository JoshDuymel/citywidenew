import React from 'react';
import "../css/home.css";

import { Link } from "react-router-dom";

import dealData from '../../data/deals.json';
import employeeData from '../../data/employees.json';
import newsData from '../../data/news.json';

import DealCont from '../../components/js/Deal';
import Employee from '../../components/js/Employee';
import NewsItem from '../../components/js/News-Item';

export default function Home() {
    return (
        <div className="homeCont">

            <div className="featureBgCont" title="a featureBox">
                <div className="featureCont">
                    <h1>
                    Hands-on financing for<br/>Kiwis.
                    </h1>
                    <h4 className="sDText" >SCROLL DOWN</h4>
                </div>
            </div>

            <div className="sectionCont" title="an about section">
                <div className="titleCont">
                    <h5>01</h5>
                    <h5>WHO WE ARE</h5>
                </div>
                <div className="mainCont">
                    <h2>Citywide Capital Limited is a small financing company. Because of our hands on management approach we are able to focus on our clients and achieve success. A two decade long working formula.</h2>
                    <p>Citywide does not participate by way of taking equity positions on any project. We are financiers, not developers, and do not use funds for our own purposes except in exceptional circumstances if a project turns sour and we think our position is better protected by buying back the subject property. That has only happened on two occasions in our history.</p>
                </div>
                <Link to="/About" className="cta">ABOUT</Link>
            </div>

            <div className="sectionCont" title="the latest deals">
                <div className="titleCont">
                    <h5>02</h5>
                    <h5>OUR LATEST DEALS</h5>
                </div>
                <div className='contentCont'>
                    {dealData.dealData.slice(0,3).map(i => <DealCont dealType={i.dealType} customerName={i.customerName} counterName={i.counterName}/>)}
                </div>
                <Link to="/Deals" className="linkCta">SEE MORE</Link>
            </div>

            <div className='sectionCont' title="the employees">
                <div className="titleCont">
                    <h5>03</h5>
                    <h5>OUR TEAM</h5>
                </div>
                <p>Our team of professionals is diverse and can boast collective decades of expereince to our craft.</p>
                <div className='contentCont'>
                    {employeeData.employeeData.slice(0,3).map(i => <Employee firstName={i.firstName} lastName={i.lastName} jobTitle={i.jobTitle}/>)}
                </div>
                <Link to="/Team" className="linkCta">SEE MORE</Link>
            </div>

            <div className='joinUs'>
                <a className='joinUsLink' href="../../components/js/footer">JOIN US</a>
            </div>

            <div className='newsCont' title="latest news">
                <div className="titleCont">
                    <h5>04</h5>
                    <h5>OUR LATEST NEWS</h5>
                </div>
                <div>
                    <div>
                        {newsData.newsData.map(i => <NewsItem coverImage={i.coverImage} date={i.date} title={i.title}/>)}
                    </div>
                </div>
                <Link to="/News" className="linkCta">SEE MORE</Link>
            </div>

        </div>
    )
}
