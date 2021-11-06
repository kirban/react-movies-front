import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import "@styles/moviesList.scss"
import { GenreToggle, ErrorBoundary } from '@components';
import { genres } from '../../constant';
import * as movieSchema from '../../schemas/movie.js';
import { connect } from 'react-redux';
import fetchMovies from '../../actions/fetchMovies';

const MoviesList = ({ sortField, movies, onMovieSelect, showModal, fetchMoviesAction, sortByField }) => {
    useEffect(() => {
        console.log("effect working");
        fetchMoviesAction();
    }, [])

    useEffect(() => {
        fetchMoviesAction()
    }, [sortField])

    const handleToggleActionsMenu = e => {
        const moviesMenu = e.target.closest(".moviesActionMenu");
        if (!moviesMenu) {
            e.target.nextSibling.classList.toggle("active");
        } else {
            moviesMenu.classList.toggle("active")
        }
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
                    <select id="sortItems" onChange={sortByField}>
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
                                    <li className="edit-item" data-action="edit" data-item-id={item.id} onClick={showModal}><a>Edit</a></li>
                                    <li className="remove-item" data-action="delete" data-item-id={item.id} onClick={showModal}><a>Delete</a></li>
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
    movies: PropTypes.arrayOf(PropTypes.shape(movieSchema)).isRequired,
    onMovieSelect: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired
}

const selectMovie = (selectedMovie) => ({
    type: "SELECT_MOVIE",
    payload: {
        movie: selectedMovie,
    },
});

const sortByField = (fieldName) => ({
    type: "SORT_BY_FIELD",
    payload: {
        field: fieldName
    }
})

const mapStateToProps = state => ({
    movies: state.displayedMovies,
    sortField: state.sortByField,
})

const mapDispatchToProps = dispatch => {
    return {
        fetchMoviesAction: () => dispatch(fetchMovies()),
        sortByField: e => dispatch(sortByField(e.target.value)),
        onMovieSelect: movie => dispatch(selectMovie(movie)),
        onMovieEdit: movie => {},
        onMovieDelete: movie => {},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)