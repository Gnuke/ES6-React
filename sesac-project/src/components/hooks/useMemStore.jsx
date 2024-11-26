import React from 'react';
import { useStore } from 'zustand';
import memStore from "../store/memStore.jsx";

const useMemStore = () => {
  return useStore(memStore);
};

export default useMemStore;