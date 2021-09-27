import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { movieListReducers } from "./reducers/index";
import thunk from "redux-thunk";

const reducer = combineReducers({
  movieList: movieListReducers,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
