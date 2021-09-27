import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import YC from "./yc";

const Character = (props) => {
  const [content, setcontent] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const id = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const getData = async () => {
    try {
      let array = [];
      const firstData = await axios.get(`https://swapi.dev/api/films/` + id);
      await Promise.all(
        firstData.data["characters"].map((url) => {
          return axios.get(url).then((character) => {
            array.push(character.data);
          });
        })
      ).then((result) => {
        console.log("array:", array);
        JSON.stringify(array);
        setcontent(array);
        setLoading(true);
      });
    } catch (err) {
      // errors
      console.log(err, "connection error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="container3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
          <YC data={content} search={search} />
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

export default Character;
