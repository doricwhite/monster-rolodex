import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
// import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  /*Obtains information from URL (API request) */
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }
          // ,
          // () => {
          //   console.log(this.state);
          // }
        )
      );
  }

  /* Search Method */
  onSearchChange = (evt) => {
    const searchField = evt.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        {/* Search Input */}
        <SearchBox
          className="search-box"
          onChangeHandler={onSearchChange}
          placeholder="Search Monsters"
        />

        {/* Display Monster Information */}
        {/* {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })} */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
