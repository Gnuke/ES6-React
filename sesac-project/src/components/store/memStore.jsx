import React from 'react';
import {create} from "zustand";
import axios from "axios";

const initialState = {
    token: JSON.parse(localStorage.getItem('token')) || null,
};

const memStore = create((set, get) => ({
    ...initialState,
    timerId: null, // timerId를 상테에 저장해 토큰의 생명주기를 관리할 때 기존 타이머가 중복되지 않도록 관리하기 위한 변수

    signIn: async (inputs) => {
      try{
          const res = await axios.post("http://localhost:8080/api/member/signin", {
              uid: inputs.id,
              pwd: inputs.pwd
          })
          if(res.status === 200){
            const token = res.data.token;
            return token;
          }else{
              console.log("실패데이터 : " + res.data.flag);
              return "실패";
          }
      }catch(error){
          console.error(error);
          return error;
      }
    },

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
        const timerId = get().timerId;
        if (timerId) clearTimeout(timerId);  // timerId가 null이 아닌 경우만 clearTimeout() 호출 -> 타이머 해제
        set({token: null, timerId: null});
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
                const timerId = setTimeout(() => {
                    alert("세션이 만료되었습니다. 다시 로그인해 주세요.");
                    clearMemberInfo();
                    navigate("/member/login");
                }, timeRemaining);

                set({timerId})

                // 컴포넌트 언마운트 시 타이머 클리어
                return () => clearTimeout(timerId);
            }
        }
    }
}));

export default memStore;