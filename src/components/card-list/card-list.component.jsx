import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monster) => {
          return <h2 key={monster.id}>{monster.name}</h2>;
        })}
      </div>
    );
  }
}

export default CardList;
