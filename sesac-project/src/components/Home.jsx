import React from 'react';
import Login from "./member/Login.jsx";
import memStore from "./store/memStore.jsx";
import Socsac from "./boards/Socsac.jsx";

const Home = () => {
    const {token} = memStore();

    return(
        <>
            {token ? <Socsac /> : <Login />}
        </>
    )
};

export default Home;