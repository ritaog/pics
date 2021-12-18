import React from "react";
import "semantic-ui-css/semantic.min.css";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onUserSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="form-field">
            <label>Image Search:</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
