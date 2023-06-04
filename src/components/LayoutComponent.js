import React from "react";
import HeaderComponent from "./HeaderComponent";
import SearchComponent from "./SearchComponent";
import PokemonCardContainer from "./PokemonCardContainer";

const LayoutComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <SearchComponent />
      <PokemonCardContainer />
    </div>
  );
};

export default LayoutComponent;
