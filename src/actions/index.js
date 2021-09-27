import {
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAIL,
} from "../constants/constants";
const { default: Axios } = require("axios");

const listMovies = () => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_LIST_REQUEST });
    const { data } = await Axios.get("https://swapi.dev/api/films");
    dispatch({ type: MOVIE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MOVIE_LIST_FAIL, payload: error.message });
  }
};

export { listMovies };
