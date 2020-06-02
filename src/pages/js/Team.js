import React from 'react';

import "../css/Team.css";

import employeeData from '../../data/employees';
import Employee from '../../components/js/Employee';

export default function Team() {
    return (
        <div>
            <div className="featureStaticCont" title="a featureBox">
                <div className="featureCont">
                    <h1>Our team.</h1>
                    <h4 className="sDText" >SCROLL DOWN</h4>
                </div>
            </div>

            <div className='sectionCont' title="the employees">
                <div className="teamExpCont">
                    <div className="titleCont">
                        <h5>03</h5>
                        <h5>OUR TEAM</h5>
                    </div>
                    <h1>An experienced team to help you with your projects.</h1>
                    <h2>We promote co-operation and collaboration by putting together multidisciplinary teams for each project. This enables us to combine financial expertise with an in-depth understanding of our customer’s business.</h2>
                    <div className='teamCountCont'>
                        <h5>{employeeData.length}</h5>
                        <h5>PEOPLE</h5>
                    </div>
                </div>
                <div className='teamContentCont'>
                    {employeeData.map(i => <Employee firstName={i.firstName} lastName={i.lastName} jobTitle={i.jobTitle}/>)}
                </div>
                {/* <button className="linkCta" onClick={loadMore()} >LOAD MORE</button> */}
            </div>            
        </div>
    )
}
