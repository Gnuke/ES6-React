import { Routes, Route } from "react-router-dom"
import Userhome from "./components/member/Userhome"
import Login from "./components/member/login"
import Myinfo from "./components/member/myinfo"
import List from "./components/board/list"
import Add from "./components/board/add"

export default function Router() {
  return (
    <Routes>
      <Route path="/userHome" element={<Userhome />} />
      <Route path="/member/login" element={<Login />} />
      <Route path="/member/myinfo" element={<Myinfo />} />
      <Route path="/board/list" element={<List />} />
      <Route path="/board/add" element={<Add />} />
    </Routes>
  )
}