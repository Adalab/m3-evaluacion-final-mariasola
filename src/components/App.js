import React from "react";
import { Switch, Route } from "react-router-dom";
import "../App.css";
import Header from "./Header";
import getDataFromApi from "../services/getDataFromApi";
import Home from "./Home";
import CharacterDetail from "./CharacterDetail";

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
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Home
                  handleFilter={this.handleFilter}
                  characters={filteredCharacters}
                />
              );
            }}
          />
          <Route
            path="/character-detail/:characterId"
            render={routerProps => {
              return (
                <CharacterDetail
                  routerProps={routerProps}
                  characters={filteredCharacters}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
