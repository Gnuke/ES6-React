import React from 'react';
import datatype from 'prop-types';

// 필수 프로퍼티 사용하기
function YourComponent(props) {
  const {
    objValue,
    requiredStringValue
  } = props;
  return (
    <div>
      {/* 1. <div>객체값 : {JSON.stringify(objValue)}</div> */}
      <div>객체값 : {String(Object.entries(objValue))}</div>
      <div>필수값 : {requiredStringValue}</div>
    </div>
  );
}

YourComponent.Proptypes = {
  //objValue: datatype.object,
  objValue: datatype.shape({
    name: datatype.string,
    age: datatype.number,
  }),
  requiredStringValue: datatype.string.isRequired,
}

export default YourComponent;