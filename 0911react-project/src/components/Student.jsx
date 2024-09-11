import React from 'react'

export default function Student({ name, age, major }) {
  return (
    <div>
      {
        age >= 20 ?
          <h2 style={{ textDecoration: 'underline' }}>
            {name}의 나이는 {age} 전공은 {major}입니다.
          </h2>
          : <h2>{name}의 나이는 {age} 전공은 {major}입니다.</h2>
      }
    </div>
  )
}
