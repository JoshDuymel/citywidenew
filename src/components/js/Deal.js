import React from 'react';
import "../css/Deal.css";

export default function Deal(props) {
    return (
        <div className='dealCont'>
            <h1>{props.dealType}</h1>
            <h3>CUSTOMER:</h3>
            <h2>{props.customerName}</h2>
            <h3>COUNTERPARTIES</h3>
            <h2>{props.counterName}</h2>
        </div>
    )
}
