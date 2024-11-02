import React from 'react';
import {create} from "zustand";

const initialState = {
    token: JSON.parse(localStorage.getItem('token')) || null,
};

const memStore = create((set, get) => ({
    // token: JSON.parse(localStorage.getItem('token')) || null,

    ...initialState,

    setToken: (token) =>{
        try {
            set({token});
            localStorage.setItem('token', JSON.stringify(token));
        } catch (error) {
            console.error('Token storage failed:', error);
        }
    },

    // userInfo selector 추가
    getUserInfo: () => {
        const token = get().token;
        return token ? get().parseJwt(token) : null;
    },

    clearMemberInfo:()=>{
        set({token: null});
        localStorage.removeItem('token');
    },

    // 토큰 내부에 있는 정보를 이용하기 위해 token을 파싱해주는 함수
    parseJwt: (token) => {
        if (!token) return null;
        const base64Url = token.split('.')[1];
        if (!base64Url) return null;
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                .join('')
        );
        return JSON.parse(jsonPayload);
    },

    // 토큰 만료 시 재발급하기 위한 함수
    checkTokenValidity: (navigate) => {
        const token = get().token;
        const userInfo = get().parseJwt(token);
        const clearMemberInfo = get().clearMemberInfo;

        if (token && userInfo) {
            const expirationTime = userInfo.exp * 1000;
            const currentTime = Date.now();

            if (currentTime > expirationTime) {
                alert("세션이 만료되었습니다. 다시 로그인 해 주세요.");
                clearMemberInfo();
                navigate("/member/login");
            } else {
                // 만료 시간까지 남은 시간만큼 타이머 설정
                const timeRemaining = expirationTime - currentTime;
                const timer = setTimeout(() => {
                    alert("세션이 만료되었습니다. 다시 로그인해 주세요.");
                    clearMemberInfo();
                    navigate("/member/login");
                }, timeRemaining);

                // 컴포넌트 언마운트 시 타이머 클리어
                return () => clearTimeout(timer);
            }
        }
    }
}));

export default memStore;