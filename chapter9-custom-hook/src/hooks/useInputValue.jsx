import { useState } from "react";

function useInputValue() {
  const [input, setInput] = useState(0);

  const myChange = (evt) => {
    setInput(evt.target.value);
    console.log(input);
  }

  return [input, myChange];
}

export default useInputValue;