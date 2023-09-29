import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  return(
    <div>
        <p>Counter: {count}</p>
        <button onClick={increment}>plus</button>
    </div>
  )

};
