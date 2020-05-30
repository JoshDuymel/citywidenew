import React from 'react';
import "../css/News-Item.css";
import newsData from '../../data/news.json';

export default function NewsItem(props) {
    return (
        
        <div className='newsContainer'>
            <img className='newsImg' src='{props.coverImage}' alt="unrelated image" />
            <div className='newsContent'>
                <h3 className='newsDate'>{props.date}</h3>
                <h2>{props.title}</h2>
                <a className='cta'>READ MORE</a>
            </div>
            <h4 className='secTitle'>CITYWIDE NEWS</h4>
        </div>
    )
}

