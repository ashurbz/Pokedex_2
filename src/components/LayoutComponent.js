import React from "react";
import HeaderComponent from "./HeaderComponent";
import SearchComponent from "./SearchComponent";
import PokemonCardContainer from "./PokemonCardContainer";

const LayoutComponent = () => {
  const searchBarData = (text) => {
    return text;
  };

  return (
    <div>
      <HeaderComponent />
      <SearchComponent searchBarData={searchBarData} />
      <PokemonCardContainer searchBarData={searchBarData} />
    </div>
  );
};

export default LayoutComponent;
