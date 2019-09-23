import React, { Fragment } from "react";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

const Home = props => {
  const { handleFilter, characters } = props;
  return (
    <Fragment>
      <Filters handleFilter={handleFilter} />
      <CharacterList characters={characters} />
    </Fragment>
  );
};

export default Home;
