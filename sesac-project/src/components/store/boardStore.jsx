import React from 'react';
import {create} from "zustand";

const BoardStore = create((set) => ({
    boardList: [],
    addPost: (newPost) => set((state) => (
        {posts: [newPost, ...state.posts]})), //글 추가
    getPosts: () => set((state) => state.posts), // 글목록

}));

export default BoardStore;