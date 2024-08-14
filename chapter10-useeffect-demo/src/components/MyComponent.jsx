import React from 'react';
import { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    //Clean-up 함수라고 한다.
    return () => {
      console.log('Unmount...');
    }
  }, []);
  return (
    <div>
      <h3>짝수입니다.</h3>
    </div>
  );
};

export default MyComponent;