const Header = () => {
  return (
    <>
      <header>
        <h1><a href="/">WEB</a></h1>
      </header>
    </>
  )
}

const Nav = () => {
  return (
    <>
      <nav>
        <ol>
          <li><a href="/read/1">html5</a></li>
          <li><a href="/read/2">css3</a></li>
          <li><a href="/read/3">javascript</a></li>
        </ol>
      </nav>
    </>
  )
}

const Footer = () => {
  return (
    <>
      <footer>
        Contents All Reserved&copy;
      </footer>
    </>
  )
}
function App() {

  return (
    <>
      <Header />
      <Nav />
      <Footer />
    </>
  )
}

export default App
