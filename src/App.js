import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState();
  const [text, setText] = useState("color");

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
    </div>
  );
}

export default App;
