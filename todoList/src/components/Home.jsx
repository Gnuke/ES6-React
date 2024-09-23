
import LoginForm from "./member/LoginForm.jsx";
import List from "./todo/List.jsx";

export default function Home(){
    let loginId = localStorage.getItem('id');
    return(
        <>
            {loginId === null ? (
                    <LoginForm />
                ) :
                (
                    <List />
                )
            }
        </>
    )
}