import axios from "axios";
import { useEffect, useState } from "react";


export default function Myinfo() {
  const token = localStorage.getItem('token');
  const [dto, setDto] = useState({});
  const { id, pwd, type } = dto;
  // 컴포넌트가 렌더링 할 때 마다 실행되는 함수
  // 처음 한번만 실행하려면, 빈 배열을 넣어주면 됨 = window.onload()
  useEffect(() => {
    axios.get('http://localhost:8082/auth/meminfo', {
      headers: {
        token: token
      }
    })
      .then(function (res) {
        if (res.status === 200) {
          setDto(res.data.dto);
        } else {
          alert('비정상 응답');
        }
      })
  }, []);

  return (
    <div>
      <h2>MyInfo</h2>
      id: {id}<br />
      pwd: {pwd}<br />
      type: {type}<br />
    </div>
  )
}