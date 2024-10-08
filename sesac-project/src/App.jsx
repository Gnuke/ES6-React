import './App.css'
import {BrowserRouter} from "react-router-dom";
import Router from "./Router.jsx";
import {MemProvider} from "./components/member/MemContext.jsx";

function App() {

  return (
    <BrowserRouter>
        <MemProvider>
            <Router />
        </MemProvider>
    </BrowserRouter>
  )
}

export default App
