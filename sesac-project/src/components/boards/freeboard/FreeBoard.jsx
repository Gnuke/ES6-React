import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import "../../styles/Board.css";
import boardStore from "../../store/boardStore.jsx";

const FreeBoard = () => {
    const navigate = useNavigate();
    const {fetchPageData} = boardStore();
    const boardId = "freeboard";

    useEffect(() => {
        fetchPageData(boardId);
    }, []);


    return (
        <div>
            <div className="boardTag">자유게시판</div>
            <hr className="underLine" />
            <div>
                {/*{list && list.length > 0 ? (*/}
                {/*    <table className="tableForm">*/}
                {/*        <thead>*/}
                {/*        <tr>*/}
                {/*            <th>번호</th>*/}
                {/*            <th>제목</th>*/}
                {/*            <th>작성자</th>*/}
                {/*            <th>작성일</th>*/}
                {/*        </tr>*/}
                {/*        </thead>*/}
                {/*        <tbody>*/}
                {/*        {list.map((item, index) => (*/}
                {/*            <tr key={index} onClick={() => handleRowClick(item.num)} style={{ cursor: 'pointer' }}>*/}
                {/*                <td>{item.num}</td>*/}
                {/*                <td>{item.title}</td>*/}
                {/*                <td>{item.uid}</td>*/}
                {/*                <td>{item.wdate}</td>*/}
                {/*            </tr>*/}
                {/*        ))}*/}
                {/*        </tbody>*/}
                {/*    </table>*/}
                {/*) : (*/}
                {/*    <p>등록된 게시글이 없습니다.</p>*/}
                {/*)}*/}

                {/*<Pagination />*/}

                {/*<span>*/}
                {/*    <Link to="/boards/freeboard/write"><button>게시글 등록</button></Link>&nbsp;*/}
                {/*    <button onClick={toHome}>홈으로</button>*/}
                {/*</span>*/}
            </div>
        </div>
    );
};

export default FreeBoard;