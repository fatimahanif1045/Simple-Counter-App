import React from 'react'
import { useState } from 'react';
import Counter from'../components/Counter.js';

export default function Home() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };
  
  const decrementCount = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };
  
  return (
    <div>
      <Counter count={count} increment={incrementCount} decrement={decrementCount} />
    </div>
  )
}
