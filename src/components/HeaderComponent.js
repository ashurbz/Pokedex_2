import React from "react";

const HeaderComponent = () => {
  return (
    <div className="flex m-4 p-2">
      <span className="font-bold text-3xl tracking-wider m-4">Pokédex</span>
      <div className="border-l-2 border-black h-12 m-3"></div>
      <span className="text-gray-800 font-semibold m-5 text-xl">
        Search For Any Pokémon That Exists On Planet
      </span>
    </div>
  );
};

export default HeaderComponent;
