import {create} from 'zustand';

const useNavigationStore = create((set) => ({
    targetPath: "", // 경로를 문자열로 저장
    setTargetPath: (path) => set({ targetPath: path }) // 경로 설정 함수
}));

export default useNavigationStore;
