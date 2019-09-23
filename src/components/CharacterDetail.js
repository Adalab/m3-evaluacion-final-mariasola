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
          <img className="character_detail_img" alt={name} src={image} />
          <h2 className="character_detail_name">{name}</h2>
          <p className="character_detail_status">Status: {status}</p>
          <p className="character_detail_species">Species: {species}</p>
          <p className="character_detail_species">Origin: {origin.name}</p>
          <ul className="character_detail_episodes">
            Episodes: {episode.length}
          </ul>
        </div>
        <Link to="/" className="app__back">
          &laquo; Volver
        </Link>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <p>Cargando...</p>
        <Link to="/" className="app__back">
          &laquo; Volver al listado
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
