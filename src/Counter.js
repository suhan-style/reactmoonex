import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './Counter.css';

function Counter() {
  const [count,setCount] = useState(0);

  const getCounter = () => {
    setCount(count + 1);
  }

  useEffect( () => {
   document.title = `React (${count})`;
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{count}</div>
        <button className="btn-primary" onClick={getCounter}>Click</button>
      </header>
    </div>
  );
}

export default Counter;
