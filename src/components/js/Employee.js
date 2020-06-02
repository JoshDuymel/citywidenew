import React from 'react'
import "../css/Employee.css";

export default function Employee(props) {
    return (
        <div className='employeeBgCont' 
        // style={{backGroundImage: src({props.profPic})}}
        >
            <div className='employeeCont'>
                <h5 className='empName' >{props.firstName} {props.lastName}</h5>
                <h6>{props.jobTitle}</h6>
            </div>
        </div>
    )
}
