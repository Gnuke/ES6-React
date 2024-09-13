
import LoginForm from "./member/LoginForm.jsx";
import List from "./todo/List.jsx";
import {MemProvider} from "./member/MemContext.jsx";

export default function Home(){
    let loginId = localStorage.getItem('id');
    //const [dto, setDto] = useState();
    return(
        <>
            {loginId === null ? (
                    <MemProvider>
                        <LoginForm />
                    </MemProvider>
                ) :
                (
                    <MemProvider>
                        <List />
                    </MemProvider>
                )
            }
        </>
    )
}