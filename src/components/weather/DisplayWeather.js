import React from "react";
import '../../css/style.css'
import PropTypes from 'prop-types'
/**
 * @func DisplayWeather
 * @param {object} props
 * @return {HTML}
 */
export default function DisplayWeather({ error, weather }) {
  const buildUrl = (icon) => {
    const image = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    return image
  }
  return (
    <section className="display-weather-container">
      {error ? (
        <p className="error">{error}</p>
      ) : Object.keys(weather).length ? (
        <section>
          <h3>Current Weather: {(weather.current - 273).toFixed(2)}</h3>
          <h3>Feels like: {(weather.feelsLike - 273).toFixed(2)}</h3>
          <h3>Temperature Max: {(weather.max - 273).toFixed(2)}</h3>
          <h3>Temperature Min: {(weather.min - 273).toFixed(2)}</h3>
          <picture className="desc">
            <img
              src={buildUrl(weather.icon)}
              alt="weather"
            />
            <h3 className="weather-desc">{weather.description}</h3>
          </picture>
        </section>
      ) : (
            ""
          )}
    </section>
  );
}
DisplayWeather.propTypes = {
  props: PropTypes.object,
};
