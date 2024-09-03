import { Link, useNavigate } from "react-router-dom";

export default function Hello() {
  let loginId = localStorage.getItem('loginId');
  let menu = '';
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('loginId');
    localStorage.removeItem('type');
    navigate('/userhome');
  }
  if (loginId === null) {
    menu =
      <div>
        <Link to="/member/join">회원가입</Link>&nbsp;|&nbsp;
        <Link to="/member/login">Login</Link>
      </div>;
  } else {
    menu =
      <div>
        <button onClick={logout}>로그아웃</button>&nbsp;
        <button><Link to="/member/myinfo" style={{ textDecoration: 'none' }}>내정보확인</Link></button>
        <button><Link to="/board/list" style={{ textDecoration: 'none' }}>글목록</Link></button>
      </div>;
  }

  return (
    <div>
      <h3>user home</h3>
      {menu}
    </div>
  )
}