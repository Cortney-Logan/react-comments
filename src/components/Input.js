import { useState } from "react";

function Input(props) {
  const [userInput, setUserInput] = useState("");

  function handleChange(evt) {
    setUserInput(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.setComments([...props.comments, userInput]);
    setUserInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={userInput} onChange={handleChange} />
      <input type="submit" value="Add a Comment" />
    </form>
  );
}
export default Input;
