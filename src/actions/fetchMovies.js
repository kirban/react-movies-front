const fetchMovies = (state, payload) => (dispatch) => {
    return { ...state };
}

export default fetchMovies;


const actionName = "actionname"

function actionCreator(){
    return {
        type: actionName
    }
}

const asyncActionCreator = () => (dispatch) => {
    setTimeout(() => {
        dispatch(actionCreator)
    }, 1000)
}