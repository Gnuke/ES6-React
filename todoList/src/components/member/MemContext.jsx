import {createContext, useState} from "react";

export const MemContext = createContext();

export const MemProvider = ({children}) => {

    const [members, setMembers] = useState([]);

    const join = (inputs) => {
        setMembers([...members, inputs]);
        console.log(inputs);
    };

    return(
        <MemContext.Provider value={{ members, join }}>
            {children}
        </MemContext.Provider>
    )
}

