import { BASE_URL } from "../constant/index";

import {
    LOAD_MOVIES_LOADING,
    LOAD_MOVIES_SUCCESS,
    LOAD_MOVIES_ERROR,
    CREATE_MOVIE_LOADING,
    CREATE_MOVIE_SUCCESS,
    CREATE_MOVIE_ERROR,
    UPDATE_MOVIE_LOADING,
    UPDATE_MOVIE_SUCCESS,
    UPDATE_MOVIE_ERROR,
    DELETE_MOVIE_LOADING,
    DELETE_MOVIE_SUCCESS,
    DELETE_MOVIE_ERROR,
} from "../constant/actionNames";

const postMovieRequest = () => (dispatch, getState) => {
    const { movieData } = getState().modal;
    dispatch({ type: CREATE_MOVIE_LOADING })
    fetch(`${BASE_URL}/movies`, { method: 'POST', body: JSON.stringify({ ...movieData }), headers: { 'Content-Type': 'application/json' }})
        .then(response => response.json())
        .then(newMovie => dispatch({ type: CREATE_MOVIE_SUCCESS, payload: { newMovie } }))
        .catch(error => dispatch({ type: CREATE_MOVIE_ERROR, error }))
}

const putMovieRequest = () => (dispatch, getState) => {
    const { movieData } = getState().modal;
    dispatch({ type: UPDATE_MOVIE_LOADING });
    fetch(`${BASE_URL}/movies`, { method: 'PUT', body: JSON.stringify({ ...movieData }), headers: { 'Content-Type': 'application/json' } })
        .then(newMovie => dispatch({ type: UPDATE_MOVIE_SUCCESS, payload: { newMovie } }))
        .catch(error => dispatch({ type: UPDATE_MOVIE_ERROR, error }))
}

const deleteMovieRequest = () => (dispatch, getState) => {
    dispatch({ type: DELETE_MOVIE_LOADING });
    const { id } = getState().modal.movieData;
    fetch(`${BASE_URL}/movies/${id}`, { method: 'DELETE' })
        .then(() => dispatch({ type: DELETE_MOVIE_SUCCESS }))
        .catch(error => dispatch({ type: DELETE_MOVIE_ERROR, error }))
}

export {
    postMovieRequest,
    putMovieRequest,
    deleteMovieRequest,
}