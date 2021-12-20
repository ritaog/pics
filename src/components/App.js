import React from "react";
import unsplash from "../api/unsplash.js";
import dotenv from "dotenv";
import "semantic-ui-css/semantic.min.css";
import SearchBar from "./SearchBar.js";
import ImageList from "./ImageList.js";

dotenv.config({ path: "./config/config.env" });
class App extends React.Component {
  state = {
    images: [],
  };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onUserSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
