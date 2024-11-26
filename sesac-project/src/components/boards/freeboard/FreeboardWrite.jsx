import React, { useState } from 'react';
import memStore from "../../store/memStore.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import boardStore from "../../store/boardStore.jsx";

const FreeboardWrite = () => {
    const { token } = memStore();
    const { setBoardId, boardWrite } = boardStore();
    const navigate = useNavigate();

    setBoardId("freeboard");

    // 입력값을 관리하기 위한 상태
    const [inputs, setInputs] = useState({
        title: '',
        content: ''
    });

    // input 변경 시 상태 업데이트
    const handleChange = (e) => {
        const { name, value } = e.target;  // name과 value를 가져옴
        setInputs({
            ...inputs,  // 기존의 상태를 복사한 후
            [name]: value  // name에 해당하는 값을 업데이트
        });
    };

    // 글 작성 버튼 클릭 시 호출
    const handleSubmit = (e) => {
        boardWrite(inputs, token);

        e.preventDefault();  // 페이지 새로고침 방지
        //
        // // 서버로 POST 요청
        // axios.post('http://localhost:8081/api/freeboard/write', {
        //     title: inputs.title,       // 입력된 제목
        //     content: inputs.content    // 입력된 내용
        // }, {
        //     headers: {
        //         Authorization: `Bearer ${token}`  // 인증 토큰을 올바르게 헤더에 추가
        //     }   // 입력된 내용
        // }).then((res) => {
        //     if (res.status === 200) {
        //         if(res.data.flag){
        //             alert("게시글이 성공적으로 작성되었습니다.");
        //             navigate("/boards/freeboard");
        //         }
        //     }
        // }).catch((error) => {
        //     console.error("글 작성 중 오류 발생:", error);
        //     alert("오류가 발생했습니다. 다시 시도해주세요.");
        // });
    };

    const handleCancel = (e) => {
        e.preventDefault(); // 폼 제출 방지
        e.stopPropagation(); // 이벤트 버블링 중단
        setInputs({
            // 초기값으로 설정
            title: '',
            content: ''
        });
        navigate("/boards/freeboard");
    };

    return (
        <div>
            <h3>글 작성</h3>
            <form onSubmit={handleSubmit}> {/* form에 onSubmit 적용 */}
                제목 : <input
                    type="text"
                    name="title"
                    value={inputs.title}
                    onChange={handleChange}
                /><br/><br/>
                내용 : <textarea
                    name="content"
                    value={inputs.content}
                    onChange={handleChange}
                /><br/>
                <button type="submit">작성</button>
                <button onClick={handleCancel}>취소</button>
            </form>
        </div>
    );
};

export default FreeboardWrite;
