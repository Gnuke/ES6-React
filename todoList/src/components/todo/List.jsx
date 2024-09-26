import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function List() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8081/')
      .then(function (res) {
        if (res.status === 200) {
          setList(res.data.list.map((item) => ({ ...item, wdate: formatDate(item.wdate) })));
        } else {
          alert('비정상 응답');
        }
      })
  }, []);

  // 날짜 format func
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  return (
    <div>
      <h3>오늘 할 일</h3>
      <table align="center">
        <thead>
          <tr><th>Num.</th><th>Title</th><th>Content</th><th>Wdate</th></tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.num}>
              <td>{item.num}</td>
              <td><Link to={`/detail/${item.num}`}>{item.title}</Link></td>
              <td>{item.content}</td>
              <td>{item.wdate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button><Link to="/todo/add">할 일 작성</Link></button>
    </div >
  )
}
