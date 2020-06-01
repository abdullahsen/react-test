import React from 'react';
import Person from './Person';


const PersonList = (props) => {
    props.people.map(person => {
        return <Person 
            title={props.title}
            firstName={person.firstName}
            lastName={person.lastName}
            imageUrl={person.imageUrl}
            email={props.email}
            phone={props.phone}
            gender={props.gender}
            age={props.age} />
    })
}


export default PersonList;