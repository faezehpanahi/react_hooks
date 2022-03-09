import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState();
  const [text, setText] = useState("color");
  const [content, setContent] = useState("");
  const [auther, setAuther] = useState("");

  const changeBackground = () => {
    if (text === "color" || text === "Yellow") {
      setColor("background_yellow");
      setText("Blue");
    }
    if (text === "Blue") {
      setColor("background_blue");
      setText("Yellow");
    }
  };

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setContent(data.content);
        setAuther(data.auther);
      });
  }, [count, color]);

  return (
    <div className="app">
      <div className={`container ${color}`}>
        <h1>Counter with Hooks</h1>
        <p>
          you clicked <span>{count}</span> times
        </p>
        <div className="btns">
          <button
            className="btn"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Click Me
          </button>
          <button className="btn" onClick={() => setColor("background_blue")}>
            Blue Background
          </button>
          <button className="btn" onClick={() => setColor("background_yellow")}>
            Yellow Background
          </button>
          <button className="btn" onClick={changeBackground}>
            {`Change to ${text}`}
          </button>
        </div>
      </div>

      <div className="quote">
        <h1>{content}</h1>
        <span>{auther}</span>
      </div>
    </div>
  );
}

export default App;
