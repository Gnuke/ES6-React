import React, {useEffect, useState} from 'react';
import memStore from "../../store/memStore.jsx";
import axios from "axios";
import {Link} from "react-router-dom";

const FreeBoard = () => {
    const {token} = memStore();
    const [list, setList] = useState();

    useEffect(() => {
        axios.get('http://localhost:8081/api/board/freeboard', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(function(res) {
                if (res.status === 200) {
                    if (res.data && res.data.list && res.data.list.length > 0) {
                        // 데이터가 있을 때
                        setList(res.data.list);  // 데이터를 상태에 저장
                    } else {
                        // 데이터가 없을 때
                        setList([]);  // 빈 리스트 설정
                        console.log("등록된 게시글이 없습니다");
                    }
                } else {
                    console.log("비정상 응답");
                }
            })
            .catch(function(error) {
                console.error("데이터 로드 중 오류 발생:", error);
            });
    }, []);


    return (
        <div>
            <h3>자유게시판</h3>
            <div className="board-cards">
                {list && list.length > 0 ? (
                    list.map((item, index) => (
                        <div key={index} className="card">
                            <h4>{item.num}</h4>
                            <p>제목: {item.title}</p>
                            <p>작성일: {item.wdate}</p>
                        </div>
                    ))
                ) : (
                    <p>등록된 게시글이 없습니다.</p>
                )}
                <Link to="/boards/freeboard/write">
                <button>게시글 등록</button>
                </Link>
                <button><a href="/">홈으로</a></button>
            </div>
        </div>
    );
};

export default FreeBoard;