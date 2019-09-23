const formatCharacterItem = characterItem => {
  return {
    id: characterItem.id,
    name: characterItem.name,
    status: characterItem.status,
    species: characterItem.species,
    origin: characterItem.origin,
    image: characterItem.image,
    episode: characterItem.episode
  };
};

const getDataFromApi = () => {
  return fetch(
    `https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json`
  )
    .then(response => response.json())
    .then(character => character.results.map(formatCharacterItem));
};

export default getDataFromApi;
