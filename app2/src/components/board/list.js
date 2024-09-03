import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function List() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8081/boards')
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
      <h3>글목록</h3>
      <table align="center">
        <thead>
          <tr><th>num</th><th>title</th><th>writer</th></tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.num}>
              <td>{item.num}</td>
              <td><Link to={"/board/detail/" + item.num}>{item.title}</Link></td>
              <td>{item.writer.id}</td>
            </tr>
          ))}
        </tbody>
      </table><br />
      <button><Link to="/board/add" style={{ textDecoration: 'none' }}>글작성</Link></button>
    </div>
  )
}