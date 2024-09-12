import axios from "axios";

export default function Insert() {
  const insert = () => {
    axios.post('http://localhost:8080/add', {
      headers: { "Content-type": "application/x-www-form-urlencoded" }
    }).then(function (res) {
      if (res.status === 200) {
        if (res.data.flag) {
          alert('글 작성 완료');
        } else {
          alert('작성 실패');
        }
      } else {
        alert('잘못된 호출');
      }
    })
  }
  return (
    <div name="insertForm">
      <h3>할 일 작성</h3>
      <form id="inF">
        제목: <input type="text" name="title" /><br />
        내용: <input type="text" name="content" /><br />
        작성일: <input type="date" name="wdate" /><br />
      </form>
      <button onClick={insert}>작성</button>
    </div>
  )
}
