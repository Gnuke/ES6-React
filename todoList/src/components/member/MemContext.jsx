import {createContext, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const MemContext = createContext();

export const MemProvider = ({children}) => {
    const navigate = useNavigate();
    const [members, setMembers] = useState([]);

    const join = (inputs) => {
        setMembers([...members, inputs]);
        axios.post('http://localhost:8081/member/join',{
            id: inputs.id,
            pwd: inputs.pwd,
            name: inputs.name,
            email: inputs.email
        }).then(function(res){
            if(res.status === 200 ){
                if(res.data.flag){
                    alert('회원가입 완료');
                    navigate('/');
                }else{
                    alert('회원가입 실패');
                }
            }else{
                alert('잘못된 반응');
            }
        });
    }

    const login = (inputs) => {
        axios.post('http://localhost:8081/member/login',{
            id: inputs.id,
            pwd: inputs.pwd
        }).then(function(res){
            if(res.status === 200){
                if(!res.data.flag){
                    alert("비밀번호가 일치하지 않습니다")
                }
                else if(res.data.myInfo !== null){
                    alert('login 성공');
                    localStorage.setItem('token', res.data.token);
                }else{
                    alert('아이디 또는 비밀번호가 존재하지 않습니다.')
                }
            }
        })
    }
    return(
        <MemContext.Provider value={{ members, join, login }}>
            {children}
        </MemContext.Provider>
    )
}

