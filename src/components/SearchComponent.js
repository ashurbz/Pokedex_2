import React, { useState } from "react";
import { ImSearch } from "react-icons/im";

const SearchComponent = ({ searchBarData }) => {
  const [searchText, setSearchText] = useState("");
  const handleOnChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleOnClick = () => {
    searchBarData(searchText);
  };

  return (
    <div className="w-full px-4 m-4">
      <span className="mx-2">Search By</span>

      <div>
        <input
          type="text"
          className="p-4 w-96 bg-slate-400 border border-slate-400 rounded-lg shadow-xl placeholder:text-slate-600"
          placeholder=" Name or Number"
          value={searchText}
          onChange={(e) => {
            handleOnChange(e);
          }}
        />
        <button onClick={handleOnClick} className="text-2xl  -mx-[3.5rem]">
          <ImSearch className="-mb-2" />
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
