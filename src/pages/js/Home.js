import React from 'react';
import "../css/home.css";

import dealData from '../../data/deals.json';
import employeeData from '../../data/employees.json';
import newsData from '../../data/news.json';

import Deal from '../../components/js/Deal';
import Employee from '../../components/js/Employee';
import News from '../../components/js/News';

export default function Home() {
    return (
        <div className="homeCont">

            <div className="featureCont" title="a featureBox">
                <h1>
                  Hands-on financing for<br/>Kiwis.
                </h1>
                <h4 className="sDText" >SCROLL DOWN</h4>
            </div>

            <div className="whoWeAreCont" title="an about section">
                <div className="numberCont">
                    <h5>01</h5>
                </div>
                <div className="mainCont">
                    <h5>WHO WE ARE</h5>
                    <h3>Citywide Capital Limited is a small financing company. Because of our hands on management approach we are able to focus on our clients and achieve success. A two decade long working formula.</h3>
                    <p>Citywide does not participate by way of taking equity positions on any project. We are financiers, not developers, and do not use funds for our own purposes except in exceptional circumstances if a project turns sour and we think our position is better protected by buying back the subject property. That has only happened on two occasions in our history.</p>
                    <a classname='cta'>About</a>
                </div>
            </div>

            <div classname='sectionCont' title="the latest deals">
                <div>
                    <h4>02</h4>
                    <h3>OUR LATEST DEALS</h3>
                </div>
                <div className='contentCont'>
                    {dealData.Deals.map(i => <Deal dealType={i.dealType} customerName={i.customerName} counterName={i.counterName}/>)}
                </div>
                <a classname='cta'>SEE MORE</a>
            </div>

            <div className='sectionCont' title="the employees">
                <div>
                    <h4>03</h4>
                    <h3>OUR TEAM</h3>
                </div>
                <p>Our team of professionals is diverse and can boast collective decades of expereince to our craft.</p>
                <div className='contentCont'>
                    {employeeData.Employees.map(i => <Employee firstName={i.firstName} lastName={i.lastName} jobTitle={i.jobTitle}/>)}
                </div>
                <a classname='cta'>SEE MORE</a>
            </div>

            <div className='sectionCont' title="latest news">
                <div>
                    <h4>04</h4>
                    <h3>OUR LATEST NEWS</h3>
                </div>
                <div>
                    <div className='contentCont'>
                        {newsData.News.map(i => <News coverImage={i.coverImage} date={i.date} title={i.title}/>)}
                        <a className='cta'>READ MORE</a>
                    </div>
                    <h3 className='newsTitle'>CITYWIDE NEWS</h3>
                </div>
                <a className='cta'>SEE MORE</a>
            </div>

        </div>
    )
}
