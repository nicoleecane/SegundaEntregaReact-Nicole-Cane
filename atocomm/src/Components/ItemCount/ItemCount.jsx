import React from 'react';
import { useState } from "react";

export const Counter = ({stock, initial, onAdd}) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) { return setCount(count + 1 );}

    setCount(count);
  }

  const decrement = () => {
    if(count === 0) {
      return setCount(0);
    }

    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  }

  useEffect( () => {
    console.log('Count has changed');
  }, [])

  return (
    <>
    <h2>contador: {count}</h2>
    <button onClick={increment} > + </button>
    <button onClick={decrement} > - </button>
    <button onClick={reset} > Add to Cart</button>
    </>
  )
}
