// Components는 Tag를 Return 하는 함수
const Header = (props) => {
  // console.log('props', props.title);
  return (
    <>
      <header>
        <h1>{props.title}</h1>
      </header>
    </>
  )
};

export default Header;