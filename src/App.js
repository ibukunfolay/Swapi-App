import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Character from "./components/Character";
import Home from "./components/Home";
import Movies from "./components/Movies";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/movies" component={Movies} />
      <Route path="/character-list" component={Character} />
    </Router>
  );
};

export default App;
