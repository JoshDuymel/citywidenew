import React from 'react';
import "../css/history.css";

export default function History(props) {
    return (
        <div className='historyCont'>
            <h1>{props.date}</h1>
            <svg>
                <rect/>
            </svg>
            <h2>{props.title}</h2>
        </div>
    )
}
