import React from 'react';
import PropTypes from 'prop-types';
import "@styles/moviesList.scss"
import { GenreToggle, ErrorBoundary } from '@components';
import * as moviesListSchema from '../../schemas/moviesList' ;

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
                <div className="cardsGrid">
                    {[1,2,3,4,5,6].map((id) => (
                        <div key={id} className="card">
                            <div className="cardContent-top">
                                <div className={"cardContentImage img1"}>
                                    <div className="breadcrumbs"></div>
                                </div>
                            </div>
                            <div className="cardContent-bottom">
                                <div className="cardContentRow-top">
                                    <div className="cardContentTitle">Pulp Fiction</div>
                                    <div className="cardContentLabel">2004</div>
                                </div>
                                <div className="cardContentDescription">Action & Adventure</div>
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
