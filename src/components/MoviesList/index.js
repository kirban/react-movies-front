import React from 'react';
import PropTypes from 'prop-types';
import "@styles/moviesList.scss"
import { GenreToggle, ErrorBoundary } from '@components';
import { genres } from '../../constant';
import * as movieSchema from '../../schemas/movie.js';

const MoviesList = ({ movies, onMovieSelected, showModal }) => {
    const handleToggleActionsMenu = e => {
        const moviesMenu = e.target.closest(".moviesActionMenu");
        if (!moviesMenu) {
            e.target.nextSibling.classList.toggle("active");
        } else {
            moviesMenu.classList.toggle("active")
        }
    }

    const handleMovieSelect = movie => {
        onMovieSelected(movie)
    }

    const moviesSort = e => {
        const sortPropertyValue = e.target.value;

        movies = movies.sort((a, b) => (a[sortPropertyValue] > b[sortPropertyValue]) ? 1 : -1)

        const sortingIcon = e.target.nextSibling;
        // TODO: rotate icon
    }

    return(
        <>
            <div className="navbar">
                <ErrorBoundary>
                    <GenreToggle genresList={genres}/>
                </ErrorBoundary>
                <div className="sortItemsContainer">
                    <label htmlFor="sortItems">sort by</label>
                    <select id="sortItems" onChange={moviesSort}>
                        <option defaultValue value="release_date">release date</option>
                        <option value="title">title</option>
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
                            
                            <img className="cardContentImage" src={"img/"+item.poster_path} alt="" onClick={handleMovieSelect.bind({}, item)}/>
                        </div>
                        <div className="cardContent-bottom" onClick={handleMovieSelect.bind({}, item)}>
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
    onMovieSelected: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired
}

export default MoviesList