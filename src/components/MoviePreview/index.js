import React, { useContext } from "react";
import PropTypes from 'prop-types';
import logo from '../../logo.svg';
import search from '../../search.svg';
import { Context } from '../../context';

const MoviePreview = ({ selectedMovie }) => {

    const { handleSearchButtonClick } = useContext(Context)

    return (
        <div id="selectedMovie">
            <div className="previewTop">
                <a href="">
                    <img src={logo} alt="App Logo" className="logo" />
                </a>
                <a onClick={handleSearchButtonClick}>
                    <img src={search} alt="Search" className="search" />
                </a>
            </div>
            <div className="previewMain">
                <img src={`img/${selectedMovie.poster_path}`} alt="" className="cardPreviewImage" />
                <div className="movieDetails">
                    <div className="movieDetailsMain">
                        <h2 className="movieDetailsHeading">{selectedMovie.title}</h2>
                        <div className="movieDetailsvote_avarage">{selectedMovie.vote_avarage}</div>
                    </div>
                    <div className="movieDetailsSubtitle">
                        <span className="movieDetailsGenres">{selectedMovie.genres.join(', ')}</span>
                    </div>
                    <div className="movieDetailsYearAndDuration">
                        <span className="movieDetailsYear">{selectedMovie.release_date}</span>
                        <span className="movieDetailsDuraiton">{selectedMovie.runtime}s</span>
                    </div>
                    <div className="movieDetailsDescription">{selectedMovie.overview}</div>
                </div>
            </div>
        </div>
    );
};

MoviePreview.propTypes = {
    selectedMovie: PropTypes.object,
}

export default MoviePreview;