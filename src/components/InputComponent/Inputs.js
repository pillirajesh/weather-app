import React from "react";
import { UilLocationPoint } from "@iconscout/react-unicons";
import "./index.css";

function Inputs(props) {
  const { searchData, input } = props;
  const getDetails = () => {
    searchData();
  };

  const getCitiesName = (event) => {
    input(event.target.value);
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="search"
          className="p-3  capitalize input-cont"
          placeholder="search city..."
          onChange={getCitiesName}
        />
        <button
          className="text-white cursor-pointer button"
          onClick={getDetails}
          type="button"
        >
          Search
        </button>
        <UilLocationPoint size={25} className="text-white cursor-pointer " />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button name="metric" className="text-xl text-white font-light">
          &deg;C
        </button>
      </div>
    </div>
  );
}

export default Inputs;
