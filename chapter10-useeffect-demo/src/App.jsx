import { useState, useEffect, useRef } from "react"
import MyComponent from "./components/MyComponent";

function App() {
  const [count, setCount] = useState(0);
  const flag = useRef(false);

  // Mount
  useEffect(() => {
    console.log('mount...');
  }, []);

  // page가 처음 rendering 될 때 한 번만 호출
  const myClick = () => {
    setCount(count + 1);
  }

  //2. Update 할 때
  useEffect(() => {
    if (!flag.current) {
      flag.current = true;
      return;
    }
    console.log('Update...');
  }); // page가 rerendering 될 때 마다
  return (
    <>
      <h1>Count : {count}</h1>
      {count % 2 == 0 ? <MyComponent /> : null}
      <button onClick={myClick} type='button'>Count Up</button>
    </>
  )
}

export default App
