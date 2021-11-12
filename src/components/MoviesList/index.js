import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import "@styles/moviesList.scss"
import { GenreToggle, ErrorBoundary } from '@components';
import { genres } from '../../constant';
import { connect } from 'react-redux';
import fetchMovies from '../../actions/fetchMovies';
import { useLocation, useHistory } from 'react-router';

const useQuery = () => new URLSearchParams(useLocation().search);

const MoviesList = ({ movies, sortByField, selectMovie, showEdit, showDelete, searchByText }) => {
    const { pathname, search } = useLocation();
    const history = useHistory();
    const query = useQuery();
    const sortByParam = query.get('sortBy');
    const movieIdParam = query.get('movie');
    const sortOrderParam = query.get('sortOrder');
    const searchByParam = query.get('searchBy');
    const filterParam = query.get('filter');
    const offsetParam = query.get('offset');


    useEffect(() => {
        if (pathname === '/search') {
            searchByText('');
        }

        if (pathname.slice(0,8) === '/search/') {
            searchByText(pathname.slice(8))
        }
    }, [])

    useEffect(() => {
        if (sortByParam) {
            sortByField(sortByParam);
        }
    }, [sortByParam])

    useEffect(() => {
        if (movieIdParam) {
            selectMovie(movies.find(m => m.id === +movieIdParam));
        }
    },[movieIdParam])

    const onMovieSelect = movie => {
        history.push({ search: `?movie=${movie.id}` })
    }

    const handleToggleActionsMenu = e => {
        const moviesMenu = e.target.closest(".moviesActionMenu");
        if (!moviesMenu) {
            e.target.nextSibling.classList.toggle("active");
        } else {
            moviesMenu.classList.toggle("active")
        }
    }

    const handleFieldSort = e => {
        const fieldName = e.target.value;
        history.push({ search: `?sortBy=${fieldName}` })
    }

    // const moviesSort = e => {
    //     const sortPropertyValue = e.target.value;

    //     movies = movies.sort((a, b) => (a[sortPropertyValue] > b[sortPropertyValue]) ? 1 : -1)

    //     const sortingIcon = e.target.nextSibling;
    //     // TODO: rotate icon
    // }

    return(
        <>
            <div className="navbar">
                <ErrorBoundary>
                    <GenreToggle genresList={genres}/>
                </ErrorBoundary>
                <div className="sortItemsContainer">
                    <label htmlFor="sortItems">sort by</label>
                    <select id="sortItems" onChange={handleFieldSort}>
                        <option defaultValue value="release_date">release date</option>
                        <option value="title">title</option>
                        <option value="vote_average">rating</option>
                    </select>
                    <i className="sort sort-asc"></i>
                </div>
            </div>
            <hr />
            <div className="searchResultsCounter"><b>{movies.length}</b> movies found</div>
            <div className="cardsGrid">
                {movies.map((item) => (
                    <div key={item.id} className="card">
                        <div className="cardContent-top">
                            <div className="breadcrumbs" onClick={handleToggleActionsMenu}></div>
                            <div className="moviesActionMenu">
                                <a href="#" className="cross-close" onClick={handleToggleActionsMenu}></a>
                                <ul className="actions-list" onClick={handleToggleActionsMenu}>
                                    <li className="edit-item" data-action="edit" data-item-id={item.id} onClick={showEdit.bind(null, item)}><a>Edit</a></li>
                                    <li className="remove-item" data-action="delete" data-item-id={item.id} onClick={showDelete.bind(null, item)}><a>Delete</a></li>
                                </ul>
                            </div>
                            
                            <img className="cardContentImage" src={item.poster_path} alt="" onClick={onMovieSelect.bind({}, item)}/>
                        </div>
                        <div className="cardContent-bottom" onClick={onMovieSelect.bind({}, item)}>
                            <div className="cardContentRow-top">
                                <div className="cardContentTitle">{item.title}</div>
                                <div className="cardContentLabel">{item.release_date.slice(6)}</div>
                            </div>
                            <div className="cardContentDescription">{item.genres.join(', ')}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

MoviesList.propTypes = {
    movies: PropTypes.array,
    onMovieSelect: PropTypes.func,
    showEdit: PropTypes.func,
    showDelete: PropTypes.func,
}

const selectMovieAction = (selectedMovie) => ({
    type: "SELECT_MOVIE",
    payload: {
        movie: selectedMovie,
    },
});

const sortByFieldAction = (fieldName) => ({
    type: "SORT_BY_FIELD",
    payload: {
        field: fieldName
    }
})

const searchByTextAction = (text) => ({
    type: "SEARCH_BY_TEXT",
    payload: {
        text
    }
})

const mapStateToProps = state => ({
    movies: state.movies.displayedMovies,
})

const mapDispatchToProps = dispatch => {
    return {
        fetchMoviesAction: () => dispatch(fetchMovies()),
        sortByField: fieldName => {dispatch(sortByFieldAction(fieldName)); dispatch(fetchMovies());},
        searchByText: text => { dispatch(searchByTextAction(text)); dispatch(fetchMovies()); },
        showEdit: movie => dispatch({ type: 'TOGGLE_MODAL_SHOW', payload: { type: 'edit', movie } }),
        showDelete: movie => dispatch({ type: 'TOGGLE_MODAL_SHOW', payload: { type: 'delete', movie } }),
        selectMovie: movie => dispatch(selectMovieAction(movie)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)