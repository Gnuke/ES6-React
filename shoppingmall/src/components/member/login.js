import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ id: '', pwd: '' });
  const { id, pwd } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const cancel = () => {
    navigate('/');  // 홈 페이지로 이동
  }

  const login = () => {
    axios.post('http://localhost:8082/login', {}, {
      params: {
        id: id,
        pwd: pwd
      }
    }).then(function (res) {
      if (res.status === 200) {
        if (res.data.flag) {
          alert('login 성공');
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('loginId', res.data.dto.id);
          localStorage.setItem('type', res.data.dto.type);
          console.log(localStorage);
          navigate('/');
        } else {
          alert('login 실패');
        }
      } else {
        alert('비정상 응답');
      }
    });
  }
  return (
    <div id="loginForm">
      <h3>Login</h3>
      id: <input type="text" name="id" value={id} onChange={onChange} /><br />
      pwd: <input type="password" name="pwd" value={pwd} onChange={onChange} /><br />
      <button onClick={login}>login</button>&nbsp;
      <button onClick={cancel}>취소</button>
    </div>
  )
}