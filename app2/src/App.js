
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import Router from './Router';

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
