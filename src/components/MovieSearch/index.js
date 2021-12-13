import React from "react";
import PropTypes from "prop-types";
import { SearchInput } from "@components";
import { connect } from "react-redux";
import Link from 'next/link';

const MovieSearch = ({ onMovieSearch, toggleModal }) => {
    return (
        <div id="searchSection">
            <div className="headerBg"></div>
            <div className="headerContent-top">
                <Link href="/" className='nav-link'>
                    <img src='/logo.svg' alt="App Logo" className="logo" />
                </Link>
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