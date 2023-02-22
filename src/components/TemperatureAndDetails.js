import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
} from "@iconscout/react-unicons";

function TemperatureAndDetails(props) {
  const { tempData } = props;

  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p className="capitalize ">{tempData.condition}</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src="https://image.winudf.com/v2/image1/Y29tLm1pbGxjcm9mdC5hcHAud2VhdGhlci5yYWRhci53ZWF0aGVyMjQuZm9yZWNhc3QuZnJlZV9pY29uXzE1NTU0OTM2ODhfMDkz/icon.png?w=&fakeurl=1"
          alt="sun"
          className="w-20"
        />
        <p className="text-5xl">
          {Math.ceil(tempData.temperature - 273.15)}&deg;
        </p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">
              {Math.ceil(tempData.realFell - 273.15)}&deg;
            </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{tempData.windSpeed} Km/hr</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{tempData.humidity}%</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />

        <p className="font-light">
          High:{" "}
          <span className="font-medium ml-1">
            {Math.ceil(tempData.tempMax - 273.15)}&deg;
          </span>
        </p>
        <p className="font-light">|</p>
        <UilSun />
        <p className="font-light">
          Low:{" "}
          <span className="font-medium ml-1">
            {Math.ceil(tempData.tempMin - 273.15)}&deg;
          </span>
        </p>
        <p className="font-light">|</p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
