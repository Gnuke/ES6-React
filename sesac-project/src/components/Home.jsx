import React from 'react';
import Login from "./member/Login.jsx";
import useMemStore from "./hooks/useMemStore.jsx";

import Socsac from "./boards/Socsac.jsx";

const Home = () => {
    const {token} = useMemStore();

    return(
        <>
            {token ? <Socsac /> : <Login />}
        </>
    )
};

export default Home;