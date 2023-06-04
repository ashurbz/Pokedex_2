import React, { useEffect, useState } from "react";

import { pokemonList } from "../utils/api";
import PokemonCard from "./PokemonCard";

const PokemonCardContainer = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    pokemons();
  }, []);

  const pokemons = async () => {
    const data = await pokemonList();
    setPokemonData(data);
  };

  return (
    <>
      <div className="flex flex-wrap">
        {pokemonData.map((pokemon) => {
          return <PokemonCard data={pokemon} />;
        })}
      </div>
    </>
  );
};

export default PokemonCardContainer;
