import React, { useEffect } from 'react';
import "../styles/Socsac.css";
import useNavigationStore from "../store/navigationStore.jsx";
import { useNavigate } from "react-router-dom";

const Socsac = () => {
    const navigate = useNavigate();
    const { targetPath, setTargetPath } = useNavigationStore();

    useEffect(() => {
        if (targetPath) {
            navigate(targetPath);
            setTargetPath(""); // 경로를 초기화해 한 번만 이동
        }
    }, [targetPath, navigate, setTargetPath]);

    return (
        <div className="socsac-container">
            <button onClick={() => setTargetPath("/boards/freeboard")}>
                <img src="/images/dobby.png" alt="icon" />자유게시판
            </button>
            <div>2</div>
        </div>
    );
};

export default Socsac;
