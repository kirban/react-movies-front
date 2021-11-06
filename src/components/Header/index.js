import React, { useState, useEffect, useContext, useCallback } from 'react';
import { MoviePreview, MovieSearch } from '@components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '@styles/header.scss';
import * as _ from 'lodash';

const Header = ({selectedMovie, onMovieCreate}) => {
    const [previewActive, setPreviewActive] = useState(false)

    useEffect(() => {
        setPreviewActive(Object.keys(selectedMovie).length !== 0)
    }, [selectedMovie])

    return(
        <header>
            { (previewActive) ? <MoviePreview selectedMovie={selectedMovie} /> : <MovieSearch onMovieCreate={onMovieCreate} />}
        </header>
    )
}

Header.propTypes = {
    selectedMovie: PropTypes.object,
    onMovieCreate: PropTypes.func,
}

const createMovie = (createdMovie) => ({
    type: "CREATE_MOVIE",
    payload: {
        movie: createdMovie,
    },
});

const mapStateToProps = state => {
    return {
        selectedMovie: state.selectedMovie,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onMovieCreate: movie => dispatch(createMovie(movie)), // TODO: change type to on modal show or smth like this
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)