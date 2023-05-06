import { useState } from 'react';

import classes from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const decrementCount = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      {count}
      <button className={classes.btn} onClick={incrementCount}>
        increment
      </button>
      <button onClick={decrementCount}>decrement</button>
    </div>
  );
};
