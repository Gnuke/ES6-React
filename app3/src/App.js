import { Link, BrowserRouter } from "react-router-dom"
import Router from "./Router"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/userHome">userhome</Link>&nbsp;|&nbsp;
        <Link to="/member/join">Join</Link>&nbsp;|&nbsp;
        <Link to="/member/login">login</Link>
        <hr />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
