import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import pageStore from "../../store/pageStore.jsx";
import "../../styles/Board.css";

const FreeBoard = () => {
    const navigate = useNavigate();

    const {
        setBoardId,
        setSize,
        fetchPageData,
        Pagination,
        list
    } = pageStore();

    useEffect(() => {
        // 페이지네이션 초기 설정
        setBoardId("freeboard");
        setSize(5);

        fetchPageData().catch(error => {
            console.error('데이터 로딩 실패:', error);
        });
    }, []);

    const handleCancel = () => {
        navigate('/');
    };

    const handleRowClick = (num) => {
        navigate(`/boards/freeboard/${num}`);
    };

    return (
        <div>
            <div className="boardTag">자유게시판</div>
            <hr className="underLine" />
            <div>
                {list && list.length > 0 ? (
                    <table className="tableForm">
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
                            <tr key={index} onClick={() => handleRowClick(item.num)} style={{ cursor: 'pointer' }}>
                                <td>{item.num}</td>
                                <td>{item.title}</td>
                                <td>{item.udtos.uid}</td>
                                <td>{item.wdate}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p>등록된 게시글이 없습니다.</p>
                )}

                <Pagination />

                <span>
                    <Link to="/boards/freeboard/write"><button>게시글 등록</button></Link>&nbsp;
                    <button onClick={handleCancel}>홈으로</button>
                </span>
            </div>
        </div>
    );
};

export default FreeBoard;