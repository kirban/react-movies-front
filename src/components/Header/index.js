import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { MoviePreview, MovieSearch } from '@components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMovieByIdRequest } from "../../actions/movieRequests";

import '@styles/header.scss';

const useQuery = () => new URLSearchParams(useLocation().search);

const Header = ({ selectedMovie, getMovie }) => {
    const query = useQuery();
    const movieIdParam = query.get('movie');
    const [previewActive, setPreviewActive] = useState(false)

    useEffect(() => {
        if(movieIdParam) {
            setPreviewActive(true);
            getMovie(movieIdParam);
        }
    }, [])

    useEffect(() => {
        if (selectedMovie) {
            setPreviewActive(Object.keys(selectedMovie).length !== 0)
        }
    }, [selectedMovie])

    return(
        <header>
            { (previewActive) ? <MoviePreview /> : <MovieSearch />}
        </header>
    )
}

Header.propTypes = {
    selectedMovie: PropTypes.object,
    getMovie: PropTypes.func,
}

const mapStateToProps = state => {
    return {
        selectedMovie: state.movies.selectedMovie,
    };
}

const mapDispatchToProps = dispatch => ({
    getMovie: movieId => dispatch(getMovieByIdRequest(movieId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)