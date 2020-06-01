import React, { useState, useEffect } from "react";
import Person from './components/person/Person';
import Button from './components/button/Button';
import Spinner from './components/spinner/Spinner';
import "./App.css";

const URL = 'https://randomuser.me/api/?results=5';

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true)
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState(null);


  /* useEffect(()=> {
    setIsLoaded(false);
    setPerson(null)

    fetch(URL)
    .then(response => response.json())
    .then((data) => {
      setIsLoaded(true);
      setPeople(data.results);
      setPerson(data.results[0])
    },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  },[]) */

  const fetchData = () => {

    setIsLoaded(false);
    setPerson(null)

    fetch(URL)
      .then(response => response.json())
      .then((data) => {
        setIsLoaded(true);
        setPeople(data.results);
        setPerson(data.results[0])
      },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }

  const personClickHandler = (index) => {
    setPerson(people[index]);

  }



  let personDetails;
  if (person) {
    personDetails = (<Person
      imageUrl={person.picture.large}
      title={person.name.title}
      firstName={person.name.first}
      lastName={person.name.last}
      gender={person.gender}
      phone={person.phone}
      email={person.email}
      age={person.dob.age}
      city={person.location.city}
      state={person.location.state}
      country={person.location.country}
      postcode={person.location.postcode}
    />)
  }


  let spinner = null;
  if (!isLoaded) {
    spinner = (<Spinner loading={true} />)
  }


  if (error) {
    return <div>Error: <span>{error}</span></div>
  }

  const listElement =  (<div className="ListContainer">
  {people.map((person, index) => {
    return <p key={index} onClick={() => personClickHandler(index)} >{person.name.title} {person.name.first} {person.name.last}</p>
  })}
</div>);

  return (
    <div className="App">
      <Button clicked={fetchData} />
      {(people.length===0) ? null : listElement }
      {spinner}
      {personDetails}
    </div>
  )
}

export default App;
