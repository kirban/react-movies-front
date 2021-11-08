import {
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

const initialState = {
    movieData: {},
    loading: false,
    show: false,
    error: null,
    type: "" // add | edit | delete | info 
}

const modalReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TOGGLE_MODAL_SHOW':
            return (() => {
                const title = (action.payload.type === 'add') ? 'add movie' :
                    (action.payload.type === 'edit') ? 'edit movie' :
                    (action.payload.type === 'delete') ? 'delete movie' :
                    action.payload.title;
                console.log('action.payload.movie,',action.payload.movie);
                return {
                    ...state,
                    title,
                    type: action.payload.type,
                    show: !state.show,
                    ...(action.payload.movie && { movieData: action.payload.movie })
                }
            })()
        case 'ADD_MOVIE':
            return (()=>{
                console.log('movie added to reducer', action.payload.movie);
                const { title, vote_average, release_date, overview, genres, runtime } = action.payload.movie;
                return {
                    ...state,
                    show: false,
                    movieData: {
                        title,
                        vote_average,
                        release_date,
                        overview,
                        genres,
                        runtime,
                    },
                }
            })()
        case 'EDIT_MOVIE':
            return (()=>{
                console.log('movie edited in reducer', action.payload.movie);
                const { id, title, vote_average, release_date, overview, genres, runtime } = action.payload.movie;
                return {
                    ...state,
                    show: false,
                    movieData: {
                        id,
                        title,
                        vote_average,
                        release_date,
                        overview,
                        genres,
                        runtime,
                    },
                }
            })()
        case 'DELETE_MOVIE':
            return (()=>{
                console.log('movie deleted in reducer', action.payload.movie)
                const { id } = action.payload.movie;
                return {
                    ...state,
                    show: false,
                    movieData: {
                        id
                    },
                }
            })()
        case CREATE_MOVIE_LOADING:
            return { ...state, loading: true, }
        case CREATE_MOVIE_SUCCESS:
            return { ...state, loading: false, }
        case CREATE_MOVIE_ERROR:
            return { ...state, loading: false, error: action.error }
        default:
            return state
    }
}

export default modalReducer
