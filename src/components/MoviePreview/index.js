import React, { useEffect, useState } from "react";
import logo from '../../logo.svg';
import search from '../../search.svg';

const MoviePreview = (props) => {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        setMovie(props.selectedMovie)
    }, [movie])

    return (
        <>
        <div className="previewTop">
            <img src={logo} alt="App Logo" className="logo" />
            <img src={search} alt="Search" className="search" />
        </div>
        <div className="previewMain">
            <img src={`img/${movie.imageUrl}`} alt="" className="cardPreviewImage" />
            <div className="movieDetails">
                <div className="movieDetailsMain">
                    <h2 className="movieDetailsHeading">{movie.title}</h2>
                    <div className="movieDetailsRating">{movie.rating}</div>
                </div>
                <div className="movieDetailsSubtitle">
                    <span className="movieDetailsGenres">{movie.genre}</span> {/* TODO: add .join(',') after changed to list in movie params */} 
                </div>
                <div className="movieDetailsYearAndDuration">
                    <span className="movieDetailsYear">{movie.releaseDate}</span>
                    <span className="movieDetailsDuraiton">{movie.runtime}s</span>
                </div>
                <div className="movieDetailsDescription">{movie.overview}</div>
            </div>
        </div>
        </>
    );
};
export default MoviePreview;