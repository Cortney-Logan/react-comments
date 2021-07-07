import { useState } from "react";
import "./App.css";
import Content from "./components/Content.js";
import Input from "./components/Input.js";
import Comment from "./components/Comment.js";

function App() {
  const [comments, setComments] = useState([
    "OMG so cute",
    "<3",
    "What is their name?",
  ]);

  return (
    <div className="App">
      <Content></Content>
      <Input comments={comments} setComments={setComments}></Input>
      <Comment comments={comments}></Comment>
    </div>
  );
}

export default App;
