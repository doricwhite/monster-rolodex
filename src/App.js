import { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };

    console.log("1. constructor run");
  }

  /*Obtains information from URL (API request) */
  componentDidMount() {
    console.log("3. componentDidMount run");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    console.log("2: render run");

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        {/* Search Input */}
        <input
          className="search-box"
          type="search"
          placeholder="Search Monsters"
          /* Action for when name is searched */
          onChange={(evt) => {
            const searchField = evt.target.value.toLocaleLowerCase();

            this.setState(() => {
              return { searchField };
            });
          }}
        />

        {/* Display Monster Information */}
        {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
