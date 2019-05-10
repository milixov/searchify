import React from "react";
import "./App.css";
import "antd/dist/antd.css";

import SearchScreen from "./container/search.screen";

function App() {
  return (
    <div className="App">
      <SearchScreen />
      {/* <header className="App-header">
        <Button />
        <DatePicker />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
