import React from "react";

function TimeAndLocation(props) {
  const { tempData } = props;
  const today = new Date();

  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const date = today.toLocaleDateString("en-US", options);

  const hour = today.getHours();

  const minute = today.getMinutes();

  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {date} | Local time: {hour}:{minute} Hours
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">{tempData.cityName}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
