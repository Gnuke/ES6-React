import React, { useState } from 'react';
import memStore from "../../store/memStore.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Write = () => {
    const { memberInfo } = memStore();
    const uid = memberInfo.uid;
    const navigate = useNavigate();

    // 입력값을 관리하기 위한 상태
    const [inputs, setInputs] = useState({
        uid: uid,
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
        e.preventDefault();  // 페이지 새로고침 방지

        // 서버로 POST 요청
        axios.post('http://localhost:8081/freeboard/write', {
            uid: uid,       // localStorage에서 가져온 사용자 uid
            title: inputs.title,       // 입력된 제목
            content: inputs.content    // 입력된 내용
        }).then((res) => {
            if (res.status === 200) {
                // alert("글이 성공적으로 작성되었습니다.");
                // navigate("/boards/freeboard");  // 작성 후 자유게시판으로 이동
                console.log("정상응답");
            }
        }).catch((error) => {
            console.error("글 작성 중 오류 발생:", error);
            alert("오류가 발생했습니다. 다시 시도해주세요.");
        });
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
                /><br /><br />
                내용 : <textarea
                    name="content"
                    value={inputs.content}
                    onChange={handleChange}
                /><br />
                <button type="submit">작성</button>
            </form>
        </div>
    );
};

export default Write;