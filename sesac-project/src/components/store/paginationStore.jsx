import {create} from "zustand";
import axios from "axios";
import "../styles/Pagination.css"

const paginationStore = create((set, get) => ({
    page: 1, // 현재 페이지 초기값 ( 1로 시작할 수 있도록 )
    size: 10, // 한 페이지에서 보일 data 수
    totalPages: 1, // 전체 페이지 수
    currentPage: 1, // 현재 페이지
    onPageChange: null, // 페이지 변경 시 실행할 콜백 함수

    setPage: (page) => set({ page, currentPage: page }),
    setSize: (size) => set({size}),
    setTotalPages: (totalPages) => set({totalPages}),
    setOnPageChange: (callback) => set({ onPageChange: callback }), // 콜백 설정 함수 추가

    
    // updatePageData: 페이지 이동 후 데이터 업데이트
    updatePageData: async (action) => {
        await action();
        const { page, size, onPageChange } = get();
        // 설정된 콜백이 있다면 실행
        if (onPageChange) {
            await onPageChange(page, size);
        }
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

export default paginationStore;