const initialState = {
    movieData: {},
    show: false,
    type: "" // form | confirm(for delete) | info 
}

const postMovie = (movie) => {}
const putMovie = (id, data) => {}
const deleteMovie = (id) => {}

const modalReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TOGGLE_MODAL_SHOW':
            return {
                ...state,
                title: action.payload.title,
                type: action.payload.type,
                show: !state.show
            }
        case 'ADD_MOVIE':
            return (()=>{
                const { title, vote_average, release_date, overview, genres, runtime } = action.payload.movie;
                return {
                    ...state,
                    show: false,
                    movieData: {
                        "title": "Body of Lies",
                        "vote_average": 6.5,
                        "release_date": "2008-10-10",
                        "overview": "The CIA’s hunt is on for the mastermind of a wave of terrorist attacks. Roger Ferris is the agency’s man on the ground, moving from place to place, scrambling to stay ahead of ever-shifting events. An eye in the sky – a satellite link – watches Ferris.  At the other end of that real-time link is the CIA’s Ed Hoffman, strategizing events from thousands of miles away. And as Ferris nears the target, he discovers trust can be just as dangerous as it is necessary for survival.",
                        "genres": [
                            "Action",
                            "Drama",
                            "Thriller"
                        ],
                        "runtime": 128
                    },
                }
            })()
        case 'EDIT_MOVIE':
            return (()=>{
                const { id, title, vote_average, release_date, overview, genres, runtime } = action.payload.movie;
                return {
                    ...state,
                }
            })()
        case 'DELETE_MOVIE':
            return (()=>{
                const { id } = action.payload.movie;
                return {
                    ...state,
                }
            })()
        default:
            return state
    }
}

export default modalReducer
