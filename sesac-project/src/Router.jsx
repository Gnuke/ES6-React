import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import Join from "./components/member/Join.jsx";
import Login from "./components/member/Login.jsx";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/member/join" element={<Join />} />
            <Route path="/member/login" element={<Login />} />
        </Routes>
    );
};

export default Router;