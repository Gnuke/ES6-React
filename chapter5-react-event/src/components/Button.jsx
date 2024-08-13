import React from 'react';
import { useState } from 'react';

function Button(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>현재 카운터 : {count}</h1>
      <button onClick={(evt) => {
        setCount(count + 1);
      }}>{props.title}</button>
      <button onClick={(evt) => {
        setCount(count - 1);
      }}>Count Down</button>
    </div>
  );
}

export default Button;