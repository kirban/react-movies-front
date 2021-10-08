import React from 'react';
import PropTypes from 'prop-types';
import "@styles/moviesList.scss"
import { GenreToggle, ErrorBoundary } from '@components';
import * as moviesListSchema from '../../schemas/moviesList';
import moviesList from '../../mocks/movies.js';

const mockedMovieGenres = [ 'documentary', 'comedy', 'horror', 'crime' ];

export default class MoviesList extends React.Component {
    constructor(){
        super();
        this.counter = 0;
    }

    handleToggleActionsMenu(e) {
        const moviesMenu = e.target.closest(".moviesActionMenu");
        if (!moviesMenu) {
            e.target.nextSibling.classList.toggle("active");
        }
        moviesMenu.classList.toggle("active")
    }

    render() {
        return (
            <>
                <div className="navbar">
                    <ErrorBoundary>
                        <GenreToggle genresList={mockedMovieGenres}/>
                    </ErrorBoundary>
                    <div className="sortItemsContainer">
                        <label htmlFor="sortItems">sort by</label>
                        <select id="sortItems">
                            <option defaultValue>release date</option>
                        </select>
                    </div>
                </div>
                <hr />
                <div className="searchResultsCounter"><b>{this.counter}</b> movies found</div>
                <div className="cardsGrid">
                    {moviesList.map((item, idx) => (
                        <div key={idx} className="card">
                            <div className="cardContent-top">
                                <div className="breadcrumbs" onClick={this.handleToggleActionsMenu}></div>
                                <div className="moviesActionMenu">
                                    <a href="#" className="cross-close" onClick={this.handleToggleActionsMenu}></a>
                                    <ul className="actions-list">
                                        <li className="edit-item"><a>Edit</a></li>
                                        <li className="remove-item"><a>Delete</a></li>
                                    </ul>
                                </div>
                                
                                <img className="cardContentImage" src={"img/"+item.imageUrl} alt="" />
                            </div>
                            <div className="cardContent-bottom">
                                <div className="cardContentRow-top">
                                    <div className="cardContentTitle">{item.title}</div>
                                    <div className="cardContentLabel">{item.releaseDate.slice(6)}</div>
                                </div>
                                <div className="cardContentDescription">{item.genre}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        )
    }
}

MoviesList.propTypes = {
    moviesList: PropTypes.arrayOf(PropTypes.shape(moviesListSchema))
}
