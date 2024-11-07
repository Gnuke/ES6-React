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
import Write from "./components/boards/freeboard/FreeboardWrite.jsx";
import Detail from "./components/boards/freeboard/Detail.jsx";
import Edit from "./components/boards/freeboard/Edit.jsx";

const Router = () => {
    const {token, checkTokenValidity} = memStore();
    const navigate = useNavigate();

    useEffect(() => {
        checkTokenValidity(navigate)
    }, [navigate]);

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