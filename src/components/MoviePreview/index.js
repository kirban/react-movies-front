import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { useRouter } from 'next/router';

const MoviePreview = ({ selectedMovie, selectMovie }) => {
    const router = useRouter();

    const handleSearchButtonClick = (e) => {
        e.preventDefault();
        router.push({ query: {} })
        selectMovie({});
    }

    if (!selectedMovie || !Object.keys(selectedMovie).length) return null
    return (
        <div id="selectedMovie">
            <div className="previewTop">
                <a href="">
                    <img src='/logo.svg' alt="App Logo" className="logo" />
                </a>
                <a onClick={handleSearchButtonClick}>
                    <img src='/search.svg' alt="Search" className="search" />
                </a>
            </div>
            <div className="previewMain">
                <img src={`${selectedMovie.poster_path}`} alt="" className="cardPreviewImage" />
                <div className="movieDetails">
                    <div className="movieDetailsMain">
                        <h2 className="movieDetailsHeading">{selectedMovie.title}</h2>
                        <div className="movieDetailsvote_avarage">{selectedMovie.vote_average}</div>
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
    handleSearchButtonClick: PropTypes.func,
}

const mapStateToProps = state => {
    return {
        selectedMovie: state.movies.selectedMovie,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        selectMovie: movie => dispatch({ type: "SELECT_MOVIE", payload: { movie } }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePreview);