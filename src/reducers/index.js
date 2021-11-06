import { combineReducers } from "redux"
import moviesReducer from "./moviesReducer"
import modalReducer from "./modalReducer"

export default combineReducers({ 
    movies: moviesReducer,
    modal: modalReducer,
})
