import React from 'react';
import styles from "../../styles/Header.module.css"
import memStore from "../../store/memStore.jsx";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const {userId, clearMemberInfo, token} = memStore();
    const navigate = useNavigate();

    const signout = () => {
      clearMemberInfo();
      alert("로그아웃");
      navigate("/");
    };

    const myinfo = () => {
        navigate('/member/myinfo', {state: {token}});
    }

    return (
        <header className={styles.header}>
            <div className={styles.contents}>
                <div className={styles.logo}>
                    <img src="/images/logo.png" className={styles.logo}/>
                </div>
                <nav className={styles.navigation}>
                    <ul>
                        <li>{userId.sub}님 환영합니다.</li>
                        <li>
                            {location.pathname !== '/member/myinfo' && (
                                <button onClick={myinfo}>내정보</button>
                            )}
                        </li>
                        <li>
                            <button onClick={signout}>SignOut</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;