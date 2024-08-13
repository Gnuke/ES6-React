//1. JavaScript's event에서는 DOM level 2 사용을 권장했으나
//    React에서는 DOM level 0의 inline 방식을 권장한다.
//    다만, onclick이 아니라 onClick이다.
const Header = (props) => {
  const clickHandler = (evt) => {
    console.log(evt);
  }
  return (
    <>
      <header>
        {/* <h1 onClick={clickHandler}>{props.title}</h1> */}
        <h1>{props.title}</h1>
      </header>
    </>
  )
};

export default Header;