function Comment(props) {
  return (
    <div id="comment-container">
      <h3>Comments:</h3>
      {props.comments.map((note, index) => {
        return <i className ="comment" key={index}><p>{note}</p></i>;
      })}
    </div>
  );
}
export default Comment;
