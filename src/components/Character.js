import React from "react";

const Character = props => {
  return (
    <div className="character">
      <img
        className="character_img"
        alt="rick and morty character"
        src={props.characters.image}
      />
      <h2 className="character_name">{props.characters.name}</h2>
      <p className="character_model">{props.characters.species}</p>
    </div>
  );
};

export default Character;
