import React from 'react';
import styles from "./Header.module.css"
import memStore from "../../store/memStore.jsx";

const Header = () => {
    const {memberInfo, clearMemberInfo} = memStore();

    const signout = () => {
      clearMemberInfo();
    };

    return (
        <header className={styles.header}>
            <div className={styles.contents}>
                <div className={styles.logo}>
                    <img src="src/images/logo.png"/>
                </div>
                <nav className={styles.navigation}>
                    <ul>
                        <li>{memberInfo.uid}님 환영합니다.</li>
                        <li><button onClick={signout}>SignOut</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;