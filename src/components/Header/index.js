import React, { useState, useEffect, useContext, useCallback } from 'react';
import { MoviePreview } from '@components';
import PropTypes from 'prop-types';

import '@styles/header.scss';
import * as _ from 'lodash';
import { Context } from '../../context'
import { MovieSearch } from '@components';

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
                { (previewActive) ? <MoviePreview selectedMovie={selectedMovie} /> : <MovieSearch onMovieCreate={onMovieCreate} />}
            </header>
        </Context.Provider>
    )
}

Header.propTypes = {
    selectedMovie: PropTypes.object,
}

export default Header