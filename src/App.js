import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[name,setName]=useState("Hello world");
  function changemsg(){
   setName("Good Morning");
  }
  return (
   <div>
    <h1>{name}</h1>
    <button onClick={changemsg}>change msg</button>
   </div>
  );
}

export default App;
