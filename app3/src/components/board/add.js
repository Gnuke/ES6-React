import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Add() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const add = () => {
    let fdata = new FormData(document.getElementById('f'));
    axios.post('http://localhost:8082/board', fdata, {
      headers: { "Content-type": "multipart/form-data", token: token }
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
      navigate('/board/list');
    });
  }

  //html
  return (
    <div id="addForm">
      <h3>글 작성</h3>
      <form id="f">
        title: <input type="text" name="title" /><br />
        file: <input type="file" name="f" /><br />
      </form>
      <button onClick={add}>작성</button>
    </div>
  )
}