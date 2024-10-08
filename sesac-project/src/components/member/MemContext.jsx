import {createContext, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const MemContext = createContext();

export const MemProvider = ({children}) => {
    const navigate = useNavigate();
    const [members, setMembers] = useState([]);

    const join = (inputs) => {
        setMembers([...members, inputs]);
        axios.post('http://localhost:8081/signup',{
            uid: inputs.id,
            pwd: inputs.pwd,
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
        axios.post('http://localhost:8081/signin',{
            uid: inputs.id,
            pwd: inputs.pwd
        }).then(function(res){
            if(res.status === 200){
                if(res.data.flag){
                    //console.log(res.data.memberInfo.uid);
                    localStorage.setItem("loginId", res.data.memberInfo.uid);
                }else{
                    alert("로그인 실패");
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

