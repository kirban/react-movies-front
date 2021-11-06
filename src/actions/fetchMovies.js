import { LOAD_MOVIES_LOADING, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_ERROR } from "../constant/actionNames";
import { BASE_URL } from "../constant/index";

const fetchMovies = () => (dispatch, getState) => {
    const { searchText, sortByField, sortOrder, searchBy, genresFilter, offset, limit } = getState();
    dispatch({ type: LOAD_MOVIES_LOADING });
    const params = new URLSearchParams();
    params.set('sortBy', sortByField);
    params.set('sortOrder', sortOrder);
    params.set('searchText', searchText);
    params.set('searchBy', searchBy);
    params.set('filter', genresFilter);
    params.set('offset', offset);
    params.set('limit', limit);

    fetch(`${BASE_URL}/movies?${params.toString()}`)
        .then(response => response.json())
        .then(movies => dispatch({ type: LOAD_MOVIES_SUCCESS, movies: movies.data }))
        .catch(error => dispatch({ type: LOAD_MOVIES_ERROR, error }))
}

export default fetchMovies;
