import axios from 'axios';
import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Join() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ id: '', pwd: '', name: '', email: '', type: '' });
  const { id, pwd, name, email, type } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const join = () => {
    axios.post('http://localhost:8082/member/join', {
      id: id,
      pwd: pwd,
      name: name,
      email: email,
      type: type
    }).then(function (res) {
      if (res.status === 200) {
        let txt = 'id:' + res.data.dto.id;
        txt += '\npwd:' + res.data.dto.pwd;
        txt += '\nname:' + res.data.dto.name;
        txt += '\nemail:' + res.data.dto.email;
        txt += '\ntype:' + res.data.dto.type;
        alert('회원가입 완료. 회원정보\n' + txt);
      } else {
        alert('가입 실패');
      }
      navigate('/');
    })
  }

  return (
    <div id="loginform">
      <h3>회원가입</h3>
      id: <input type="text" name="id" value={id} onChange={onChange} /><br />
      pwd: <input type="password" name="pwd" value={pwd} onChange={onChange} /><br />
      name: <input type="text" name="name" value={name} onChange={onChange} /><br />
      email: <input type="email" name="email" value={email} onChange={onChange} /><br />
      <div>
        type:
        <input type="radio" name="type" value="구매자" checked={type === '구매자'} onChange={onChange} /> 구매자
        <input type="radio" name="type" value="판매자" checked={type === '판매자'} onChange={onChange} /> 판매자
      </div>
      <button onClick={join}>가입</button>
    </div>
  )
}
