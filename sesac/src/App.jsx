import './App.css'
import {BrowserRouter} from "react-router-dom";
import Router from "./Router.jsx";
import {UserProvider} from "./components/User/UserContext.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
          <UserProvider>
            <Router />
          </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App
