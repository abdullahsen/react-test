import React, { useState, useEffect } from "react";
import Person from './components/Person';

import "./App.css";

const URL = 'https://randomuser.me/api/?results=5';

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true)
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState(null);

  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    margin: '16px'
  }

/*   useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then((data) => {
        setIsLoaded(true);
        setPeople(data.results);
      },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []) */

  const fetchData = () => {
    setIsLoaded(false);
    setPerson(null)
    fetch(URL)
    .then(response => response.json())
    .then((data) => {
      setIsLoaded(true);
      setPeople(data.results);
    },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }

  let personDetails = null;
  if (person){
    personDetails = (<Person 
      imageUrl={person.picture.large}
      title={person.name.title}
      firstName={person.name.first}
      lastName={person.name.last}
      gender={person.gender}
      phone={person.phone}
      email={person.email}
    />)
  }else{
    personDetails = null;
  }
 
  let spinner;
  if (!isLoaded){
    spinner = (<div>Loading...</div>)
  }else{
    spinner = null
  }

  const personClickHandler = (index) => {
    setPerson(people[index]);
    
  }
  

  return(
    <div className="App">
      <button style={style} onClick={fetchData}>Fetch Users</button>
      {people.map((person, index) => {
        return <h4 onClick={()=> personClickHandler(index)} >{person.name.title} {person.name.first} {person.name.last}</h4>
      })}
      {spinner}
      {personDetails}
    </div>
  )


}

export default App;
