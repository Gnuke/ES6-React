import React, {useEffect, useState} from 'react';
import memStore from "../../store/memStore.jsx";
import axios from "axios";
import {Link} from "react-router-dom";

const FreeBoard = () => {
    const {memberInfo} = memStore();
    const [list, setList] = useState();

    useEffect(() => {
        axios.get('http://localhost:8081/freeboard')
            .then(function(res){
                if(res.status === 200){
                    if(res.data.list && res.data.list.length > 0){
                        setList(res.data.list);
                    }else{
                        setList([]);
                    }
                }
            })
            .catch(function (error) {
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
                            <h4>{item.title}</h4>
                            <p>작성자: {item.writer}</p>
                            <p>작성일: {item.createdAt}</p>
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