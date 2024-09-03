import { Routes, Route } from "react-router-dom"
import NotFound from "./components/NotFound"
import Userhome from "./components/member/Userhome"
import Join from "./components/member/Join"
import Login from "./components/member/login"
import Myinfo from "./components/member/myinfo"
import List from "./components/board/list"
import Add from "./components/board/add"
import Detail from "./components/board/detail"

export default function Router() {
  return (
    <Routes>
      <Route path="/userHome" element={<Userhome />} />
      <Route path="/member/join" element={<Join />} />
      <Route path="/member/login" element={<Login />} />
      <Route path="/member/myinfo" element={<Myinfo />} />
      <Route path="/board/list" element={<List />} />
      <Route path="/board/add" element={<Add />} />
      <Route path="/board/detail/:bnum" element={<Detail />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}