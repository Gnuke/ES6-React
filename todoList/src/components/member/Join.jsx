//import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {MemContext, MemProvider} from "./MemContext.jsx";

export default function Join(){
    //const navigate = useNavigate();
    const [inputs, setInputs] = useState({id:'', pwd:'', name:'', email:'', pwdCheck:''});
    const { join } = useContext(MemContext);

    // 비밀번호 확인 메시지 상태 관리
    const [checkMsg, setCheckMsg] = useState('');

    // const onChange = (e) => {
    //     const{ name, value } = e.target;
    //     setInputs({
    //         ...inputs,
    //         [name] : value
    //     })
    //
    //     // 비밀번호와 비밀번호 확인 일치 여부 확인
    //     if (name === 'pwd' || name === 'pwdCheck') {
    //         if (inputs.pwd !== inputs.pwdCheck) {
    //             setCheckMsg("비밀번호를 다시 확인해 주세요." + <br />);
    //         } else {
    //             setCheckMsg('');
    //         }
    //     }else if(inputs.trim() !== ''){
    //         join(inputs);
    //         setInputs('');
    //     }
    // }

    const onSubmit = (e) => {
        e.preventDefault();

        join(inputs);
        setInputs({ id: '', pwd: '', name: '', email: '', pwdCheck: '' });
    }

    // const onChange = (e) => {
    //     console.log(e.target.value);
    // }
    return(
        <div>
            <h3>회원가입</h3>
            <form onSubmit={onSubmit}>
                아이디 :
                <input type="text" name="id" value={inputs.id} onChange={(e) => setInputs(e.target.value)}/><br/>
                비밀번호 :
                <input type="password" name="pwd" value={inputs.pwd} onChange={(e) => setInputs(e.target.value)}/><br/>
                비밀번호 확인 :
                <input type="password" name="pwdCheck" value={inputs.pwdCheck} onChange={(e) => setInputs(e.target.value)}/><br/>
                {checkMsg && <div style={{ color: 'red' }}>{checkMsg}</div>}
                UserName :
                <input type="text" name="name" value={inputs.name} onChange={(e) => setInputs(e.target.value)}/><br/>
                email :
                <input type="email" name="email" value={inputs.email} onChange={(e) => setInputs(e.target.value)}/><br/>
                <button type="submit">가입</button>&nbsp;
                <button ><a href="/">취소</a></button>
            </form>
        </ div>
        <MemProvider></MemProvider>
    )
}