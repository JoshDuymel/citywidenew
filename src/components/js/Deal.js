import React from 'react';
import "../css/Deal.css";

export default function DealCont(props) {
    return (
        <div className='dealBgCont'>
            <div className='dealCont'>
                <h1 className='jobType'>{props.dealType}</h1>
                <div>
                    <h3 className='roleType'>CUSTOMER:</h3>
                    <h6>{props.customerName}</h6>
                </div>
                <div>
                    <h3 className='roleType'>COUNTERPARTIES</h3>
                    <h6>{props.counterName}</h6>
                </div>
            </div>
        </div>
    )
}
