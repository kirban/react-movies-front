import { LOAD_MOVIES_LOADING, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_ERROR } from "../constant/actionNames";
import { BASE_URL } from "../constant/index";

const fetchMovies = (params='?limit=6') => dispatch => {
    console.log("loading go");
    dispatch({ type: LOAD_MOVIES_LOADING });
    fetch(`${BASE_URL}/movies${params}`)
        .then(response => response.json())
        .then(movies => dispatch({ type: LOAD_MOVIES_SUCCESS, movies: movies.data }))
        .catch(error => dispatch({ type: LOAD_MOVIES_ERROR, error }))
}

export default fetchMovies;
