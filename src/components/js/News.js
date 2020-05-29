import React from 'react';

export default function News(props) {
    return (
        <div className='newsCont'>
            <img src=''/>
            <div>
                <h3>{props.date}</h3>
                <h1>{props.title}</h1>
            </div>
            <h2>CITYWIDE NEWS</h2>
        </div>
    )
}
