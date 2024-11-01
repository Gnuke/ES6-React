import React, {useEffect, useState} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./components/Home.jsx";
import Join from "./components/member/Join.jsx";
import Login from "./components/member/Login.jsx";
import memStore from "./components/store/memStore.jsx";
import Header from "./components/layouts/header/Header.jsx";
import Footer from "./components/layouts/footer/Footer.jsx";
import FreeBoard from "./components/boards/freeboard/FreeBoard.jsx";
import MyInfo from "./components/member/MyInfo.jsx";
import Write from "./components/boards/freeboard/Write.jsx";
import Detail from "./components/boards/freeboard/Detail.jsx";
import Edit from "./components/boards/freeboard/Edit.jsx";

const Router = () => {
    const {token, userId, clearMemberInfo} = memStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            const expirationTime = userId.exp * 1000;
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
    }, [token, clearMemberInfo, navigate]);

    return (
        <>
            {token && <Header />}
            <main>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/member/join" element={<Join />} />
                    <Route path="/member/login" element={<Login />} />
                    <Route path="/member/myinfo" element={<MyInfo />} />
                    <Route path="/boards/freeboard" element={<FreeBoard />} />
                    <Route path="/boards/freeboard/write" element={<Write />} />
                    <Route path="/boards/freeboard/:num" element={<Detail />} />
                    <Route path="/boards/freeboard/edit/:num" element={<Edit />} />
                </Routes>
            </main>
            {token && <Footer />}
        </>
    );
};

export default Router;