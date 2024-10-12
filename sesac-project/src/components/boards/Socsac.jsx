import React from 'react';
import memStore from "../store/memStore.jsx";
import {Link} from "react-router-dom";

const Socsac = () => {
    const {memberInfo} = memStore();

    return (
        <div>
            <div>
                <Link to="/boards/freeboard">
                    <button>
                        <span>logo </span>자유게시판
                    </button>
                </Link>
            </div>
            <div>2</div>
        </div>
    );
};

export default Socsac;