import React, { useState } from 'react';
import PasswordModal from './PasswordModal';
import memStore from "../store/memStore.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const MyComponent = () => {
    const { memberInfo, clearMemberInfo } = memStore();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDeleteAccount = (check) => {
        console.log('입력된 비밀번호:', check);
        axios.post('http://localhost:8081/check-password',{
            check: check,
            uid: memberInfo.uid
        }).then(function(res){
            if(res.data.flag){
                clearMemberInfo();
                navigate("/");
                alert("탈퇴완료");
            }else{
                alert("비밀번호가 일치하지 않습니다");
                setIsModalOpen(false);
            }
        })
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);  // 취소 버튼을 누르면 모달을 닫음
    };

    // 회원 정보가 없으면 리다이렉트 (페이지 새로 고침 시 대비, 토큰 만료 될 수도 있으니까)
    React.useEffect(() => {
        if (!memberInfo) {
            navigate("/");
        }
    }, [memberInfo, navigate]);
    
    return (
        <div className="boardContents">
            {memberInfo ? (
                <>
                    <p>ID: {memberInfo.uid}</p>
                    <p>이메일: {memberInfo.email}</p>
                    <p>가입일: {memberInfo.joinDate}</p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button onClick={() => setIsModalOpen(true)}>회원 탈퇴</button>
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