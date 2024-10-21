import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from 'axios';
import memStore from "../../store/memStore.jsx";  // 로그인 상태 저장소
import PasswordModal from "../../member/PasswordModal.jsx";  // 비밀번호 모달 컴포넌트

const Edit = () => {
    const { num } = useParams();  // 게시글 번호 추출
    const [inputs, setInputs] = useState({ title: '', content: '' });  // 제목, 내용 상태 관리
    const { token } = memStore();  // 로그인된 사용자의 인증 토큰
    const navigate = useNavigate();  // 페이지 이동을 위한 네비게이트
    const [isModalOpen, setIsModalOpen] = useState(false);  // 모달 상태 관리

    // 게시글 가져오기
    useEffect(() => {
        axios.get(`http://localhost:8081/api/board/${num}`, {
            headers: {
                Authorization: `Bearer ${token}`  // 인증 토큰을 헤더에 포함
            }
        })
            .then((res) => {
                if (res.status === 200 && res.data) {
                    setInputs({
                        title: res.data.dto.title,  // 서버에서 받은 제목
                        content: res.data.dto.content  // 서버에서 받은 내용
                    });
                } else {
                    console.log("게시글을 불러오지 못했습니다.");
                }
            })
            .catch((error) => {
                console.error("데이터 로드 중 오류 발생:", error);
            });
    }, [num, token]);  // num과 token이 변경될 때마다 실행

    // 입력 필드 변경 핸들러
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    // 수정 폼 제출 핸들러 (모달을 열기)
    const handleEdit = () => {
        setIsModalOpen(true);  // 모달 열기
    };

    // 모달에서 확인을 누르면 수정 요청 보내기
    const handleSubmit = (check) => {
        setIsModalOpen(false);  // 모달 닫기

        axios.put(`http://localhost:8081/api/board/edit/${num}`, {
            title: inputs.title,
            content: inputs.content,
            check: check  // 모달에서 받은 비밀번호를 함께 전송
        }, {
            headers: {
                Authorization: `Bearer ${token}`  // 수정 요청에도 토큰 포함
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    alert("게시글이 수정되었습니다.");
                    navigate(`/boards/freeboard/${num}`);  // 수정 후 상세 페이지로 이동
                } else {
                    console.log("게시글 수정 실패");
                }
            })
            .catch((error) => {
                console.error("게시글 수정 중 오류 발생:", error);
                alert("수정에 실패했습니다.");
            });
    };

    // 모달 취소
    const handleCancel = () => {
        setIsModalOpen(false);  // 모달 닫기
    };

    return (
        <div>
            <h2>게시글 수정</h2>
            <form>
                <div>
                    <label>제목: </label>
                    <input
                        type="text"
                        name="title"
                        value={inputs.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>내용: </label>
                    <textarea
                        name="content"
                        value={inputs.content}
                        onChange={handleChange}
                    />
                </div>
                <button type="button" onClick={handleEdit}>수정</button>
                <button type="button" onClick={() => navigate(`/boards/freeboard/${num}`)}>취소</button>
            </form>

            {/* 비밀번호 확인 모달 */}
            {isModalOpen && (
                <PasswordModal
                    onSubmit={handleSubmit}  // 비밀번호 확인 후 처리
                    onCancel={handleCancel}  // 모달 닫기
                />
            )}
        </div>
    );
};

export default Edit;
