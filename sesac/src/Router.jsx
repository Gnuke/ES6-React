import React from 'react';
import SignUp from "./components/User/SignUp.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/*<Route path="/todo" element={<List />} />*/}
            {/*<Route path="/todo/add" element={<Insert />} />*/}
            {/*<Route path="/todo/detail/:bnum" element={<Detail />} />*/}
            <Route path="/user/signup" element={<SignUp />} />
        </Routes>
    );
};

export default Router;