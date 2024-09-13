import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Insert() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ title: '', content: '' });
  const { title, content } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }
  const insert = async () => {
    axios.post('http://localhost:8081/add', {
      title,
      content
    }).then(function (res) {
      if (res.status === 200) {
        if (res.data.flag) {
          alert('글 작성 완료');
        } else {
          alert('작성 실패');
        }
      } else {
        alert('잘못된 호출');
      }
      navigate('/');
    })
  }
  return (
    <div name="insertForm">
      <h3>할 일 작성</h3>
      제목: <input type="text" name="title" value={title} onChange={onChange} /><br />
      내용: <input type="text" name="content" value={content} onChange={onChange} /><br />
      <button onClick={insert}>작성</button>
    </div>
  )
}
