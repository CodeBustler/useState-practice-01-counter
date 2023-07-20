import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);

  const decrease = () => {
    if (count <= 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <h1>Counter | Using useState() </h1>
      <h2>React useState() hook Practice | Project 01</h2>
      <hr />
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

// Task 1: Counter
// Create a simple counter component that displays a number and two buttons - one for incrementing the count and another for decrementing it.
