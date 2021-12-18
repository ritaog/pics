import React from "react";
import "semantic-ui-css/semantic.min.css";
import SearchBar from "./SearchBar.js";

class App extends React.Component {
  onSearchSubmit = (term) => {
    console.log(term);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onUserSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
