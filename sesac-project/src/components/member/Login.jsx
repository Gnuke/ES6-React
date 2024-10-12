import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {MemContext} from "./MemContext.jsx";

const Login = () => {
    const [inputs, setInputs] = useState({id:'', pwd:''});

    const {login} = useContext(MemContext);

    const onChange = (e) => {
        const{name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        login(inputs);
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