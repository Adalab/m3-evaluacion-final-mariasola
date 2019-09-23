import React from "react";
import { Link } from "react-router-dom";
import Character from "./Character";

const CharacterList = props => {
  const renderList = () => {
    return props.characters.map(characters => {
      return (
        <li key={characters.id}>
          <Link
            to={`/character-detail/${characters.id}`}
            className="charcterList_link"
          >
            <Character characters={characters} />
          </Link>
        </li>
      );
    });
  };
  return <ul className="charactersList">{renderList()}</ul>;
};

export default CharacterList;
