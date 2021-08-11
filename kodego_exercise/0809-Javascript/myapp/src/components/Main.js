import React from 'react';
import { useState } from 'react';

const Main = () => {
    
    const firstname = 'Jhon Lawrence';
    const lastname = 'Tamargo';
    const gender = 'Male';
    const age = 25;
    
    const array = [4,9,16,25];
    const Person = [{
        firstname: 'Pedro',
        lastname: 'Penduko',
        gender: 'male',
        age: '22'
      }, {
        firstname: 'Juan',
        lastname: 'Dela Cruz',
        gender: 'male',
        age: '24'
      },
      {
        firstname: 'Maria',
        lastname: 'Clara',
        gender: 'female',
        age: '18'
      }
    ]

    const [count, setCount] = useState(0);
    return (
        <main>
          <h1>Hi! my name is {firstname} {lastname}. I am {age}. My gender is {gender}. </h1>
          <p>ARRAY SQUARE ROOT : {array.map(Math.sqrt).join(', ')}</p>
    
          <p>PEOPLE: {Person.map( person => person.firstname + ' ' + person.lastname + ', ' + person.gender + ', ' + person.age).join(' > ')}</p>
          <p>You Click {count} times.</p>
          <button onClick={() => setCount(count + 1) }>Click me</button>
        </main>
      )
}
export default Main
