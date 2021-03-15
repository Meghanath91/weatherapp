import React, { useState } from "react";
import Display from "./form/Display";
import Form from "./form/Form";
import Weather from "./weather/Weather";
import DisplayWeather from "./weather/DisplayWeather";
import "../css/style.css";

/**
 * @func Main
 * @return {HTML}
 */
export default function Main() {
  //states
  const [vaccantRooms, setVaccantRooms] = useState(5);
  const [roomType, setRoomType] = useState("Queen");
  const [price, setPrice] = useState(100);

  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [weather, setWeather] = useState({});

  return (
    <main className="main-container">
      <section className="form-container">
        <Form
          vaccantRooms={vaccantRooms}
          roomType={roomType}
          price={price}
          setRoomType={setRoomType}
          setVaccantRooms={setVaccantRooms}
          setPrice={setPrice}
        />
        <div className="display-items-container">
          <Display
            vaccantRooms={vaccantRooms}
            roomType={roomType}
            price={price}
          />
        </div>
      </section>

      <section className="weather-container">
        <Weather
          city={city}
          setCity={setCity}
          setError={setError}
          setWeather={setWeather}
        />
        <DisplayWeather error={error} weather={weather} />
      </section>
    </main>
  );
}
