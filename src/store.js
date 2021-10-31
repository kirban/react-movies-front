import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import sortByField from "./actions/sortByFields";
import sortByGenre from "./actions/sortByGenre";
import fetchMovies from "./actions/fetchMovies";
import { LOAD_MOVIES_LOADING, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_ERROR } from "./constant/actionNames";

const initialState = {
    displayedMovies: [],
    selectedMovie: {},
    searchText: "",
    sortByField: "", // field of movie
    sortOrder: "", // asc or desc
    searchBy: "", // title or genres
    genresFilter: "", // name of genre
    error: "",
    loading: false,
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_MOVIES':
            return fetchMovies();
        case 'SORT_BY_GENRE':
            return sortByGenre(state, action.payload)
        case 'SORT_BY_FIELD':
            return sortByField(state, action.payload)
        case 'ADD_MOVIE':
            break;
        case 'EDIT_MOVIE':
            break;
        case 'DELETE_MOVIE':
            break;
        case 'SELECT_MOVIE':
            break;
        case 'SEARCH_MOVIE':
            break;
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
                displayedMovies: action.movies,
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware)),
);

export default store;
