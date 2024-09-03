import axios from "axios";
import { useEffect, useState } from "react";

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
      <h3>상세페이지</h3>
      for(lists l of list){
        list.num
      }
    </div>
  )
}