import React from 'react';
import "../css/Deal.css";

export default function DealCont(props) {

    const barColor = () => {
        if (props.dealType === "ACQUISITION") {
            return "#862BB0"
        } else if (props.dealType === "LOAN") {
            return "#183BB7"
        } else {
            return "#34BB7A"
        }
    }

    const bgColor = () => {
        if (props.dealType === "ACQUISITION") {
            return "purpBG"
        } else if (props.dealType === "LOAN") {
            return "blueBG"
        } else {
            return "greenBG"
        }
    }
    
    return (
        <div className='dealBgCont'>
            <div className= {`${bgColor()}`}>
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
        </div>
    )
}
