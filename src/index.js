import React from "react";
import ReactDOM from "react-dom";

import { FlattenExample } from "./components/flatten/flatten";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Playing with Algorithms</h1>
      <h2>Open console</h2>
      <FlattenExample />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
