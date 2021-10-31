import React, { useState, useEffect, useContext, useCallback } from 'react';
import { SearchInput, MoviePreview } from '@components';
import PropTypes from 'prop-types';
import logo from '../../logo.svg';
import '@styles/header.scss';
import * as _ from 'lodash';
import { Context } from '../../context'

const Header = ({ selectedMovie, onMovieCreate }) => {
    const initialMovie = {}
    const [previewActive, setPreviewActive] = useState(false)

    const { handleMovieSelect } = useContext(Context)

    useEffect(() => {
        
        if(!_.isEmpty(selectedMovie) && previewActive === false) {
            setPreviewActive(true)
        }

        handleMovieSelect(selectedMovie)

    }, [selectedMovie])

    const handleSearchButtonClick = useCallback(
        () => {
            setPreviewActive(false)
            handleMovieSelect(initialMovie)
        },
        [setPreviewActive, handleMovieSelect],
    )

    return(
        <Context.Provider value={{
            handleSearchButtonClick
        }}>
            <header>
                <div id="selectedMovie" className={(!previewActive) ? "hidden" : ""}>
                    {(Object.keys(selectedMovie).length) ? <MoviePreview selectedMovie={selectedMovie} /> : ""}
                </div>
                <div id="searchSection" className={(previewActive) ? "hidden" : ""}>
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
            </header>
        </Context.Provider>
    )
}

Header.propTypes = {
    selectedMovie: PropTypes.object,
    onMovieCreate: PropTypes.func,
}

export default Header