import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Detail() {
  const { bnum } = useParams();
  const token = localStorage.getItem('token');
  const [dto, setDto] = useState({ num: 0, writer: {}, pname: '', ptext: '', price: 0, quantity: 0, img: '' });
  const { num, writer, pname, ptext, price, quantity, img } = dto;
  const navigate = useNavigate();
  const del = () => {
    axios.delete('http://localhost:8082/product/detail/' + bnum)
      .then(function (res) {
        if (res.status === 200) {
          if (res.data.flag) {
            alert('삭제완료');
            navigate('/board/list');
          }
        }
      })
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    setDto({
      ...dto,
      [name]: value
    })
  }

  const edit = () => {
    let fdata = new FormData(document.getElementById('f'));
    axios.put('http://localhost:8082/product/detail/' + bnum, fdata, {
      headers: { "Content-type": "multipart/form-data", token: token }
    })
      .then(function (res) {
        if (res.status === 200) {
          if (res.data.flag) {
            alert('수정완료');
            navigate('/board/edit/' + bnum);
          }
        }
      })
  }
  let menu = '';
  useEffect(() => {
    axios.get('http://localhost:8082/product/detail/' + bnum)
      .then(function (res) {
        if (res.status === 200) {
          setDto(res.data.dto);
        } else {
          alert('삭제 실패');
        }
      })
  }, []);
  let loginId = localStorage.getItem('loginId');
  if (loginId === writer.id) {
    menu =
      <div>
        <button onClick={edit}>수정</button>&nbsp;
        <button onClick={del}>삭제</button>
      </div>
  }
  return (
    <div id="detail">
      <h3>게시글</h3>
      <form id="f">
        <table align="center">
          <tbody>
            <tr><td>num : </td><td><input type="text" name="num" value={num} disabled /></td></tr>
            <tr><td>작성자 :</td><td><input type="text" name="id" value={writer.id} disabled /></td></tr>
            <tr><td>상품명 :</td><td><input type="text" name="pname" value={pname} onChange={onChange} /></td></tr>
            <tr><td>상품설명 : </td><td><input type="text" name="ptext" value={ptext} onChange={onChange} /></td></tr>
            <tr><td>가격 : </td><td><input type="number" name="price" value={price} onChange={onChange} /></td></tr>
            <tr><td>수량 : </td><td><input type="number" name="quantity" value={quantity} onChange={onChange} /></td></tr>
            <tr><td>상품이미지 : </td><td>
              <img src={'http://localhost:8082/read-img/' + img} className="simg" alt="" /><br />
              <input type="file" name="f" />
            </td></tr>
          </tbody>
        </table>
      </form><br />
      {menu}
    </div>
  )
}