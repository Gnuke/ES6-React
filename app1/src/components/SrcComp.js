import { useNavigate } from "react-router-dom";

export default function SrcComp() {
  const navigate = useNavigate();
  const a = () => {
    // alert('에이함수');
    navigate('/dest', { state: { id: 1, job: '개발자' } });
  }
  return (
    <div>
      <button onClick={a} >dest</button>
    </div>
  )
}