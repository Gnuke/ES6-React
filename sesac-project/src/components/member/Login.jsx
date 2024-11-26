import React, {useState} from 'react';
import {Link} from "react-router-dom";
import useMemStore from "../hooks/useMemStore.jsx";

const Login = () => {
    const [inputs, setInputs] = useState({id:'', pwd:''});
    const {signIn, setToken} = useMemStore();

    const onChange = (e) => {
        const{name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const result = await signIn( inputs );

        if(result){
            setToken(result);
        }else{
            console.log("로그인 실패");
        }
    }

    return (
        <div className="loginWrapper">
            <div className="loginBox">
                <h2>Sign In</h2>
                <form onSubmit={onSubmit}>
                    ID : <input type="text" name="id" value={inputs.id} onChange={onChange}/><br/>
                    PWD : <input type="password" name="pwd" value={inputs.pwd} onChange={onChange}/><br/>
                    <button type="submit">Sign-In</button>
                    &nbsp;
                    <Link to="/member/join">
                        <button>Join</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;