import React from "react";
import PropTypes from 'prop-types';

User.propType = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
  mbti: PropTypes.string.isRequired
}

function User({ name, age, mbti }) {
  return (
    <h2>
      이름 : {name}
      <br />
      나이 : {age}
      <br />
      mbti : {mbti}
      <br />
    </h2>
  );
}

export default User