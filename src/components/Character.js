import React from "react";

const Character = props => {
  return (
    <div className="character">
      <img
        className="character_img"
        alt="rick and morty character"
        src={props.characters.image}
      />
      <div className="character_info">
        <h2 className="character_info_name">{props.characters.name}</h2>
        <p className="character_info_model">{props.characters.species}</p>
      </div>
    </div>
  );
};

export default Character;
