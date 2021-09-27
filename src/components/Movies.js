import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listMovies } from "../actions/index";
import { CircularProgress } from "@material-ui/core";
import logo from "../images/starwars-logo.png";

const Movies = (props) => {
  const [qty, setQty] = useState("");
  const movieList = useSelector((state) => state.movieList);
  const { result, loading, error } = movieList;
  const dispatch = useDispatch();
  console.log(result);

  useEffect(() => {
    dispatch(listMovies());
  }, []);

  const statusSwitch = (num) => {
    switch (num) {
      case "1":
        return `${result.results[0].opening_crawl}`;
      case "2":
        return `${result.results[1].opening_crawl}`;
      case "3":
        return `${result.results[2].opening_crawl}`;
      case "4":
        return `${result.results[3].opening_crawl}`;
      case "5":
        return `${result.results[4].opening_crawl}`;
      case "6":
        return `${result.results[5].opening_crawl}`;
      default:
        return "select a movie";
    }
  };

  return (
    <>
      {error ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "100vh",
            alignItems: "center",
          }}
        >
          Loading Error
        </div>
      ) : loading === false ? (
        <div className="container2">
          <div className="topt">
            <div className="menu">
              <Link className="a" to="/">
                Home
              </Link>
              <Link className="a" to="/movies">
                Movies
              </Link>
              <Link className="a" to="/footer">
                Footer
              </Link>
            </div>
          </div>
          <div className="filmcon">
            <span className="filmtext">Films</span>
          </div>
          <div className="selectcon">
            <select
              className="select"
              value={qty}
              onChange={(e) => {
                setQty(e.target.value);
              }}
            >
              <option>Select a movie</option>
              <option value="1">{result.results[0].title}</option>
              <option value="2">{result.results[1].title}</option>
              <option value="3">{result.results[2].title}</option>
              <option value="4">{result.results[3].title}</option>
              <option value="5">{result.results[4].title}</option>
              <option value="6">{result.results[5].title}</option>
            </select>
          </div>
          {qty === "" ? (
            <img src={logo} alt="logo" />
          ) : (
            <div className="marqueecon">
              <marquee className="marquee" direction="up">
                {statusSwitch(`${qty}`)}
              </marquee>
            </div>
          )}
          {`${qty}` === "" ? (
            <div></div>
          ) : (
            <div className="a1">
              <button
                className="a2"
                onClick={() => {
                  props.history.push(`/character-list/?=${qty}`);
                }}
              >
                Click
              </button>
              to view character list
            </div>
          )}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "100vh",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default Movies;
