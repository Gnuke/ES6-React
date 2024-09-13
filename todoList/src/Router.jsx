import { Routes, Route } from "react-router-dom"
import Insert from "./components/todo/Insert"
import List from "./components/todo/List"
import Detail from "./components/todo/Detail"
import Home from "./components/Home.jsx";
import Join from "./components/member/Join.jsx";

export default function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member/join" element={<Join />} />
      <Route path="/todo" element={<List />} />
      <Route path="/todo/add" element={<Insert />} />
      <Route path="/todo/detail/:bnum" element={<Detail />} />
    </Routes>
  )
}
