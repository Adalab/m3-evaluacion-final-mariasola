import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CharacterDetail = props => {
  const { routerProps, characters } = props;
  const characterId = parseInt(routerProps.match.params.characterId);
  const character = characters.filter(item => item.id === characterId);
  if (character[0]) {
    const { name, image, status, species, origin, episode } = character[0];

    return (
      <React.Fragment>
        <div className="character_detail">
          <div className="character_detail_box">
            <img className="character_detail_box_img" alt={name} src={image} />
          </div>
          <div className="character_detail_info">
            <h2 className="character_detail_info_name">{name}</h2>
            <p className="character_detail_info_status">Status: {status}</p>
            <p className="character_detail_info_species">Species: {species}</p>
            <p className="character_detail_info_species">
              Origin: {origin.name}
            </p>
            <p className="character_detail_info_episodes">
              Episodes: {episode.length}
            </p>
          </div>
        </div>
        <Link to="/" className="app__back">
          &larr; Back to the list
        </Link>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <p>Cargando...</p>
        <Link to="/" className="app__back">
          &larr; Back to the list
        </Link>
      </React.Fragment>
    );
  }
};
CharacterDetail.propTypes = {
  routerProps: PropTypes.object.isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CharacterDetail;
