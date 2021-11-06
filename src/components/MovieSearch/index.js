import React from "react";
import PropTypes from "prop-types";
import { SearchInput } from "@components";
import logo from '../../logo.svg';

const MovieSearch = ({ onMovieCreate }) => {
    return (
        <div id="searchSection">
            <div className="headerBg"></div>
            <div className="headerContent-top">
                <img src={logo} alt="App Logo" className="logo" />
                <button className="btn addMovieBtn" data-action="add" onClick={onMovieCreate}>+ add movie</button>
            </div>
            <div className="headerContent-main">
                <h1>Find your movie</h1>
                <SearchInput />
            </div>
        </div>
    )
}

MovieSearch.propTypes = {
    onMovieCreate: PropTypes.func,
}

export default MovieSearch