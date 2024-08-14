import React from 'react';
import { useRef } from 'react';

function Main(props) {
  const nameRef = useRef();
  const onSubmit = () => {
    //const name = document.querySelector('#username').value; -> JS 방식
    //const name = nameRef.current.value;
    if (!nameRef.current.value || nameRef.current.value === '') {
      nameRef.current.style.backgroundColor = 'red';
      //nameRef.current.style.border = '1px solid red';
      nameRef.current.focus();
    }
    //console.log(name);
  }
  return (
    <div>
      Name : <input type="text" ref={nameRef} /><br />
      <input type="button" value="Submit" onClick={onSubmit} />
    </div>
  );
}

export default Main;