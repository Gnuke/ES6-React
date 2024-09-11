import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleCountUp = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked <span>{count}</span> times </p>
      <button onClick={handleCountUp}>
        Click me !
      </button>
    </div>
  )
}
