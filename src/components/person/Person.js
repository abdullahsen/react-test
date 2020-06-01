import React from 'react';
import './Person.css'

const Person = (props) => {

    return(
        <div className="Person">
            <img src={props.imageUrl} alt={props.firstName} />
            <p>{props.title} {props.firstName} {props.lastName}</p>
            <p>{props.email}</p>
            <p>{props.phone}</p>
            <p>{props.gender}</p>
            <p>{props.age}</p>
            <p>{props.city} {props.state} {props.country} {props.postcode}</p>
        </div>
    )
}

export default Person;