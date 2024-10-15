import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import Join from "./components/member/Join.jsx";
import Login from "./components/member/Login.jsx";
import memStore from "./components/store/memStore.jsx";
import Header from "./components/layouts/header/Header.jsx";
import Footer from "./components/layouts/footer/Footer.jsx";
import FreeBoard from "./components/boards/freeboard/FreeBoard.jsx";
import MyInfo from "./components/member/MyInfo.jsx";
import Write from "./components/boards/freeboard/Write.jsx";

const Router = () => {
    const {memberInfo} = memStore()
    return (
        <>
            {memberInfo && <Header />}
            <main>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/member/join" element={<Join />} />
                    <Route path="/member/login" element={<Login />} />
                    <Route path="/member/myinfo" element={<MyInfo />} />
                    <Route path="/boards/freeboard" element={<FreeBoard />} />
                    <Route path="/boards/freeboard/write" element={<Write />} />
                </Routes>
            </main>
            {memberInfo && <Footer />}
        </>
    );
};

export default Router;