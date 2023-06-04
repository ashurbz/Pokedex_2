import React from "react";

const PokemonCard = ({ name }) => {
  return (
    <div className="">
      <div className="border border-dashed border-black w-48 h-60 p-5 m-5 rounded-lg">
        <img alt="pokemon pic" />
        <div className="capitalize">{name}</div>
        <div>Id</div>
      </div>
    </div>
  );
};

export default PokemonCard;
