import React from 'react';
import "../css/Deal.css";

export default function DealCont(props) {

    const barColor = () => {
        if(props.dealType == "ACQUISITION") {
            return "#862BB0"
        } else if(props.dealType == "LOAN") {
            return "#183BB7"
        } else {
            return "#34BB7A"
        }
    }
    
    return (
        <div className='dealBgCont'>
            <div className='dealCont'>
                <div>
                    <h1 className='jobType' style={{borderBottom: `6px solid ${barColor()}`}}>{props.dealType}</h1>
                </div>
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
