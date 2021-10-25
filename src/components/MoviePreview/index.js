import React, { useContext } from "react";
import PropTypes from 'prop-types';
import logo from '../../logo.svg';
import search from '../../search.svg';
import { Context } from '../../context';

const MoviePreview = (props) => {

    const { handleSearchButtonClick } = useContext(Context)

    return (
        <>
            <div className="previewTop">
                <a href="">
                    <img src={logo} alt="App Logo" className="logo" />
                </a>
                <a onClick={handleSearchButtonClick}>
                    <img src={search} alt="Search" className="search" />
                </a>
            </div>
            <div className="previewMain">
                <img src={`img/${props.selectedMovie.imageUrl}`} alt="" className="cardPreviewImage" />
                <div className="movieDetails">
                    <div className="movieDetailsMain">
                        <h2 className="movieDetailsHeading">{props.selectedMovie.title}</h2>
                        <div className="movieDetailsRating">{props.selectedMovie.rating}</div>
                    </div>
                    <div className="movieDetailsSubtitle">
                        <span className="movieDetailsGenres">{props.selectedMovie.genre}</span> {/* TODO: add .join(',') after changed to list in props.selectedMovie params */} 
                    </div>
                    <div className="movieDetailsYearAndDuration">
                        <span className="movieDetailsYear">{props.selectedMovie.releaseDate}</span>
                        <span className="movieDetailsDuraiton">{props.selectedMovie.runtime}s</span>
                    </div>
                    <div className="movieDetailsDescription">{props.selectedMovie.overview}</div>
                </div>
            </div>
        </>
    );
};

MoviePreview.propTypes = {
    selectedMovie: PropTypes.object,
    onSearchButtonClick: PropTypes.func,
}

export default MoviePreview;