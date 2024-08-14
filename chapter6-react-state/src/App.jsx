import { useState } from "react"
import Counter from "./components/Counter";
import Lighter from "./components/Lighter";
import MyState from "./components/MyState";

//1. State가 변경되면 화면이 re-rendering 된다.
//2. 부모 Component에서 자식 Component로 데이터를 전달하는 Props와 달리 State는 자식 Component에서만 사용할
//    수 있는 전역변수이다.
//3. State가 여러 개일 경우 계속 re-rendering이 발생하기 때문에 분리해야 한다.
//4. Page가 re-rendering 되는 세 가지 이유
//  1)Props가 변경되면
//  2)State가 변경되면
//  3)부모 Component가 변경되면
function App() {
  // const [state, setState] = useState(0);
  // const [light, setLight] = useState('OFF');
  console.log('update');
  return (
    <>
      {/* <h1>{state}</h1>
      <button onClick={() => {
        setState(state + 1);
      }}>Increase</button>
      <h1>{light}</h1>
      <button onClick={() => {
        setLight(light === 'ON' ? 'OFF' : 'ON')
      }}>light change</button> */}
      {/* <Counter />
      <Lighter /> */}

      <MyState />
    </>
  )
}

export default App
