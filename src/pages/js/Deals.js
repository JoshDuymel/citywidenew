import React from 'react';
// import { Link } from "react-router-dom";

import "../css/Deals.css";

import dealData from '../../data/deals.json';
import DealCont from '../../components/js/Deal';

export default function Deals() {
    return (

        <div className='dealsCont'>
            <div className="featureStaticCont" title="a featureBox">
                <div className="featureCont">
                    <h1>Our references.</h1>
                    <h4 className="sDText" >SCROLL DOWN</h4>
                </div>
            </div>

            <div className="dealsSectionCont" title="the latest deals">
                <div className="titleCont">
                    <h5>02</h5>
                    <h5>OUR LATEST DEALS</h5>
                </div>
                <div className='dealsContentCont'>
                    {dealData.dealData.map(i => <DealCont dealType={i.dealType} customerName={i.customerName} counterName={i.counterName}/>)}
                </div>
                {/* <button className="linkCta" onClick={loadMore()} >LOAD MORE</button> */}
            </div>
            
        </div>
    )
}
