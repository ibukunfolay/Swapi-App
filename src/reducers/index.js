import {
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAIL,
} from "../constants/constants";

function movieListReducers(state = { result: [] }, action) {
  switch (action.type) {
    case MOVIE_LIST_REQUEST:
      return { loading: true };

    case MOVIE_LIST_SUCCESS:
      return { loading: false, result: action.payload };

    case MOVIE_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}

export { movieListReducers };
