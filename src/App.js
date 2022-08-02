import React, { useState } from "react";
import "./index.css";
import ComponentAdd from "./Components/ComponentAdd";
import ComponentSearch from "./Components/ComponentSearch";
function App() {
  const [msg, setMsg] = useState("Enter a word!");
  const [words, setWords] = useState([]);
  const [word, setWord] = useState("");
  console.log("Run App ");
  console.log("word: " + word);
  return (
    <div className="mainDiv">
      <h1>Dictionary</h1>
      <ComponentSearch wordsP={words} setWordP={setWord} setMsgP={setMsg} />
      {word.length > 0 && (
        <ComponentAdd setWordsP={setWords} setWordP={setWord} setMsgP={setMsg} wordP={word} />
      )}
      <p id="msg">{msg}</p>
    </div>
  );
}
export default App;
