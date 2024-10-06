import {createContext, useState} from 'react';
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [users, setUsers] = useState([]);

    const join = (inputs) => {
        setUsers([...users, inputs]);
        axios.post('http://localhost:8080/join', {
            username: inputs.id,
            password: inputs.password,
            email: inputs.email
        }).then(function(res){
            if(res.status === 200){
                console.log(res.data);
            }
        });
    }

    return (
        <UserContext.Provider value={{join}}>
            {children}
        </UserContext.Provider>
    );
}