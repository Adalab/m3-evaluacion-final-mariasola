import React from "react";
import { Link } from "react-router-dom";
import Character from "./Character";

const CharacterList = props => {
  const renderList = () => {
    return props.characters.map(characters => {
      return (
        <li className="charctersList_li" key={characters.id}>
          <Link
            to={`/character-detail/${characters.id}`}
            className="charctersList_li_link"
          >
            <Character characters={characters} />
          </Link>
        </li>
      );
    });
  };
  return <ul className="charctersList">{renderList()}</ul>;
};

export default CharacterList;
