import React, { useState } from "react";
import moment from "moment";
import axios from "axios";
import "./Weather.css";

const Weather = () => {
  const [city, setCity] = useState({});
  const [search, setSearch] = useState("");
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=97bd5c7ab3ffc753537e210e60d6c061`;

  const handleChange = (e) => {
    if (e.key === "Enter") {
      axios.get(api).then((response) => {
        console.log(response.data);
        setCity(response.data);
      });
      setCity("");
    }
  };

  return (
    <div className="Main">
      <div className="Head">Weather App</div>

      <div className="Input">
        <input
          type="text"
          placeholder="Enter City"
          value={search}
          onKeyPress={handleChange}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {!city ? (
        <p>Data not Found</p>
      ) : (
        // {city.main ? city.main.temp : null}
        // {city.main ? city.main.feels_like: null}
        // {city.wind ? city.wind.speed : null}
        <div>
          <div className="Time">{moment().format("LLLL")}</div>
          {/* {city.name} */}
          <p className="City">Pune</p>
          <div className="Temp">
            <div className="temp1"> 55°C</div>
            <div className="temp2"> 45°C</div>
            <div className="temp3">555MPH </div>
          </div>
          <div className="Descrptn">
            {/* {city.weather ? <p>{city.weather[0].description}</p> : null} */}
            Overcast clouds
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
