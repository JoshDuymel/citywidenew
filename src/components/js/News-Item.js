import React from 'react';
import "../css/News-Item.css";

import { Link } from "react-router-dom";

export default function NewsItem(props) {
    return (
        
        <div className='newsContainer'>
            <img className='newsImg' src={props.coverImage} alt="unrelated" />
            <div className='newsContent'>
                <h3 className='newsDate'>{props.date}</h3>
                <h2>{props.title}</h2>
                <Link to="/News" className="cta">READ MORE</Link>
            </div>
            <h4 className='secTitle'>CITYWIDE NEWS</h4>
        </div>
    )
}

