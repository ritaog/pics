import React from "react";
import "semantic-ui-css/semantic.min.css";
import SearchBar from "./SearchBar.js";

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar />
    </div>
  );
};

export default App;
