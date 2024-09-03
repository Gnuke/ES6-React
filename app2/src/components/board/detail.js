import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Detail() {
  const { bnum } = useParams();
  const [dto, setDto] = useState({ num: 0, writer: {}, wdate: '', title: '', content: '' });
  const { num, writer, wdate, title, content } = dto;
  const navigate = useNavigate();
  const del = () => {
    axios.delete('http://localhost:8081/boards/' + bnum)
      .then(function (res) {
        if (res.status === 200) {
          if (res.data.flag) {
            alert('삭제완료');
            navigate('/board/list');
          }
        }
      })
  }
  let menu = '';
  useEffect(() => {
    axios.get('http://localhost:8081/boards/' + bnum)
      .then(function (res) {
        if (res.status === 200) {
          setDto(res.data.dto);
        } else {
          alert('삭제 실패');
        }
      })
  }, []);
  let loginId = localStorage.getItem('loginId');
  if (loginId === writer.id) {
    menu = <button onClick={del}>삭제</button>;
  }
  return (
    <div id="detail">
      <h3>게시글</h3>
      <table align="center">
        <tbody>
          <tr><td>num : {num}</td></tr>
          <tr><td>작성자 : {writer.id}</td></tr>
          <tr><td>작성일 : {wdate}</td></tr>
          <tr><td>제목 : {title}</td></tr>
          <tr><td>내용 : {content}</td></tr>
        </tbody>
      </table><br />
      {menu}
    </div>
  )
}