import React, { useState } from "react";
import ReactDOM from "react-dom";

export function Navbar() {
  let [counter, setCounter] = useState(0);
  let [List, setList] = useState([]);
  let [text, setText] = useState("");
  return (
    <>
      <div>{counter}</div>
      <h2>THIS IS REACT</h2>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
      <button onClick={() => setCounter(0)}>Clear</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setList([...List, text]);
          setText("");
        }}
      >
        Add to list
      </button>
      {List.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </>
  );
}

let page = (
  <div>
    <h1>MARVEL'S BISTRO</h1>
    <ul>
      <li>HOME</li>
      <li>ABOUT</li>
      <li>CONTACT</li>
    </ul>
  </div>
);
ReactDOM.render(page, document.getElementById("page"));
