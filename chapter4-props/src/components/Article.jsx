function Article(props) {
  const { title, body } = props;
  return (
    <div>
      <h2>{title}</h2>
      {body}
    </div>
  );
}

export default Article;