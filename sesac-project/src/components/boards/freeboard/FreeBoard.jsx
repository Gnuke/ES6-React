import React, {useEffect, useState} from 'react';
import memStore from "../../store/memStore.jsx";
import axios from "axios";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FreeBoard = () => {
    const {token} = memStore();
    const [list, setList] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8081/api/board/freeboard', {
            //proxy
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(function(res) {
                if (res.status === 200) {
                    if (res.data && res.data.length > 0) {
                        setList(res.data);  // 데이터를 상태에 저장
                    } else {
                        // 데이터가 없을 때
                        setList([]);  // 빈 리스트 설정
                    }
                } else {
                    console.log("비정상 응답");
                }
            })
            .catch(function(error) {
                console.error("데이터 로드 중 오류 발생:", error);
            });
    }, []);

    const handleCancel = () => {
        navigate('/');
    };


    return (
        <div>
            <h3>자유게시판</h3>
            <div className="board-table">
                {list && list.length > 0 ? (
                    <table border="1">
                        <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                        </tr>
                        </thead>
                        <tbody>
                        {list.map((item, index) => (
                            <tr key={index}>
                                <td>{item.num}</td>
                                <td>
                                <Link to={`/boards/freeboard/${item.num}`}>
                                    {item.title}
                                </Link>
                                </td>
                                <td>{item.udtos.uid}</td>
                                <td>{item.wdate}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p>등록된 게시글이 없습니다.</p>
                )}
                <Link to="/boards/freeboard/write">
                    <button>게시글 등록</button>
                </Link>&nbsp;
                <button onClick={handleCancel}>홈으로</button>
            </div>
        </div>
    );
};

export default FreeBoard;