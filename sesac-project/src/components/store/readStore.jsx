import {create} from "zustand";
import axios from "axios";
import "../styles/Pagination.css"

const readStore = create((set, get) => ({
    page: 1, // 현재 페이지 초기값 ( 1로 시작할 수 있도록 )
    size: 10, // 한 페이지에서 보일 data 수
    boardId: null, // 보드 구분하기 위한 파라미터
    totalPages: 1, // 전체 페이지 수
    currentPage: 1, // 현재 페이지
    list: [],

    setPage: (page) => set({ page, currentPage: page }),
    setSize: (size) => set({size}),
    setBoardId: (boardId) => set({boardId}),
    setTotalPages: (totalPages) => set({totalPages}),
    setList: (list) => set({ list }),

    fetchPageData: async () => { // 일단 freeboard pagination
        const {boardId, page, size } = get();

        const token = JSON.parse(localStorage.getItem('token'));

        if (!token) {
            alert("토큰이 유효하지 않습니다. 다시 로그인해주세요.");
        }

        try {
            const res = await axios.get(`http://localhost:8081/api/${boardId}`, {
                headers: {
                  Authorization: `Bearer ${token}`
                },
                params: { page, size }
            });
            set({ currentPage: res.data.number + 1 }); // 페이지 번호는 0부터 시작
            set({ totalPages: res.data.totalPages });
            set({ list: res.data.content });
            return res.data.content;
        } catch (error) {
            console.error("페이지 데이터를 가져오는 중 오류 발생:", error);
            return null;
        }
    },

    // updatePageData: 페이지 이동 후 데이터 업데이트
    updatePageData: async (action) => {
        await action();
        await get().fetchPageData();
    },

    // 페이지 이동 함수들에서 updatePageData를 호출
    goToNextPage: async () => {
        const { currentPage, totalPages, setPage, updatePageData } = get();
        if (currentPage < totalPages) {
            updatePageData(() => setPage(currentPage + 1));
        }
    },

    goToPreviousPage: async () => {
        const { currentPage, setPage, updatePageData } = get();
        if (currentPage > 1) {
            updatePageData(() => setPage(currentPage - 1));
        }
    },

    goToPage: async (pageNumber) => {
        const { setPage, updatePageData } = get();
        updatePageData(() => setPage(pageNumber));
    },

    goToFirstPage: async () => {
        const { setPage, updatePageData } = get();
        updatePageData(() => setPage(1));
    },

    goToLastPage: async () => {
        const { totalPages, setPage, updatePageData } = get();
        updatePageData(() => setPage(totalPages));
    },

    Pagination: () => {
        const { currentPage, totalPages, goToNextPage, goToPreviousPage, goToPage, goToFirstPage, goToLastPage } = get();
        const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

        return (
            <div className="pagination">
                <button onClick={goToFirstPage} disabled={currentPage === 1}>
                    {"<<"}
                </button>
                <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                    {"<"}
                </button>
                {pageNumbers.map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => goToPage(pageNumber)}
                        className={currentPage === pageNumber ? "active" : ""}
                    >
                        {pageNumber}
                    </button>
                ))}
                <button onClick={goToNextPage} disabled={currentPage === totalPages}>
                    {">"}
                </button>
                <button onClick={goToLastPage} disabled={currentPage === totalPages}>
                    {">>"}
                </button>
            </div>
        );
    },
}));

export default readStore;