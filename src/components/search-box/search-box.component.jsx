import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <input
        className={this.props.className}
        type="search"
        placeholder={this.props.placeholder}
        /* Action for when name is searched */
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default SearchBox;
