import React from 'react'

export default function Counter({ count, increment, decrement }) {
  return (
<div>
      <button type="button" onClick={increment}>increment</button>
      <p>{ count }</p>
      <button type="button" onClick={decrement}>decrement</button>
</div>
  );
}
