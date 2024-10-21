import React, { useState, useEffect } from 'react';
import PasswordModal from './PasswordModal';
import memStore from "../store/memStore.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const MyComponent = () => {
    const { token, clearMemberInfo } = memStore();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dto, setDto] = useState({
        uid: '',
        email: '',
        joinDate: ''
    });

    let {uid, email, joinDate} = dto;

    useEffect(() => {
        axios.get('http://localhost:8081/api/member/myInfo',{
            headers: {
                Authorization: `Bearer ${token}` // Authorization 헤더에 토큰 포함
            }
        })
            .then( function (res){
                if(res.status === 200){
                    setDto(res.data.dto);
                }else{
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
    },[]);

    const handleDeleteAccount = (check) => {
        axios.post('http://localhost:8081/api/member/check-password',
            { check: check }, // 비밀번호만 바디로 전송
            {
                headers: {
                    Authorization: `Bearer ${token}` // Authorization 헤더에 토큰 포함
                }
            }
        ).then(function(res){
            if(res.data.flag){
                clearMemberInfo(); // 회원 정보 클리어
                alert("탈퇴 완료");
                navigate("/"); // 홈으로 리디렉션
            }else{
                alert("비밀번호가 일치하지 않습니다");
                setIsModalOpen(false); // 모달 닫기
            }
        })
            .catch(function(err){
                console.error('탈퇴 중 오류 발생:', err);
                alert('탈퇴 처리 중 오류가 발생했습니다.');
            });

        setIsModalOpen(false); // 모달 닫기
    };

    const handleCancel = () => {
        setIsModalOpen(false);  // 취소 버튼을 누르면 모달을 닫음
    };

    // 회원 정보가 없으면 리다이렉트 (페이지 새로 고침 시 대비, 토큰 만료 될 수도 있으니까)
    React.useEffect(() => {
        if (!token) {
            navigate("/");
        }
    }, [token, navigate]);

    const cancel = () =>{
        navigate("/");
    }
    
    return (
        <div className="boardContents">
            {token ? (
                <>
                    <p>ID: {uid}</p>
                    <p>이메일: {email}</p>
                    <p>가입일: {joinDate}</p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button onClick={() => setIsModalOpen(true)}>회원 탈퇴</button>&nbsp;
                        <button onClick={cancel}>취소</button>
                    </div>
                    {isModalOpen && <PasswordModal onSubmit={handleDeleteAccount} onCancel={handleCancel} />}
                </>
            ) : (
                <p>회원 정보가 없습니다. 홈으로 이동 중...</p>
            )}
        </div>
    );
};

export default MyComponent;