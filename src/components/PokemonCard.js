import React from "react";

const PokemonCard = ({ data }) => {
  const { name } = data;
  return (
    <div className="flex">
      <div className=" flex border border-dashed border-black w-48 h-60 p-5 m-5 rounded-lg">
        <img alt="pokemon pic" />
        <span>{name}</span>
        <span>Id</span>
      </div>
    </div>
  );
};

export default PokemonCard;
