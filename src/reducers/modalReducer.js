const initialState = {
    movieData: {},
    show: false,
    type: "" // add | edit | delete | info 
}

const postMovie = (movie) => {}
const putMovie = (id, data) => {}
const deleteMovie = (id) => {}

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
        default:
            return state
    }
}

export default modalReducer
