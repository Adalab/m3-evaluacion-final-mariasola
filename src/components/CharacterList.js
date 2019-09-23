import React from "react";
import Character from "./Character";

const CharacterList = props => {
  const renderList = () => {
    return props.characters.map(characters => {
      return (
        <li key={characters.id}>
          <Character characters={characters} />
        </li>
      );
    });
  };
  return <ul className="charactersList">{renderList()}</ul>;
};

export default CharacterList;
