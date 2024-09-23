import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Router from './Router'
import {MemProvider} from "./components/member/MemContext.jsx";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <MemProvider>
                <Router />
            </MemProvider>
        </BrowserRouter>
    </div>
  )
}

export default App
