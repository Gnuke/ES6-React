import axios from "axios";
import { useState} from "react";
//import { useNavigate } from "react-router-dom";

export default function Insert() {
  //const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [inputs, setInputs] = useState({ title: '', content: '' });
  const { title, content } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/add',{
      title: title,
      content: content
    },{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
  }

  return (
    <div id="insertForm">
      <h3>할 일 작성</h3>
      <form onSubmit={onSubmit}>
        제목: <input type="text" name="title" value={title} onChange={onChange} /><br />
        내용: <input type="text" name="content" value={content} onChange={onChange} /><br />
        <button type="submit">작성</button>&nbsp;
        <button><a href="/todo">취소</a></button>
      </form>
    </div>
  )
}
