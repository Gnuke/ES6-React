const Nav = (props) => {
  //console.log(props.topics);

  const lists = [];
  for (let i = 0; i < props.topics.length; i++) {
    let topic = props.topics[i];
    lists.push(<li key={topic.id}><a href={'/read/' + topic.id}>{topic.title}</a></li >)
  }
  return (
    <>
      <nav>
        <ol>
          {/* <li><a href="/read/1">html5</a></li>
          <li><a href="/read/2">css3</a></li>
          <li><a href="/read/3">javascript</a></li> */}
          {lists}
        </ol>
      </nav>
    </>
  )
};

export default Nav;