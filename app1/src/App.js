import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/userHome">userhome</Link>&nbsp;|&nbsp;
        <Link to="/about/aaa?detail=content&mode=3">about</Link>&nbsp;|&nbsp;
        <Link to="/src">컴포넌트 이동</Link>&nbsp;|&nbsp;
        <Link to="/member/join">Join</Link>&nbsp;|&nbsp;
        <Link to="/member/login">login</Link>
        <hr />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
