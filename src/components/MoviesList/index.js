import React from 'react';
import PropTypes from 'prop-types';
import "@styles/moviesList.scss"
import { GenreToggle, ErrorBoundary } from '@components';

const mockedMovieGenres = [ 'documentary', 'comedy', 'horror', 'crime' ];

export default class MoviesList extends React.Component {
    constructor(){
        super();
        this.counter = 0;
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
                {/* for loop will be here. Later iterate over props & add MovieCard component */}
                
            </>
        )
    }
}

MoviesList.propTypes = {
    moviesList: PropTypes.arrayOf(PropTypes.object)
}
