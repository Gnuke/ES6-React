import React from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

function Home() {
  let token = localStorage.getItem('token');
  const [dto, setDto] = useState({});
  const { id, type } = dto;
  let menu = '';
  const navigate = useNavigate();
  useEffect(() => {
    if (token != null) {
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
        .catch(function (error) {
          if (error.response && error.response.status === 403) {
            alert('세션이 만료되었습니다. 다시 로그인 해주세요.');
            localStorage.removeItem('token');
            navigate('/member/login'); // 로그인 페이지로 리다이렉트
          } else {
            console.error(error);
            alert('알 수 없는 오류가 발생했습니다.');
          }
        });
    }
  }, []);
  const logout = () => {
    localStorage.removeItem('token');
    alert("로그아웃");
    navigate('/');
  }
  if (token === null) {
    menu =
      <div>
        <Link to="/member/join">회원가입</Link>&nbsp;|&nbsp;
        <Link to="/member/login">Login</Link>
      </div>;
  } else {
    menu =
      <div>
        <h5>{id} {type}님 환영합니다</h5>
        <hr />
        <button onClick={logout}>로그아웃</button>&nbsp;
        <button><Link to="/member/myinfo" style={{ textDecoration: 'none' }}>내정보확인</Link></button>&nbsp;
        <button><Link to="/board/list" style={{ textDecoration: 'none' }}>글목록</Link></button>
      </div>;
  }
  return (
    <div>
      <h1 align="center">Home</h1>
      {menu}
    </div>
  );
}

export default Home;