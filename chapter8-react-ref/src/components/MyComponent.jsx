import React, { useRef } from 'react';
import { useState } from 'react';

//1. useRef vs useState
//  1) useState : 값 유지, 값이 변경되면 변경된 값 기준으로 화면을 리렌더링한다.
//  2) useRef : 값이 변경되어도 화면의 갱신 작업을 하지 않는다. 즉, 값만 변경되고 화면 유지된다.

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const useRefObj = useRef(0);
  //console.log(useRefObj);
  console.log('useRef 렌더링');
  console.log('useState 렌더링');
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>state : Count up</button>

      <h1>useRef Count : {useRefObj.current}</h1>
      <button onClick={() => {
        setCount(useRefObj.current++);
        console.log(useRefObj.current);
      }
      }>ref : Count up</button>
    </div>
  );
};

export default MyComponent;