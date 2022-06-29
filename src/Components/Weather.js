import React, { useState } from "react";
import moment from "moment";
import axios from "axios";
import './Weather.css'

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

        {!city ? (<p>Data not Found</p>):(
              <div>
              {/* <div className="Time">{moment().format("LLLL")}</div> */}
              <p className="City">{city.name}</p>
              <div className="Temp">
                <div className="temp1"> {city.main ? <p>{city.main.temp}°C</p> : null}</div>
                <div className="temp2">{city.main ? <p>{city.main.feels_like}°C</p> : null}</div>
                <div>{city.wind ? <p>{city.wind.speed}MPH</p> : null}</div>
              </div>
              <div className="Descrptn">
                {city.weather ? <p>{city.weather[0].description}</p> : null}
              </div>
              </div>
        )
        
    
    }
      
    </div>
  );
};

export default Weather;
