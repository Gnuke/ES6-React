import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Myinfo() {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [dto, setDto] = useState({
    id: '',
    pwd: '',
    name: '',
    email: '',
    type: ''
  });
  let { id, pwd, name, email, type } = dto;

  const onChange = (e) => {
    const { name, value } = e.target;
    setDto({
      ...dto,
      [name]: value
    })
  }


  const delMem = () => {
    const confirm = window.confirm("정말 탈퇴하시겠습니까?");
    if (confirm) {
      axios.delete(`http://localhost:8082/member/${id}`, {
        headers: {
          token: token
        }
      }).then(function (res) {
        if (res.status === 200) {
          alert('회원 탈퇴가 완료되었습니다.');
          localStorage.removeItem('token');  // 토큰 삭제
          navigate('/');  // 홈으로 이동
        } else {
          alert('탈퇴 처리 실패');
        }
      }).catch(function (error) {
        if (error.response && error.response.status === 403) {
          alert('세션이 만료되었습니다. 다시 로그인 해주세요.');
          localStorage.removeItem('token');
          navigate('/member/login'); // 로그인 페이지로 리다이렉트
        } else {
          console.error(error);
          alert('알 수 없는 오류가 발생했습니다.');
        }
        console.error("탈퇴 요청 중 오류 발생", error);
        alert('탈퇴 요청 중 오류가 발생했습니다.');
      });
    }
  }

  // 취소 버튼 클릭 시 홈으로 이동하는 함수
  const cancel = () => {
    navigate('/');  // 홈 페이지로 이동
  }

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
          alert('사용자 정보를 불러올 수 없습니다.');
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
  }, [token]);
  return (
    <div id="update">
      <h3>회원정보</h3>
      <input type='hidden' name='pwd' value={pwd || ''} />
      <input type="hidden" name="id" value={id || ''} /><br />
      name : {name}<br />
      email : {email}<br />
      type : {type}<br />
      <button onClick={delMem}>탈퇴</button>&nbsp;
      <button onClick={cancel}>취소</button>  {/* 취소 버튼 추가 */}
    </div>
  )
}
