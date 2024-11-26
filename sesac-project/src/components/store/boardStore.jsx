import {create} from "zustand";
import axios from "axios";
import paginationStore from "./paginationStore.jsx";

const BoardStore = create((set,get) => ({
    boardId: null, // 보드 구분하기 위한 파라미터
    list: [],

    fetchPageData: async (page, size) => {
        const { boardId } = get();
        const token = JSON.parse(localStorage.getItem('token'));

        if (!token) {
            alert("토큰이 유효하지 않습니다. 다시 로그인해주세요.");
            return "/";
        }else{
            try {
                const res = await axios.get(`http://localhost:8081/api/${boardId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    params: {page, size}
                });
                console.log("pagenation & dataList : " + res);
                //set({list: res.data.content});
                //console.log("응답 내용 : ", JSON.stringify(res.data.content, null, 2));

                //paginationStore.getState().setTotalPages(res.data.totalPages);

                //return res.data.content;
            } catch (error) {
                console.error("데이터 로딩 중 오류 발생:", error);
                alert("데이터 로딩에 실패했습니다.");
            }
        }
    },

    // write 함수 작성 중
    boardWrite: async (inputs, token) => {
        const {boardId} = get();
        console.log("-------------------------------------");
        console.log( "title : " + inputs.title );
        console.log( "content : " + inputs.content );
        console.log( "token : " + token );
        console.log( "boardId : " + boardId );
    }

}));

export default BoardStore;