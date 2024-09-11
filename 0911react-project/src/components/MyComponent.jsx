import React, { useState } from 'react'

export default function MyComponent() {
  const [up, setUp] = useState(0);
  const [down, setDown] = useState(0);
  const upFunc = () => {
    setUp(up + 1);
  }
  const downFunc = () => {
    setDown(down - 1);
  }
  return (
    <div>
      <button onClick={upFunc}>좋아요 : {up}</button>
      <button onClick={downFunc}>싫어요 : {down}</button>
    </div>
  )
}
