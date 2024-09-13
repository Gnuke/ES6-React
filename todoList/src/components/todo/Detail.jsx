import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Detail() {
  const navigate = useNavigate();
  const { bnum } = useParams();
  const [dto, setDto] = useState({ num: 0, title: '', content: '', wdate: '' });
  const { num, title, content, wdate } = dto;
  useEffect(() => {
    axios.get('http://localhost:8081/detail/' + bnum)
      .then(function (res) {
        if (res.status === 200) {
          setDto(res.data.dto);
        } else {
          alert('호출 실패');
        }
      })
  }, []);

  const del = () => {
    axios.delete('http://localhost:8081/detail/' + bnum)
      .then(function (res) {
        if (res.status === 200) {
          alert('삭제완료');
          navigate('/');
        }
      })
  }

  //수정----------------------------------------------
  const onChange = (e) => {
    const { name, value } = e.target;
    setDto({
      ...dto,
      [name]: value
    })
  }

  const update = () => {
    axios.put('http://localhost:8081/detail/' + bnum, dto )
        .then(function (res){
          if(res.status === 200){
            alert('수정완료');
            navigate('/');
          }
        })
  }

  // 날짜 format func
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  return (
    <div id="detail">
      <h5>오늘 할 일</h5>
      <form>
        <table align='center' style={{ border: 1 }}>
          <tbody>
            <tr><td>num : {num}</td></tr>
            <tr><td>작성일 : {formatDate(wdate)}</td></tr>
            <tr><td>제목 : <input id="a" type="text" name="title" value={title} onChange={onChange}></input></td></tr>
            <tr><td>내용 : <input id="b" type="text" name="content" value={content} onChange={onChange}></input></td></tr>
          </tbody>
        </table>
      </form>
      <button onClick={update}>수정</button>&nbsp;
      <button onClick={del}>삭제</button>&nbsp;
      <button><a href='/'>취소</a></button>
    </div>
  )
}
