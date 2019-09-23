import React from "react";
import getDataFromApi from "../services/getDataFromApi";
import CharacterList from "./CharacterList";
// import Filters from "./Filters";
import "../App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      filterValue: ""
    };
    this.handleFilter = this.handleFilter.bind(this);
  }
  componentDidMount() {
    getDataFromApi().then(characters => {
      this.setState({ characters });
    });
  }
  handleFilter(event) {
    const newState = {
      ...this.state,
      filterValue: event.currentTarget.value
    };
    this.setState(newState);
  }
  render() {
    const filteredCharacters = this.state.characters.filter(character =>
      character.name
        .toLowerCase()
        .includes(this.state.filterValue.toLowerCase())
    );
    return (
      <div className="page">
        <form className="filter">
          <label className="filter_label" htmlFor="filter">
            Busca
          </label>
          <input type="text" onChange={this.handleFilter}></input>
        </form>
        <CharacterList characters={filteredCharacters} />
      </div>
    );
  }
}

export default App;
