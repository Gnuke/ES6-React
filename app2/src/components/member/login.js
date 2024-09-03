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

  const login = () => {
    axios.get('http://localhost:8081/members/login', {
      params: {
        id: id,
        pwd: pwd
      }
    }).then(function (res) {
      if (res.status === 200) {
        if (res.data.flag) {
          alert('login 성공');
          localStorage.setItem('loginId', res.data.loginId);
          localStorage.setItem('type', res.data.type);
          navigate('/userhome');
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
      id: <input type="text" name="id" value={id} onChange={onChange} /><br />
      pwd: <input type="password" name="pwd" value={pwd} onChange={onChange} /><br />
      <button onClick={login}>login</button>
    </div>
  )
}