import React, { useState } from 'react';

const Register = () => {
  // 모두 합치기
  const [input, setInput] = useState({
    name: '',
    birth: '',
    city: '',
    age: 0,
    gender: '',
  }); // 여러 타입의 Data를 받기 위해 Object 사용
  // const [name, setName] = useState('');
  // const [birth, setBirth] = useState('');
  // const [city, setCity] = useState('');
  // const [age, setAge] = useState(0);

  //2. EventHandler 합치기
  const onMyChange = (evt) => {
    setInput({
      ...input,
      [evt.target.name]: evt.target.value,
    })
  }

  //1.
  // const changeName = (evt) => setInput({
  //   ...input,
  //   name: evt.target.value
  // });
  // const changeBirth = (evt) => setInput({
  //   ...input,
  //   birth: evt.target.value
  // });
  // const changeCity = (evt) => setInput({
  //   ...input,
  //   city: evt.target.value
  // });
  // const changeAge = (evt) => setInput({
  //   ...input,
  //   age: evt.target.value
  // });

  // origin
  // const changeName = (evt) => setName(evt.target.value);
  // const changeBirth = (evt) => setBirth(evt.target.value);
  // const changeCity = (evt) => setCity(evt.target.value);
  // const changeAge = (evt) => setAge(evt.target.value);

  console.log(input);
  const cityArray = ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Gwangju'];

  //Submit
  const onSubmit = () => {
    const result = `<ul>
<li>이름:${input.name}</li>
<li>출생년월일:${input.birth}</li>
<li>거주지:${input.city}</li>
<li>나이:${input.age}</li>
<li>성별:${input.gender}</li>
</ul>`;
    document.querySelector('#result').innerHTML = result;
  }
  return (
    <div>
      <form>
        <p>Name : <input type="text" name='name' onChange={onMyChange}
          placeholder='이름을 입력해 주세요.' /></p>
        <p>Birth : <input type="date" name='birth' onChange={onMyChange} /></p>
        <p>City : <select onChange={onMyChange} name='city'>
          <option value="">--Choose--</option>
          {/* <option value="서울">Seoul</option>
          <option value="부산">Busan</option>
          <option value="대전">Daejeon</option>
          <option value="광주">Gwangju</option>
          <option value="인천">Incheon</option> */}
          {cityArray.map((item, index) => <option key={index} value={item}>{item}</option>)}
        </select>
        </p>
        <p>Age : <input type="number" max="60" name='age' onChange={onMyChange} /></p>
        <p>Gender :
          <input type="radio" name="gender" value="남성" onChange={onMyChange} />Male&nbsp;&nbsp;
          <input type="radio" name="gender" value="여성" onChange={onMyChange} />Female
        </p>
        <p><button type="button" onClick={onSubmit}>가입하기</button></p>
      </form>
      <hr />
      <div id='result'>결과는 여기에</div>
    </div>
  );
};

export default Register;