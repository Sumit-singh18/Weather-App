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
    <div >
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

      {city.sys ? 
      (
        <div >
        <div className="Time">{moment().format("LLLL")}</div>
         <p className="Main-temp"> {city.name} , {city.sys.country}</p>
        {city.main ? <div className="City"> { Math.round(city.main.temp)}°C </div> : null}

        <div className="Temp">

         { city.main? <div className="temp1"> Humidity : {city.main.humidity}% |</div>:null}
          {city.main?<div className="temp2">Feels Like : {Math.round(city.main.feels_like)}°C |</div>:null}
          {city.wind ?<div className="temp3">Wind Speed : {city.wind.speed} MPH </div>:null}
        </div>
        <div className="Descrptn">
          {city.weather ? <p>{city.weather[0].description.toUpperCase()}</p> : null}
        </div>
      </div>
      ) : (
        <p></p>

       
      )}
    </div>
  );
};

export default Weather;
