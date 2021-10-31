import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import sortByField from "./actions/sortByFields";
import sortByGenre from "./actions/sortByGenre";
import fetchMovies from "./actions/fetchMovies";

const initialState = {
    displayedMovies: [],
    selectedMovie: {},
    searchText: "",
    sortByField: "", // field of movie
    sortOrder: "", // asc or desc
    searchBy: "", // title or genres
    genresFilter: "", // name of genre
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_MOVIES':
            return fetchMovies(state, action.payload);
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
        default:
            return state;
    }
}

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk),
);

export default store;
