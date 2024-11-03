import React, {useEffect} from 'react';
import {Await, Link, useNavigate} from "react-router-dom";
import paginationStore from "../../store/paginationStore.jsx";
import "../../styles/Board.css";
import boardStore from "../../store/boardStore.jsx";

const FreeBoard = () => {
    const navigate = useNavigate();

    const {setBoardId, fetchPageData, list,boardId} = boardStore();
    const {
        page,
        size,
        setSize,
        Pagination,
        setOnPageChange,
    } = paginationStore();

    useEffect(() => {
            const initBoard = async () => {
                // 페이지네이션 초기 설정
                setBoardId("freeboard");
                setSize(3);

                // 페이지 변경 시 실행할 콜백 설정
                setOnPageChange((page, size) => fetchPageData(page, size));

                try {
                    await fetchPageData(page, size);
                } catch (error) {
                    console.error('데이터 로딩 실패:', error);
                }
            };

            initBoard();

            // 컴포넌트 언마운트 시 콜백 제거
            return () => setOnPageChange(null);
        }, [page,size]);

    // home button, 나중에 상태관리에 들어갈 듯
    const toHome = () => {
        navigate('/');
    };

    const handleRowClick = (num) => {
        //console.log("현재 게시판 : " + boardId);
        //게시글 넘버를 받아서 이동, 또한 상태관리에 들어갈 듯
        navigate(`/boards/${boardId}/${num}`);
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
                                <td>{item.uid}</td>
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
                    <button onClick={toHome}>홈으로</button>
                </span>
            </div>
        </div>
    );
};

export default FreeBoard;