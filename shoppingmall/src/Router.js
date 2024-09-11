import { Routes, Route } from "react-router-dom"
import Join from "./components/member/join"
import Login from "./components/member/login"
import Home from "./components"
import Myinfo from "./components/member/myinfo"
import List from "./components/board/list"
import Add from "./components/board/add"
import Detail from "./components/board/edit"

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/member/join" element={<Join />} />
      <Route path="/member/login" element={<Login />} />
      <Route path="/member/myinfo" element={<Myinfo />} />
      <Route path="/board/list" element={<List />} />
      <Route path="/board/add" element={<Add />} />
      <Route path="/board/edit/:bnum" element={<Detail />} />
    </Routes>
  )
}
