import React from 'react'

export default function Employee(props) {
    return (
        <div className='employeeCont'>
            <h2>{props.firstName} {props.lastName}</h2>
            <h1>{props.jobTitle}</h1>
        </div>
    )
}
