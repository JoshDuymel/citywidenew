import React from 'react';
import "../css/KeyFig.css";

export default function KeyFig(props) {
   
    return (
        <div className='keyFigCont'>
            <h1>{props.date}</h1>
            <svg>
                <rect/>
            </svg>
            <h2>{props.title}</h2>
        </div>
    )
}
