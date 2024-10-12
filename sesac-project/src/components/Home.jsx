import React from 'react';
import Login from "./member/Login.jsx";
import memStore from "./store/memStore.jsx";
import Sesac from "./boards/Socsac.jsx";

const Home = () => {
    const {memberInfo} = memStore();

    return(
        <>
            {memberInfo ? <Sesac /> : <Login />}
        </>
    )
};

export default Home;