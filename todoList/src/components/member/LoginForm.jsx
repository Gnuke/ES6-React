import {useState} from "react";
import {Link} from "react-router-dom";

export default function LoginForm(){
    const [inputs, setInputs] = useState({id:'', pwd:''});
    const {id, pwd} = inputs;

    const onChange = (e) => {
        const{name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const login = () => {
        // console.log( inputs.id );
        // console.log( inputs.pwd );
    }

    return(
        <div>
            <h4>login</h4>
            ID : <input type="text" name="id" value={id} onChange={onChange}/><br />
            PWD : <input type="password" name="pwd" value={pwd} onChange={onChange}/><br />
            <button onClick={login}>login</button>&nbsp;
            <Link to="/member/join"><button >Join</button></Link>
        </div>
    )
}