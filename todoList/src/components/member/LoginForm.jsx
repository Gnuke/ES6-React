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

    // const login = () => {
    //     axios.post('http://localhost:8082/login', {}, {
    //         params: {
    //             id: id,
    //             pwd: pwd
    //         }
    //     }).then(function (res) {
    //         if (res.status === 200) {
    //             if (res.data.flag) {
    //                 alert('login 성공');
    //                 localStorage.setItem('token', res.data.token);
    //                 localStorage.setItem('loginId', res.data.dto.id);
    //                 localStorage.setItem('type', res.data.dto.type);
    //                 console.log(localStorage);
    //                 navigate('/');
    //             } else {
    //                 alert('login 실패');
    //             }
    //         } else {
    //             alert('비정상 응답');
    //         }
    //     });
    // }

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