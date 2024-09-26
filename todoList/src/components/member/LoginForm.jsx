import {useContext, useState} from "react";
import {Link} from "react-router-dom";
//import axios from "axios";
import {MemContext} from "./MemContext.jsx";

export default function LoginForm(){
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
    return(
        <div>
            <h4>login</h4>
            <form onSubmit={onSubmit}>
                ID : <input type="text" name="id" value={inputs.id} onChange={onChange}/><br />
                PWD : <input type="password" name="pwd" value={inputs.pwd} onChange={onChange}/><br />
                <button type="submit">login</button>&nbsp;
                <Link to="/member/join"><button >Join</button></Link>
            </form>
        </div>
    )
}