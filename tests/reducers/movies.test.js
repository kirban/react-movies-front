import moviesReducer from '../../src/reducers/moviesReducer'
import {
    LOAD_MOVIES_LOADING,
    LOAD_MOVIES_SUCCESS,
    LOAD_MOVIES_ERROR,
    LOAD_MOVIE_BY_ID_LOADING,
    LOAD_MOVIE_BY_ID_SUCCESS,
    LOAD_MOVIE_BY_ID_ERROR,
} from "../../src/constant/actionNames";
const mockedInitialState = {
    displayedMovies: [],
    selectedMovie: {},
    searchText: "",
    sortByField: "",
    sortOrder: "asc",
    searchBy: "",
    genresFilter: "",
    offset: "",
    limit: "6",
    error: "",
    loading: false,
}

describe('movies reducer', () => {
    const movieAction = { type: '', payload: { movie: { id: 1 } } };

    afterEach(() => {
        movieAction.type = ''
        movieAction.payload = {}
    })
    it('should return initial state', () => {
        expect(moviesReducer(undefined, {})).toEqual(mockedInitialState)
    });
    it('should handle SELECT_MOVIE', () => {
        movieAction.type = 'SELECT_MOVIE'
        const expectedState = { ...mockedInitialState, selectedMovie: movieAction.payload.movie }
        expect(moviesReducer(mockedInitialState, movieAction)).toEqual(expectedState)
    });
    it('should handle SEARCH_MOVIE_BY_TEXT', () => {
        movieAction.type = 'SEARCH_MOVIE_BY_TEXT'
        movieAction.payload.text = 'test_string'
        const expectedState = { ...mockedInitialState, searchBy: 'title', searchText: 'test_string'}
        expect(moviesReducer(mockedInitialState, movieAction)).toEqual(expectedState)
    });
    it('should handle SORT_BY_FIELD when field is equal to sortByField & sortOrder=asc', () => {
        movieAction.type = 'SORT_BY_FIELD'
        movieAction.payload.field = 'title'
        mockedInitialState.sortByField = 'title'
        mockedInitialState.sortOrder = 'asc'
        const expectedState = { ...mockedInitialState, sortByField: 'title', sortOrder: 'desc' }
        expect(moviesReducer(mockedInitialState, movieAction)).toEqual(expectedState)
        mockedInitialState.sortByField = ''
        mockedInitialState.sortOrder = ''
    });
    it('should handle SORT_BY_FIELD when field is NOT equal to sortByField & sortOrder != asc', () => {
        movieAction.type = 'SORT_BY_FIELD'
        movieAction.payload.field = 'title'
        mockedInitialState.sortByField = 'genre'
        mockedInitialState.sortOrder = 'desc'
        const expectedState = { ...mockedInitialState, sortByField: 'title', sortOrder: 'asc' }
        expect(moviesReducer(mockedInitialState, movieAction)).toEqual(expectedState)
        mockedInitialState.sortByField = ''
        mockedInitialState.sortOrder = ''
    });
    it('should handle SORT_BY_GENRE for drama', () => {
        movieAction.type = 'SORT_BY_GENRE'
        movieAction.payload = { genre: 'drama', searchBy: 'genre' }
        const expectedState = { ...mockedInitialState, genresFilter: 'drama', searchBy: 'genre' }
        expect(moviesReducer(mockedInitialState, movieAction)).toEqual(expectedState)
    });
    it('should handle SEARCH_BY_TEXT', () => {
        movieAction.type = 'SEARCH_BY_TEXT'
        movieAction.payload = { text: 'Marvel' }
        const expectedState = { ...mockedInitialState, searchText: 'Marvel', searchBy: 'title' }
        expect(moviesReducer(mockedInitialState, movieAction)).toEqual(expectedState)
    });
    it(`should handle ${LOAD_MOVIES_LOADING}`, () => {
        movieAction.type = LOAD_MOVIES_LOADING
        expect(moviesReducer(mockedInitialState, movieAction)).toEqual({
            ...mockedInitialState,
            loading: true,
            error: ""
        })
    });
    it(`should handle ${LOAD_MOVIES_SUCCESS}`, () => {
        movieAction.type = LOAD_MOVIES_SUCCESS
        movieAction.payload = { movies: [ { id: 1 } ] }
        expect(moviesReducer(mockedInitialState, movieAction)).toEqual({
            ...mockedInitialState,
            loading: false,
            displayedMovies: movieAction.payload.movies
        })
    });
    it(`should handle ${LOAD_MOVIES_ERROR}`, () => {
        movieAction.type = LOAD_MOVIES_ERROR
        movieAction.error = "Test error"
        expect(moviesReducer(mockedInitialState, movieAction)).toEqual({
            ...mockedInitialState,
            loading: false,
            error: movieAction.error
        })
    });
    it(`should handle ${LOAD_MOVIE_BY_ID_LOADING}`, () => {
        movieAction.type = LOAD_MOVIE_BY_ID_LOADING
    });
    it(`should handle ${LOAD_MOVIE_BY_ID_SUCCESS}`, () => {
        movieAction.type = LOAD_MOVIE_BY_ID_SUCCESS
    });
    it(`should handle ${LOAD_MOVIE_BY_ID_ERROR}`, () => {
        movieAction.type = LOAD_MOVIE_BY_ID_ERROR
    });
})