import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState("");
  function EvenOdd() {
    if (number % 2 == 0) {
      setNumber("number is even");

    }
    else {
      setNumber("number is odd");

    }
  }
  return (
    <div>
      <h1>{number}</h1>
      <input type="text" onChange={(e)=>{setNumber(e.target.value)}}></input>
      <button onClick={EvenOdd}>submit</button>
    </div>
  );
}
export default App;