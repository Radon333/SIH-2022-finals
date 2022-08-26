import React, { useState } from 'react';
import axios from 'axios';
import Weather from './components/weather';

const Weather = () => {
  const [data, setData] = useState({});
  const getDetails = () => {
    axios
      .get('https://weather-api-sih.herokuapp.com/WeatherAPI/3')
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
        // I need this data here ^^
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    // console.log(data);
  };

  return (
    <div>
      <h1>Weather</h1>
      <button onClick={getDetails}>Get Details</button>
      <p>{data.Sunset}</p>
    </div>
  );
};

export default Weather;
