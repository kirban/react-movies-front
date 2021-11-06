import React from "react";
import PropTypes from "prop-types";
import { SearchInput } from "@components";
import logo from '../../logo.svg';
import { connect } from "react-redux";

const MovieSearch = ({ onMovieSearch, toggleModal }) => {
    return (
        <div id="searchSection">
            <div className="headerBg"></div>
            <div className="headerContent-top">
                <img src={logo} alt="App Logo" className="logo" />
                <button className="btn addMovieBtn" data-action="add" onClick={toggleModal}>+ add movie</button>
            </div>
            <div className="headerContent-main">
                <h1>Find your movie</h1>
                <SearchInput />
            </div>
        </div>
    )
}

MovieSearch.propTypes = {
    toggleModal: PropTypes.func,
    onMovieSearch: PropTypes.func,
}

const mapDispatchToProps = dispatch => ({
    onMovieSearch: () => {},
    toggleModal: () => dispatch({ type: 'TOGGLE_MODAL_SHOW', payload: { title: 'add movie', type: 'add' } }),
})

export default connect(null, mapDispatchToProps)(MovieSearch)