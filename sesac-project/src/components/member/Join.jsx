import {useEffect, useState} from "react";

export default function Join(){
    const [inputs, setInputs] = useState({id:'', pwd:'', name:'', email:'', pwdCheck:''});
    const [checkMsg, setCheckMsg] = useState('');

    // 비밀번호 확인 로직을 useEffect로 분리
    useEffect(() => {
        if (inputs.pwd && inputs.pwdCheck) {
            if (inputs.pwd !== inputs.pwdCheck) {
                setCheckMsg("비밀번호가 일치하지 않습니다.");
            } else {
                setCheckMsg("");
            }
        }
    }, [inputs.pwd, inputs.pwdCheck]);

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputs.pwd !== inputs.pwdCheck) {
            setCheckMsg("비밀번호가 일치하지 않습니다.");
            return;
        }else{
            setCheckMsg("");
        }
        // 회원가입 로직 실행
    };

    return (
        <div>
            <h3>회원가입</h3>
            <form onSubmit={onSubmit}>
                아이디: <input type="text" name="id" value={inputs.id} onChange={onChange} /><br />
                비밀번호: <input type="password" name="pwd" value={inputs.pwd} onChange={onChange} /><br />
                비밀번호 확인: <input type="password" name="pwdCheck" value={inputs.pwdCheck} onChange={onChange} /><br />
                {checkMsg && <div style={{ color: 'red' }}>{checkMsg}</div>}
                이메일: <input type="email" name="email" value={inputs.email} onChange={onChange} /><br />
                <button type="submit">가입</button>&nbsp;
                <button><a href="/">취소</a></button>
            </form>
        </div>
    );
}