import React from 'react';
import {create} from "zustand";

const parseJwt = (token) => {
    if (!token) return null;
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
    );
    return JSON.parse(jsonPayload);
}

const memStore = create((set) => ({
    token: JSON.parse(localStorage.getItem('token')) || null,
    userId: JSON.parse(localStorage.getItem('userId')) || null,

    setToken: (token) =>{
        const userId = parseJwt(token);
        set({token, userId});

        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('userId', JSON.stringify(userId))
    },
    clearMemberInfo:()=>{
        set({token: null, userId: null});
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
    }
}));

export default memStore;