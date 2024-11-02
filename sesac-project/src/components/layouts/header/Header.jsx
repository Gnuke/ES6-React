import {useEffect, useMemo} from 'react';  // useState 제거, useMemo 추가
import styles from "../../styles/Header.module.css"
import memStore from "../../store/memStore.jsx";
import {useNavigate, useLocation} from "react-router-dom";  // useLocation 추가

const Header = () => {
    const {clearMemberInfo, token, getUserInfo, checkTokenValidity} = memStore();  // store에서 getUserInfo 사용
    const navigate = useNavigate();
    const location = useLocation();  // 현재 경로 확인을 위해 추가

    // useState + useEffect 대신 useMemo 사용
    const userInfo = useMemo(() => {
        return getUserInfo();
    }, [getUserInfo]);

    useEffect(() => {
        // 토큰 유효성 검사
        if (token) {
            const cleanup = checkTokenValidity(navigate);
            return cleanup;
        }
    }, [token, navigate, checkTokenValidity]);

    const myinfo = () => {
        navigate('/member/myinfo', {state: {token}});
    }

    const signout = () => {
        clearMemberInfo();
        alert("로그아웃");
        navigate("/");
    };

    return (
        <header className={styles.header}>
            <div className={styles.contents}>
                <div className={styles.logo}>
                    <img src="/images/logo.png" alt="로고" className={styles.logo}/>
                </div>
                <nav className={styles.navigation}>
                    <ul>
                        <li>
                            {userInfo ? `${userInfo.sub}님 환영합니다.` : "로그인이 필요합니다."}
                        </li>
                        <li>
                            {userInfo && location.pathname !== '/member/myinfo' && (
                                <button onClick={myinfo}>내정보</button>
                            )}
                        </li>
                        <li>
                            {userInfo && <button onClick={signout}>SignOut</button>}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;