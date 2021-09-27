import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="topt">
        <div className="menu">
          <Link className="a" to="/">
            Home
          </Link>
          <Link className="a" to="/movies">
            Movies
          </Link>
          <Link className="a" to="/character-list">
            Character
          </Link>
        </div>
        <div className="swapi">
          <text className="swapitext">SWAPI</text>
        </div>
      </div>

      <div className="desc">
        <text className="desctest">Application showing Starwars films</text>
      </div>
    </div>
  );
};

export default Home;
