import './App.css';
import { data } from './data';
import { useState } from 'react';

function App() {
  const [person, setPerson] = useState(0);
  const { name, description, age, image } = data[person];
  // console.log(data[person])


  const previousPerson = ()=> {
    setPerson(person => {
      person--;
      if (person < 0) {
        return data.length -1;
      }
      return person;
    })
  }

  const nextPerson = ()=> {
    setPerson(person => {
      person++;
      if (person > data.length-1) {
        person = 0;
      }
      return person;
    })
  }

  return (
    <div >
      <div className='container'>
        <img src={image} alt="person" width="270px" />
      </div>

      <div className='container'>
        <h1> {name}, </h1>
      </div>
      <div className='container'>
      <h3>{age} years old</h3>
      </div>

      <div className='container'>
        <h2>{description}</h2>
      </div>

      <div className='container btn'>
        <button onClick={previousPerson}>Previous</button>
        <button onClick={nextPerson}>Next</button>
      </div>
      <br />
      <hr />
      <div className='container'>
        <p>by Ina Gencer</p>
      </div>
    </div>
  
  );
}

export default App;
