import { Routes, Route } from "react-router-dom"
import Hello from "./components/Hello"
import About from "./components/About"
import SrcComp from "./components/SrcComp"
import DestComp from "./components/DestComp"
import NotFound from "./components/NotFound"
import Join from "./components/Join"
import Login from "./components/login"
import Myinfo from "./components/myinfo"
import List from "./components/list"

export default function Router() {
  return (
    <Routes>
      <Route path="/userHome" element={<Hello />} />
      {/* 여러 라우터 등록 가능 */}
      <Route path="/about/:username" element={<About />} />
      <Route path="/src" element={<SrcComp />} />
      <Route path="/dest" element={<DestComp />} />
      <Route path="/member/join" element={<Join />} />
      <Route path="/member/login" element={<Login />} />
      <Route path="/member/myinfo" element={<Myinfo />} />
      <Route path="/board/list" element={<List />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}