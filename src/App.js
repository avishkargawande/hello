import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [number, setNumber] = useState("");
  function checkNumber(event) {
    setNumber(event.target.value)
  }
  function EvenOdd() {
    if (number % 2 == 0) {
      setNumber(number+" :number is even");

    }
    else {
      setNumber(number+" :number is odd");

    }
  }

return (
  <div>
    <input type="text" onChange={checkNumber}></input>
    <button onClick={EvenOdd}>submit</button>
    <h1>{number}</h1>
  </div>
);
}
export default App;