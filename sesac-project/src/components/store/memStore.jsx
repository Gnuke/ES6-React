import React from 'react';
import {create} from "zustand";

const memStore = create((set) => ({
    memberInfo: JSON.parse(localStorage.getItem('memberInfo')) || null,
    setMemberInfo: (memberInfo) =>{
        set({memberInfo});

        localStorage.setItem('memberInfo', JSON.stringify(memberInfo));
    },
    clearMemberInfo:()=>{
        set({memberInfo: null});
        localStorage.removeItem('memberInfo');
    }
}));

export default memStore;