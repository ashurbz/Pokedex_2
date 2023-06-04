import React, { useEffect, useState } from "react";

import { pokemonList } from "../utils/api";
import PokemonCard from "./PokemonCard";

const PokemonCardContainer = ({ searchBarData }) => {
  const searchData = searchBarData();
  const [pokemonData, setPokemonData] = useState([]);
  const [searchName, setSearchName] = useState([]);

  const searchedData = searchName.filter((name) => {
    if (name.includes(searchData)) {
      return name;
    }
    return name;
  });

  useEffect(() => {
    pokemons();
  }, []);

  const pokemons = async () => {
    const data = await pokemonList();
    setPokemonData(data);
    setSearchName(data);
  };

  return (
    <>
      <div className="flex flex-wrap">
        {searchName.map((pokemon) => {
          return <PokemonCard {...pokemon} />;
        })}
      </div>
    </>
  );
};

export default PokemonCardContainer;
