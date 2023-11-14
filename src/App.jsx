import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import LocationCard from "./components/LocationCard";
import useFetch from "./hooks/useFetch";
import CardResident from "./components/CardResident";
import HasErrorCard from "./components/HasErrorCard";
import IsLoadingCard from "./components/IsLoadingCard";

function App() {
  const [locationId, setLocationId] = useState(
    Math.floor(Math.random() * 126) + 1
  );

  const url = `https://rickandmortyapi.com/api/location/${locationId}`;

  const [location, getLocation, isLoading, hasError] = useFetch(url);

  useEffect(() => {
    if (locationId !== "") {
      getLocation();
    }
  }, [locationId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputLocation.current.value.trim() !== "") {
      setLocationId(inputLocation.current.value.trim());
    }
  };

  const inputLocation = useRef();

  return (
    <div className="app">
      <header className="header">
        <img className="header__img" src="../bg.webp" alt="" />
      </header>
      <form className="form" onSubmit={handleSubmit}>
        <input className="form__input" type="text" ref={inputLocation} />
        <button className="form__btn" onClick={handleSubmit}>
          Search
        </button>
      </form>
      {isLoading ? (
        <IsLoadingCard />
      ) : hasError || locationId === "0" ? (
        <HasErrorCard />
      ) : (
        <>
          <LocationCard location={location} />
          <div className="card__resident">
            {location?.residents.map((endpoint) => (
              <CardResident key={endpoint} endpoint={endpoint} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
