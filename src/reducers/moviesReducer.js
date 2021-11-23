import fetchMovies from "../actions/fetchMovies";
import { LOAD_MOVIES_LOADING, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_ERROR } from "../constant/actionNames";

const initialState = {
    displayedMovies: [],
    selectedMovie: {},
    searchText: "",
    sortByField: "", // field of movie
    sortOrder: "asc", // asc or desc
    searchBy: "", // title or genres
    genresFilter: "", // name of genre
    offset: "",
    limit: "6",
    error: "",
    loading: false,
}

const moviesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_MOVIES':
            fetchMovies();
            return state;
        case 'SELECT_MOVIE':
            return {
                ...state,
                selectedMovie: action.payload.movie,
            }
        case 'SEARCH_MOVIE_BY_TEXT':
            return {
                ...state,
                searchBy: "title",
                searchText: action.payload.text,
            }
        case 'SORT_BY_FIELD':
            return {
                ...state,
                sortByField: action.payload.field,
                sortOrder: (action.payload.field === state.sortByField && state.sortOrder === "asc") ? "desc" : "asc",
            }
        case 'SORT_BY_GENRE':
            return {
                ...state,
                genresFilter: action.payload.genre,
                searchBy: "genres",
            }
        case LOAD_MOVIES_LOADING: {
            return {
                ...state,
                loading: true,
                error: ""
            };
        }
        case LOAD_MOVIES_SUCCESS: {
            return {
                ...state,
                displayedMovies: action.payload.movies,
                loading: false
            }
        }
        case LOAD_MOVIES_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error
            };
        }
        default:
            return state;
    }
}

export default moviesReducer
