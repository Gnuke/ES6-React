import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Join() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ id: '', pwd: '', name: '', email: '', type: '' });
  const { id, pwd, name, email, type } = inputs;
  const onChange = (e) => { // e: 방금 발생한 이벤트 객체
    const { name, value } = e.target;
    setInputs({
      ...inputs, //다른 요소는 값을 그대로 유지
      [name]: value //이벤트 발생한 요소만 value 변경
    })
  }
  const a = () => {
    axios.post('http://localhost:8081/members', {
      params: {
        id: id, pwd: pwd,
        name: name, email: email, type: type
      }
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
      navigate('/userhome');
    })
  }
  return (
    <div id="input">
      id: <input type="text" name="id" value={id} onChange={onChange} /><br />
      pwd: <input type="password" name="pwd" value={pwd} onChange={onChange} /><br />
      name: <input type="text" name="name" value={name} onChange={onChange} /><br />
      email: <input type="email" name="email" value={email} onChange={onChange} /><br />
      type: <input type="text" name="type" value={type} onChange={onChange} /><br />
      <button onClick={a}>가입</button>
    </div>
  )
}