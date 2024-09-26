import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function List() {
  const token = localStorage.getItem('token');
  const [list, setList] = useState([]);
  const id = localStorage.getItem('loginId');
  useEffect(() => {
    axios.get('http://localhost:8082/product/' + id, { headers: { token: token } })
      .then(function (res) {
        if (res.status === 200) {
          setList(res.data.list);
        } else {
          alert('비정상응답');
        }
      })
  }, []);
  return (
    <div>
      <h3>등록상품</h3>
      <table align="center">
        <thead>
          <tr><th>num</th><th>writer</th><th>설명</th><th>이미지</th></tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.num}>
              <td>{item.num}</td>
              <td>{item.writer.id}</td>
              <td><Link to={"/board/edit" + item.num}>{item.ptext ? item.ptext : "No Text"}</Link></td>
              <td>
                <img src={'http://localhost:8082/read-img/' + item.img} className="simg" alt="" />
              </td>
            </tr>
          ))}
        </tbody>
      </table><br />
      <button><Link to="/board/add" style={{ textDecoration: 'none' }}>상품등록</Link></button>&nbsp;
      <button><Link to="/" style={{ textDecoration: 'none' }}>뒤로가기</Link></button>
    </div >
  )
}
