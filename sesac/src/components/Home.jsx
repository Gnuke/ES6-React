import LoginForm from "./User/LoginForm.jsx";

const Home = () => {
    let loginId = localStorage.getItem('id');
    return (
        <div>
            {loginId === null ? (
                    <LoginForm />
                ) :
                (
                    <h3>게시판 생성 중</h3>
                )
            }
        </div>
    );
};

export default Home;