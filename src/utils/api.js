// api for pokemon list
export const pokemonList = async () => {
  const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon");
  const json = await pokemon.json();
  return json?.results;
};
