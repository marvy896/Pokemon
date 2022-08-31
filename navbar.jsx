import React, { useState } from "react";
import ReactDOM from "react-dom";

export function Navbar() {
  let [counter, setCounter] = useState(0);
  let [List, setList] = useState([]);
  let [text, setText] = useState("");
  return (
    <div className="NAV">
      <div className="counter">{counter}</div>
      <h1>THIS IS REACT</h1>
      <button className="btnn" onClick={() => setCounter(counter + 1)}>
        Add
      </button>
      <button className="btnn" onClick={() => setCounter(0)}>
        Clear
      </button>
      <input
        className="input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="btnn"
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
    </div>
  );
}

let page = (
  <div className="page">
    <h1>MARVEL'S BISTRO</h1>
    <ul>
      <li>HOME</li>
      <li>ABOUT</li>
      <li>CONTACT</li>
    </ul>
    <div className="divBtn">
      <button
        className="Btnn"
        onClick={() => {
          alert("This is React");
        }}
      >
        Click Me
      </button>
    </div>
  </div>
);

ReactDOM.render(page, document.getElementById("page"));
