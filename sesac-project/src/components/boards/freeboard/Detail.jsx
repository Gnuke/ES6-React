import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import memStore from "../../store/memStore.jsx";
import PasswordModal from "../../member/PasswordModal.jsx";

const Detail = () => {
    const { num } = useParams();
    const [dto, setDto] = useState(null);
    const {token} = memStore();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8081/api/freeboard/' + num,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(function (res){
                if(res.status === 200){
                    if(res.data){
                        setDto(res.data.dto);
                    }
                }else {
                    console.log("비정상 응답");
                }
            })
    }, []);

    const cancel = () => {
        navigate("/boards/freeboard");
    }

    // 삭제
    const handleDelete = (check) => {
        axios.delete(`http://localhost:8081/api/freeboard/delete/${num}`, {
            headers: {
                Authorization: `Bearer ${token}`  // 토큰을 헤더에 포함
            },
            data: { check: check }  // 요청 본문으로 비밀번호 전달
        }).then(function(res){
            if(res.status === 200){
                if(res.data.flag){ // 회원 정보 클리어
                    alert("게시글 삭제 완료");
                    navigate("/boards/freeboard"); // 홈으로 리디렉션
                }else{
                    alert("비밀번호가 일치하지 않습니다");
                    setIsModalOpen(false); // 모달 닫기
                }
            }
        })
    }

    const handleCancel = () => {
        setIsModalOpen(false);  // 취소 버튼을 누르면 모달을 닫음
    };

    return (
        <div>
            {dto ? (
                    <>
                        <h2>제목: {dto.title}</h2>
                        <p>내용: {dto.content}</p>
                        <p>작성자: {dto.uid}</p>
                        <p>작성일: {dto.wdate}</p>

                        <div>
                            {dto.uid === userId.sub && (
                                <>
                                    <Link to={`/boards/freeboard/edit/${num}`}>
                                        <button>수정</button>
                                    </Link>
                                    <button onClick={() => setIsModalOpen(true)}>게시글 삭제</button>
                                </>
                            )}
                            <button onClick={cancel}>취소</button>
                        </div>
                        {isModalOpen && <PasswordModal onSubmit={handleDelete} onCancel={handleCancel}/>}
                    </>
                )
                : (
                <div>게시글을 불러오고 있습니다...</div>
            )}
        </div>
    );
};

export default Detail;