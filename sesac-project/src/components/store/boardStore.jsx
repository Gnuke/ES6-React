import {create} from "zustand";

const BoardStore = create((set,get) => ({
    boardId: null, // 보드 구분하기 위한 파라미터
    inputs: [],

    setInputs: (inputs) => set({inputs}),

    writeData: async () => {
        const token = JSON.parse(localStorage.getItem('token'));

        if (!token) {
            alert("토큰이 유효하지 않습니다. 다시 로그인해주세요.");
            return "/";
        }
    }

}));

export default BoardStore;