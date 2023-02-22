import React from "react";

function TopButtons({ cityWeather }) {
  const cities = [
    {
      id: 1,
      title: "Delhi",
    },

    {
      id: 2,
      title: "Mumbai",
    },

    {
      id: 3,
      title: "Chennai",
    },

    {
      id: 4,
      title: "Hyderabad",
    },

    {
      id: 5,
      title: "Kolkata",
    },
  ];

  const setCity = (city) => {
    cityWeather(city);
  };

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setCity(city.title)}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
