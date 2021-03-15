import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import "../../css/style.css";

/**
 * @func Weather
 * @param {object} props
 * @return {HTML}
 */
export default function Weather({ city, setCity, setError, setWeather }) {
  /**
   * @func handleChange
   * @param {object} e
   * @return {undefined}
   */
  const handleChange = (e) => {
    setWeather({});
    setError(null);
    const val = e.target.value;
    setCity(val);
  };
  /**
   * @func handleSearch
   * @param {object} e
   * @return {undefined}
   */
  const handleSearch = () => {
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    const searchUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${apiKey}`;
    axios
      .get(searchUrl)
      .then((response) => {
        const lat = response.data.results[0].geometry.location.lat;
        const long = response.data.results[0].geometry.location.lng;
        getWeather(lat, long);
      })
      .catch((err) => {
        console.log(err.response);
        setError("Something went wrong");
      });
    /**
     * @func getWeather
     * @param {string} lat
     * @param {string} long
     * @return {undefined}
     */
    function getWeather(lat, long) {
      const APIkey = process.env.REACT_APP_WEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely,alerts&appid=${APIkey}`;

      axios
        .get(url)
        .then((response) => {
          const weather = response.data;
          const weatherData = {
            current: weather.current.temp,
            feelsLike: weather.current.feels_like,
            max: weather.daily[0].temp.max,
            min: weather.daily[0].temp.min,
            description: weather.current.weather[0].main,
            icon: weather.current.weather[0].icon,
          };
          setWeather(weatherData);
        })
        .catch((err) => {
          console.log(err.response);
          setError("Please enter a valid city");
        });
    }
  };
  return (
    <div>
      <TextField
        variant="outlined"
        type="search"
        id="outlined-name"
        label="Enter City name"
        onChange={handleChange}
        value={city}
      />
      <Button
        className="search-button"
        variant="contained"
        color="primary"
        onClick={handleSearch}
      >
        Search
      </Button>
    </div>
  );
}
Weather.propTypes = {
  props: PropTypes.object,
};
